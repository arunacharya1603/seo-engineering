const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { mkdtempSync, mkdirSync, readFileSync, readdirSync, lstatSync, existsSync, writeFileSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join, resolve } = require('node:path');

const repo = resolve(__dirname, '..');
const version = require('../package.json').version;
const npm = process.env.npm_execpath;
const env = { ...process.env, DISABLE_TELEMETRY: '1', DO_NOT_TRACK: '1', NO_COLOR: '1' };
const assets = ['SKILL.md', 'references/content-and-trust-review.md', 'references/official-resources.md', 'templates/content-brief-template.md', 'templates/seo-audit-report-template.md'];
let workspace;
let project;
let cli;

function run(script, args, cwd = project) {
  const result = spawnSync(process.execPath, [script, ...args], {
    cwd, env, encoding: 'utf8', timeout: 60000,
  });
  assert.ifError(result.error);
  return result;
}

function succeeds(result) {
  assert.equal(result.status, 0, result.stdout + result.stderr);
}

function files(directory, prefix = '') {
  return readdirSync(directory).flatMap(name => {
    const path = join(directory, name);
    const stat = lstatSync(path);
    assert.equal(stat.isSymbolicLink(), false, `Unexpected link: ${path}`);
    return stat.isDirectory() ? files(path, `${prefix}${name}/`) : [`${prefix}${name}`];
  }).sort();
}

function stagingDirectories() {
  return readdirSync(tmpdir()).filter(name => name.startsWith('seo-engineering-')).sort();
}

before(() => {
  assert.ok(npm, 'Run these tests with npm test so the npm CLI path is available.');
  workspace = mkdtempSync(join(tmpdir(), 'seo engineering install test-'));
  const installation = join(workspace, 'package install');
  mkdirSync(installation);
  project = join(installation, 'website & project');
  mkdirSync(project);
  const packed = run(npm, ['pack', '--json', '--ignore-scripts', '--offline', '--pack-destination', workspace], repo);
  succeeds(packed);
  const manifest = JSON.parse(packed.stdout)[0];
  assert.deepEqual(manifest.files.map(file => file.path).sort(), [...assets, 'README.md', 'package.json', 'bin/seo-engineering.cjs'].sort());
  succeeds(run(npm, ['install', join(workspace, manifest.filename), '--ignore-scripts', '--no-audit', '--no-fund', '--offline'], installation));
  cli = join(installation, 'node_modules', 'seo-engineering', 'bin', 'seo-engineering.cjs');
});

after(() => {
  // Only remove the fresh test directory, never a supplied project or home path.
  if (workspace) rmSync(workspace, { recursive: true, force: true });
});

test('the packed npm executable exposes help and the correct version without installing', () => {
  const help = run(npm, ['exec', '--offline', '--', 'seo-engineering', '--help']);
  succeeds(help);
  assert.match(help.stdout, /Usage: npx seo-engineering/);
  const result = run(npm, ['exec', '--offline', '--', 'seo-engineering', '--version']);
  succeeds(result);
  assert.equal(result.stdout.trim(), version);
  assert.equal(existsSync(join(project, '.agents')), false);
});

test('invalid options fail without installing or leaving a temporary source', () => {
  const before = stagingDirectories();
  const result = run(cli, ['--link']);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Unknown option/);
  assert.equal(existsSync(join(project, '.agents')), false);
  assert.deepEqual(stagingDirectories(), before);
});

test('installer errors propagate and clean up the temporary source', () => {
  const before = stagingDirectories();
  const result = run(cli, ['--agent', 'nonexistent-seo-test-agent', '--yes']);
  assert.notEqual(result.status, 0, result.stdout + result.stderr);
  assert.match(result.stdout + result.stderr, /[Ii]nvalid agent/);
  assert.equal(existsSync(join(project, '.agents')), false);
  assert.deepEqual(stagingDirectories(), before);
});

test('one npm command copies the exact skill for each documented agent', () => {
  const before = stagingDirectories();
  for (const [agent, agentDirectory] of [['codex', '.agents'], ['claude-code', '.claude'], ['cursor', '.agents']]) {
    const target = join(project, agent);
    mkdirSync(target);
    succeeds(run(npm, ['exec', '--offline', '--', 'seo-engineering', '--agent', agent, '--yes'], target));
    const installed = join(target, agentDirectory, 'skills', 'seo-engineering');
    assert.deepEqual(files(installed), [...assets].sort());
    for (const asset of assets) {
      assert.deepEqual(readFileSync(join(installed, asset)), readFileSync(join(repo, asset)));
    }
  }
  assert.deepEqual(stagingDirectories(), before);
});

test('an explicitly accepted reinstall replaces this skill and preserves unrelated files', () => {
  const target = join(project, 'codex');
  const installed = join(target, '.agents', 'skills', 'seo-engineering');
  const unrelated = join(target, '.agents', 'skills', 'another-skill');
  mkdirSync(unrelated);
  writeFileSync(join(unrelated, 'SKILL.md'), 'Keep this unrelated skill.');
  writeFileSync(join(target, 'index.html'), '<h1>My website</h1>');
  writeFileSync(join(installed, 'SKILL.md'), 'Older installed version');
  writeFileSync(join(installed, 'templates', 'seo-audit-report-template.md'), 'Older report template');
  rmSync(join(installed, 'references', 'content-and-trust-review.md'));
  writeFileSync(join(installed, 'obsolete.txt'), 'Old release asset');
  succeeds(run(cli, ['--agent', 'codex', '--yes'], target));
  assert.deepEqual(files(installed), [...assets].sort());
  for (const asset of assets) {
    assert.deepEqual(readFileSync(join(installed, asset)), readFileSync(join(repo, asset)));
  }
  assert.equal(readFileSync(join(unrelated, 'SKILL.md'), 'utf8'), 'Keep this unrelated skill.');
  assert.equal(readFileSync(join(target, 'index.html'), 'utf8'), '<h1>My website</h1>');
});
