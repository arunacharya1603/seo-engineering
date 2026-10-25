# Version 0.3.0 installer evaluation

Date: 2026-10-25. Environment: Windows, PowerShell 7.6, Node.js 24.19.0, npm 11.17.0. Final result: five automated tests passed, and both default-command installation paths completed successfully. The SEO skill and its four assets are unchanged from 0.2.0.

## Implementation

`npx seo-engineering` now has a package executable. It stages only `SKILL.md`, `references/` and `templates/`, then invokes the pinned `skills@1.7.4` installer with copying enabled. It forwards supported agent/scope/confirmation options without a shell, propagates installer failures, and removes its temporary source after normal completion or a handled failure. Users receive ordinary skill files, independent of the npm cache. Reinstall with `npx seo-engineering@latest` to update those copies.

## Checks run

`npm test` packed the release and installed it with cached dependencies in a disposable directory. It exercised the actual npm executable, with the package under a path containing spaces and the target project under a path containing spaces and `&`.

| Check | Result |
|---|---|
| Packed executable help and version, with no skill installation | Passed |
| Unsupported option rejection without side effects | Passed |
| Upstream invalid-agent error propagation and temporary-source cleanup | Passed |
| Separate one-command installs for Codex, Claude Code and Cursor | Passed; each contained exactly four byte-matching, non-symlink assets |
| Explicitly accepted reinstall | Passed; replaced this skill's outdated assets and preserved another skill and website file |

The pinned installer uses `.agents/skills/` for both Codex and Cursor project installations, and `.claude/skills/` for Claude Code. The test checks those documented locations.

Two additional terminal checks used the final tarball:

- `npx seo-engineering` in an AI-agent terminal detected Codex and installed into the disposable project's `.agents/skills/seo-engineering`.
- The same command with agent-detection markers removed exercised the human terminal flow: agent selection, Project scope, and installation confirmation. It completed successfully. The upstream installer's optional `find-skills` offer was declined. This test used an isolated `XDG_STATE_HOME` so selection preferences did not change the user's normal settings.

Both default-command installations contained exactly four assets matching repository bytes. The interactive run's temporary source directory was absent afterward. All seven files in the installed npm package matched the final release sources.

`npm audit --omit=dev --json` reported zero known vulnerabilities for the resolved dependency tree at the time of this check. `git diff --check` passed. This is a point-in-time advisory check, not a guarantee of dependency safety.

Final tarball SHA-1 (npm `dist.shasum`): `b81df5b427b0d876cfd08667b943ce3d9a15e8f8`.

## Failures investigated and limits

- The first offline setup could not access downloaded dependencies because the Windows sandbox uses a separate npm cache. Running the same suite with the populated normal cache resolved this environment failure.
- npm's generated Windows command launcher failed before this CLI started when the **package installation path itself** contained `&`. The suite separates package storage from the target website, as a normal cached `npx` run does. Target website paths with spaces and `&` passed. Package/cache paths containing `&` remain an upstream launcher limitation; use a path without that character if encountered.
- An initial test assumed Cursor used `.cursor/skills/` for project installs. The pinned installer's documentation specifies `.agents/skills/`; the corrected test separately installs for each agent.
- The first sandboxed human-terminal attempt stalled after agent selection and was interrupted. The retry outside that sandbox, with isolated settings, completed all prompts.
- macOS, Linux, global installation, other agent-specific destinations, and forced operating-system termination were not exercised. Normal completion and handled installer failures clean up staging; abrupt process termination can leave temporary files.
- These tests verify installation, payload integrity and scope preservation. They do not prove that every editor will automatically reload an installed skill or that any website's rankings improve. The unchanged product-context behavior is covered by the [0.2.0 evaluation](../0.2.0/report.md).

See [the test guide](../../README.md) and [automated tests](../../installer.test.cjs) to reproduce the checks.
