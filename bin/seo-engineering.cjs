#!/usr/bin/env node

const { cpSync, mkdtempSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const { join } = require('node:path');
const { spawnSync } = require('node:child_process');
const { parseArgs } = require('node:util');
const { version } = require('../package.json');

function main() {
  const { values } = parseArgs({
    options: {
      agent: { type: 'string', short: 'a', multiple: true },
      global: { type: 'boolean', short: 'g' },
      yes: { type: 'boolean', short: 'y' },
      help: { type: 'boolean', short: 'h' },
      version: { type: 'boolean', short: 'v' },
    },
  });

  if (values.help) {
    console.log(`Install seo-engineering in your AI coding agent.

Usage: npx seo-engineering [options]

Run from your website project and follow the installation prompts.

  -a, --agent <name>  Choose an agent (e.g. codex, claude-code, cursor); repeat for more
  -g, --global        Install for your user account instead of this project
  -y, --yes           Accept the installer's prompts, including replacements
  -h, --help          Show this help
  -v, --version       Show the package version

Example: npx seo-engineering --agent codex --yes
Update:  npx seo-engineering@latest

Installs the bundled skill. Website changes require using it in your coding agent.`);
    return;
  }
  if (values.version) {
    console.log(version);
    return;
  }

  const installer = require.resolve('skills/bin/cli.mjs');
  const staging = mkdtempSync(join(tmpdir(), 'seo-engineering-'));
  try {
    // Stage only skill assets: never copy the CLI, dependencies or project files.
    const source = join(staging, 'seo-engineering');
    for (const entry of ['SKILL.md', 'references', 'templates']) {
      cpSync(join(__dirname, '..', entry), join(source, entry), { recursive: true });
    }
    const args = [installer, 'add', source, '--copy'];
    for (const agent of values.agent || []) args.push('--agent', agent);
    if (values.global) args.push('--global');
    if (values.yes) args.push('--yes');
    const result = spawnSync(process.execPath, args, { stdio: 'inherit' });
    if (result.error) throw result.error;
    process.exitCode = result.status ?? (result.signal === 'SIGINT' ? 130 : 1);
  } finally {
    // This is the fresh directory returned by mkdtempSync, never an install target.
    rmSync(staging, { recursive: true, force: true });
  }
}

try {
  main();
} catch (error) {
  console.error(`seo-engineering: ${error.message}`);
  process.exitCode = 1;
}
