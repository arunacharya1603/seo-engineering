# SEO Engineering Skill

A portable, project-agnostic SEO engineering skill for coding agents.

Free to install and use, and built in public. Use it to audit a website, plan SEO improvements, implement changes, and validate the results.

## Install

Run this command from your project directory:

```bash
npx skills add arunacharya1603/seo-engineering
```

Follow the prompts to choose your coding agent and installation scope. This command requires Node.js and npm.

### Manual installation for Codex

Copy the `seo-engineering` folder into the repository's `.agents/skills/` directory so the path becomes:

`.agents/skills/seo-engineering/SKILL.md`

The optional `references/` and `templates/` files should remain alongside `SKILL.md` in the same skill folder.

## Use

Ask the coding agent to use the `seo-engineering` skill to audit, plan, implement or validate a specific SEO task. The skill requires an audit-first approach, evidence-based findings, minimal changes, regression testing, and explicit reporting of what could not be verified.

The skill supports many site types and frameworks; it does not promise rankings. For current requirements, consult the linked official documentation.

Example prompt:

> Use the seo-engineering skill to audit this project's SEO. Report the findings with evidence and recommend the highest-priority improvements.

## Follow the build

This skill is being developed in public on [GitHub](https://github.com/arunacharya1603/seo-engineering). Explore the files, [follow the changes](https://github.com/arunacharya1603/seo-engineering/commits/main/), or [open an issue](https://github.com/arunacharya1603/seo-engineering/issues) to share feedback, report a problem, or suggest an improvement.
