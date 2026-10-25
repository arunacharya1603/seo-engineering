# seo-engineering: SEO skills for AI coding agents

**seo-engineering** is a free, project-agnostic SEO skill for Codex, Claude Code, Cursor, and other coding agents. It provides instructions, references, and templates for auditing websites, planning search engine optimization work, implementing changes, and validating the results.

Built in public on [GitHub](https://github.com/arunacharya1603/seo-engineering) and available on [npm](https://www.npmjs.com/package/seo-engineering).

## SEO skills and workflows

Use this single agent skill for:

- **Technical SEO audits:** crawling, indexing, robots.txt, XML sitemaps, canonical URLs, redirects, and rendered content.
- **On-page SEO and structured data:** titles, meta descriptions, headings, internal links, and Schema.org markup.
- **Keyword and content planning:** search intent, information architecture, topic coverage, and evidence-based content briefs.
- **Content trust and AI discovery:** claim/source checks, contextual E-E-A-T reviews, and useful answers for AEO/GEO without invented scores or citation guarantees.
- **Performance and site changes:** Core Web Vitals, migration checks, ecommerce pages, and international SEO.

The included [audit report template](https://github.com/arunacharya1603/seo-engineering/blob/main/templates/seo-audit-report-template.md) and [content brief template](https://github.com/arunacharya1603/seo-engineering/blob/main/templates/content-brief-template.md) help organize findings and next steps. The skill adapts to the project's framework and available tools.

## How it adapts to your product

For a broad SEO task, the agent first summarizes the actual offer, intended customers, market, and desired outcome using your project and supplied evidence. It identifies assumptions and asks about material gaps instead of inventing product details.

Recommendations then explain which customer need they address, how they support the product's goal, and why they are worth doing within your constraints. The report separates technical checks from later business outcomes and explains which ideas should wait. Focused requests, such as correcting one product title, use only the context needed for that change.

Version 0.4.0 adds a [content and trust review](https://github.com/arunacharya1603/seo-engineering/blob/main/references/content-and-trust-review.md) that checks whether sources support the actual claim, keeps unsupported claims distinct from disproven claims, and assesses authorship and expertise in context. Reports distinguish verified issues, recommendations, intentional choices, inapplicable checks, unassessed areas, and checks with no issue observed. Implementation status is tracked separately.

This package supplies a skill installer, instructions, and templates. Your coding agent needs access to the relevant project and tools to perform the work; installation alone does not change your website.

## Install

### Install in your coding agent

Run this command from your project directory:

```bash
npx seo-engineering
```

Follow the prompts to choose your coding agent and installation scope. Requires Node.js 22.20 or newer and npm. No GitHub username or account is needed.

The command uses the [Skills installer](https://github.com/vercel-labs/skills) to copy the skill bundled with this npm release into the selected agent's skill directory. The installed skill remains available after npm's cache or the temporary installer files are removed.

For a specific agent without prompts:

```bash
npx seo-engineering --agent codex --yes
```

Use `claude-code` or `cursor` instead of `codex` for those agents. `--yes` accepts the installer's prompts, including replacing an existing copy. For all projects, add `--global`; for help, run `npx seo-engineering --help`.

To update an installed copy, rerun `npx seo-engineering@latest` and choose the same agent and scope. Because this installs local bundled files, use this command for updates instead of `skills update`.

### Download from npm

```bash
npm install --save-dev seo-engineering
```

To set up that downloaded copy in your coding agent, run:

```bash
npx seo-engineering
```

### Manual installation for Codex

Copy the `seo-engineering` folder into the repository's `.agents/skills/` directory so the path becomes:

`.agents/skills/seo-engineering/SKILL.md`

Copy `SKILL.md`, `references/`, and `templates/` together; the CLI and `node_modules/` are not needed in the skill folder.

## Use

Ask the coding agent to use the `seo-engineering` skill to audit, plan, implement or validate a specific SEO task. The skill requires an audit-first approach, evidence-based findings, minimal changes, regression testing, and explicit reporting of what could not be verified.

The skill supports many site types and frameworks; it does not promise rankings. For current requirements, consult the linked official documentation.

Example requests:

> Use the seo-engineering skill to understand this product and its intended customers, then audit its SEO. Explain which improvements support our main goal, show the evidence, and prioritize work we can complete this week.

> Use seo-engineering to check robots.txt, XML sitemaps, canonical URLs, and redirects. Explain which issues could prevent important pages from being indexed.

> Use seo-engineering to create a content brief for this page, including search intent, headings, and relevant internal links. Identify any research or evidence still needed.

> Use seo-engineering to review this page's content and AI-answer usefulness for our actual customers. Check important claims against their sources, explain what is verified or unknown, and prioritize useful changes within our capacity. Preserve our privacy and crawler choices.

## Testing

The installer has automated packed-release checks for Codex, Claude Code, and Cursor. Run `npm ci --ignore-scripts` and `npm test` to reproduce them. See the [0.4.0 evaluation](https://github.com/arunacharya1603/seo-engineering/blob/main/tests/results/0.4.0/report.md) for the release checks and behavioral results. The [0.3.0 installer evaluation](https://github.com/arunacharya1603/seo-engineering/blob/main/tests/results/0.3.0/report.md) also records the unchanged installer's interactive check and platform limitations.

The [test cases and evaluation guide](https://github.com/arunacharya1603/seo-engineering/tree/main/tests) cover product fit, local services, unclear products, focused edits, misleading citations, useful team-maintained documentation, consequential claims, and crawler-policy boundaries. Saved agent responses make the evaluations reviewable; `npm test` runs installer checks, not these agent evaluations.

These synthetic checks assess recommendations and editing behavior. They do not prove live indexing, traffic, conversions, or ranking improvements; those require measurement on the actual website.

## Follow the build

This skill is being developed in public on [GitHub](https://github.com/arunacharya1603/seo-engineering). Explore the files, [follow the changes](https://github.com/arunacharya1603/seo-engineering/commits/main/), or [open an issue](https://github.com/arunacharya1603/seo-engineering/issues) to share feedback, report a problem, or suggest an improvement.
