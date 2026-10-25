# Version 0.4.0 evaluation

Date: 2026-10-25. Environment: Windows, PowerShell 7.6, Node.js 24.19.0, npm 11.17.0.

## Scope and result

This release improves content/source review, contextual trust judgments, and the separation of assessment from implementation status. It preserves the existing installer and its pinned `skills@1.7.4` dependency. It does not add a standalone crawler or audit API.

- Five automated packed-release installer tests passed on the final source.
- Seven behavioral scenarios met their decision criteria after one reporting clarification and a fresh rerun of the affected scenario.
- The previous 0.3.0 skill also handled the three new scenarios well. This sample does not demonstrate a general improvement rate or improved search results.
- Skill structure validation, package-content checks, bundled relative links, and the title-only scope check passed.

## Behavioral method

Independent agents received only a skill snapshot, its bundled resources, raw fixtures, and the fixture requests. They were not given the evaluation rubric, implementation discussion, intended answers, or other agents' outputs. They worked offline in separate temporary directories. Only the focused-edit case permitted changing its copied HTML.

The reference agent used the 0.3.0 skill from commit `86cec36`. The initial candidate and regression agents used the actual extracted 0.4.0 archive. Three new cases were compared with the reference; four existing cases checked regressions. The root reviewer assessed actual responses against [the decision criteria](../../README.md), rather than matching headings or keywords.

One case had a reporting ambiguity: its evidence table correctly treated a health-outcome claim as unverified, but a later summary grouped withdrawing it with verified issues. The skill reference was clarified to keep assessment distinctions consistent in summaries and priorities. A fresh independent agent then evaluated that case using the final archive, without seeing the earlier result or the reason for the rerun. It distinguished a recommendation about the unverified claim from the verified broken reference and contradicted credential. The other six scenarios were not rerun after this narrow reference-only clarification; their observed decisions passed, and the entrypoint, templates, installer, and fixtures were unchanged by it.

## Observed decisions

| Scenario | Result and evidence |
|---|---|
| Claims and evidence | Passed: identified the assignment-time versus resolution-time mismatch, sample limits and lack of causal evidence; did not treat the customer-source timeout as proof of a false count; prioritized public-page indexing and preserved private tickets. [Reference](baseline/claims-and-evidence.md), [candidate](candidate/claims-and-evidence.md). |
| Documentation and coverage | Passed: kept useful team-owned docs, rejected mandatory bios/FAQs/word counts/schema, retained decorative empty alt and private dashboard controls, distinguished supplied CI from tests run and lab performance from unavailable field data. [Reference](baseline/docs-and-coverage.md), [candidate](candidate/docs-and-coverage.md). |
| Trust and AI policy | Passed on rerun: kept the unverified clinical promise distinct from the verified broken citation and contradicted physician role, rejected false credential markup and cosmetic date changes, preserved training preferences and deferred unknown provider controls. [Reference](baseline/trust-and-ai-policy.md), [first pass with ambiguity](candidate/trust-and-ai-policy-first-pass.md), [final rerun](candidate/trust-and-ai-policy.md). |
| SaaS | Passed: prioritized the relevant acquisition page's accidental noindex, stayed within supported capabilities and one-day capacity, did not chase unrelated traffic, and preserved private app access. [Response](regression/saas.md). |
| Local service | Passed: corrected the declared canonical for the real service, respected the two service areas and private address, rejected invented services/ratings, and preserved intentional exclusions. [Response](regression/local-service.md). |
| Unknown product | Passed: identified missing offer/customer/outcome, asked material questions without inventing a business model or keyword demand, and continued bounded technical observations. [Response](regression/unknown-product.md). |
| Focused edit | Passed: changed only the title to `Recycled Cotton Tote, 15 Litre | LoopCarry`, using supplied facts without broadening the task. [Response](regression/focused-edit.md). |

The root reviewer separately compared fixture bytes. The focused HTML exactly matched the original with only the authorized title replacement. All other evaluated fixture copies were unchanged. Raw responses are retained, including the first pass; they are evaluation artifacts, not live website audits or medical advice.

## Installer and package validation

`npm test` completed with **5 passed, 0 failed, 0 skipped** after the final clarification. It packs the actual release source, checks the exact package file allowlist, installs the tarball offline into a fresh directory, and invokes the npm executable:

1. Help and version succeed without installing a skill.
2. An invalid option fails without creating an installation or temporary source.
3. An invalid agent propagates the installer failure and cleans up its temporary source.
4. Codex, Claude Code, and Cursor each receive exact copies of all five skill assets, without symlinks or runtime dependencies in the skill folder.
5. Reinstall replaces stale skill/report content, restores the new missing review reference, removes an obsolete asset belonging to this skill, and preserves another skill and website HTML.

The temporary package installation path contains spaces; the target website path contains spaces and an ampersand. Telemetry is disabled during test installations. Tests use the already populated npm cache outside the restricted sandbox because the sandbox's separate cache lacks the dependencies. No website production files are used.

Additional checks:

- Skill Creator `quick_validate.py` passed against the final extracted package, using Python 3.12 and an isolated PyYAML dependency.
- All eight archive files matched the working source byte for byte. All six relative Markdown resource links resolved inside the package.
- Fixture JSON parsed successfully; package and lockfile versions and the pinned installer dependency matched.
- `git diff --check` passed. No changes were made to `bin/seo-engineering.cjs`.

Final release archive: `seo-engineering-0.4.0.tgz`.

- SHA-1: `50a22036567983cb50f003b67ff4824a10c9c783`
- Integrity: `sha512-dFBQTEy7xnbrfeN1qSWaMwRHxiOWX0GeqlrKu/03boTbUxzXEIvzRvDnof3flUPcSj+WfXNEbaZ3VQDOrvRa/A==`
- Eight entries, 78,369 unpacked bytes: README, package metadata, CLI, skill, two references, and two templates. Tests and evaluation artifacts are excluded.

The initial behavioral archive had SHA-1 `71e1d3a2964b177def294e00321288441e79b8d8`. Only the reporting clarification in `references/content-and-trust-review.md` differs in the final archive.

## Limits

These are synthetic, offline, single-run agent evaluations reviewed by the implementing agent. Cases within each evaluation shared an agent context; this is not a blinded human study, a cross-model benchmark, or a statistical estimate. The rerun adds confidence for one observed ambiguity, not proof that future agents will always follow the distinction.

No live indexing, rankings, AI citations, conversions, clinical claims, external reputation, or website performance improvements were tested. The release author checked the three linked Google guidance pages dated in `official-resources.md`; evaluator agents did not perform fresh external verification.

This release was tested on Windows/Node 24.19.0 only. Node 22.20.0, macOS, Linux, global installation, and forced process termination were not retested. The unchanged default interactive installer was exercised for [0.3.0](../0.3.0/report.md), not repeated here. That report also records the npm/Windows launcher limitation when the package installation path itself contains an ampersand; an ampersand in the website target path is covered by this release's tests.
