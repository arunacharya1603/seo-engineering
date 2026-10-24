# seo-engineering: SEO skills for AI coding agents

**seo-engineering** is a free, project-agnostic SEO skill for Codex, Claude Code, Cursor, and other coding agents. It provides instructions, references, and templates for auditing websites, planning search engine optimization work, implementing changes, and validating the results.

Built in public on [GitHub](https://github.com/arunacharya1603/seo-engineering) and available on [npm](https://www.npmjs.com/package/seo-engineering).

## SEO skills and workflows

Use this single agent skill for:

- **Technical SEO audits:** crawling, indexing, robots.txt, XML sitemaps, canonical URLs, redirects, and rendered content.
- **On-page SEO and structured data:** titles, meta descriptions, headings, internal links, and Schema.org markup.
- **Keyword and content planning:** search intent, information architecture, topic coverage, and evidence-based content briefs.
- **Performance and site changes:** Core Web Vitals, migration checks, ecommerce pages, and international SEO.

The included [audit report template](https://github.com/arunacharya1603/seo-engineering/blob/main/templates/seo-audit-report-template.md) and [content brief template](https://github.com/arunacharya1603/seo-engineering/blob/main/templates/content-brief-template.md) help organize findings and next steps. The skill adapts to the project's framework and available tools.

## Install

### Install in your coding agent

Run this command from your project directory:

```bash
npx skills add arunacharya1603/seo-engineering
```

Follow the prompts to choose your coding agent and installation scope. This command requires Node.js and npm.

### Download from npm

```bash
npm install --save-dev seo-engineering
```

The npm package contains the skill instructions, references, and templates. To install that downloaded copy in your coding agent, run:

```bash
npx skills add ./node_modules/seo-engineering
```

### Manual installation for Codex

Copy the `seo-engineering` folder into the repository's `.agents/skills/` directory so the path becomes:

`.agents/skills/seo-engineering/SKILL.md`

The optional `references/` and `templates/` files should remain alongside `SKILL.md` in the same skill folder.

## Use

Ask the coding agent to use the `seo-engineering` skill to audit, plan, implement or validate a specific SEO task. The skill requires an audit-first approach, evidence-based findings, minimal changes, regression testing, and explicit reporting of what could not be verified.

The skill supports many site types and frameworks; it does not promise rankings. For current requirements, consult the linked official documentation.

Example requests:

> Use the seo-engineering skill to audit this project's SEO. Report the findings with evidence and recommend the highest-priority improvements.

> Use seo-engineering to check robots.txt, XML sitemaps, canonical URLs, and redirects. Explain which issues could prevent important pages from being indexed.

> Use seo-engineering to create a content brief for this page, including search intent, headings, and relevant internal links. Identify any research or evidence still needed.

## Follow the build

This skill is being developed in public on [GitHub](https://github.com/arunacharya1603/seo-engineering). Explore the files, [follow the changes](https://github.com/arunacharya1603/seo-engineering/commits/main/), or [open an issue](https://github.com/arunacharya1603/seo-engineering/issues) to share feedback, report a problem, or suggest an improvement.
