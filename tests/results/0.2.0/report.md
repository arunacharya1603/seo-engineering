# Version 0.2.0 evaluation

Date: 2026-10-25. Result: all four candidate scenarios met the decision criteria in the [evaluation guide](../../README.md). The 0.1.1 baseline also passed all four scenarios. These observations support releasing the explicit product-context workflow without a detected regression in this sample; they do not establish improved SEO performance.

## Method and scope

Two separate agent contexts applied the baseline and candidate skills to identical synthetic requests and evidence. Each agent received only its skill, supporting resources, and isolated case copies, without the intended answers, grading guide, other variant's responses, or implementation discussion. Each agent handled four cases; these are not repeated independent trials or a cross-model benchmark. A separate review checked decisions against the original evidence and verified filesystem changes.

The baseline was the pre-change 0.1.1 skill at commit `5fd455f`. The candidate skill was extracted from an actual 0.2.0 npm tarball. The candidate's report-writing tool stalled and was resumed using individual file writes; it received no answer hints or decision criteria during recovery. Response length limits kept the exercise bounded and were not used as a quality score.

Sources use reserved `.example` domains. No websites, search accounts or real customers were accessed. Only the focused-edit case authorized a local source change. Recommendations in the other cases were not implemented.

## Observed outcomes

| Case and evidence | 0.1.1 baseline | 0.2.0 candidate | Reviewed behavior |
|---|---|---|---|
| [Software product](../../fixtures/saas/evidence.json) | [Pass](baseline/saas.md) | [Pass](candidate/saas.md) | Targeted UK accounting practices and qualified demos; ranked the verified acquisition-page `noindex` first; respected a developer-day budget; did not chase the template's traffic or invent a trial; preserved private-app access controls. |
| [Local service](../../fixtures/local-service/evidence.json) | [Pass](baseline/local-service.md) | [Pass](candidate/local-service.md) | Corrected the service-page canonical in the plan; stayed within two served neighborhoods and real bicycle services; rejected unsupported ratings/expansion; kept private details protected and intentional booking exclusions intact. Missing analytics and unresolved language support did not block supported fixes. |
| [Unclear product](../../fixtures/unknown-product/evidence.json) | [Pass](baseline/unknown-product.md) | [Pass](candidate/unknown-product.md) | Asked for the missing offer, customer, market and intended action; did not invent a category, keyword demand or free-trial promise; continued supported technical observations and distinguished unknowns from defects. |
| [Focused edit](../../fixtures/focused-edit/request.txt) | [Pass](baseline/focused-edit.md) | [Pass](candidate/focused-edit.md) | Used supplied product facts, changed only the title, and performed no intake or broader audit. Independent byte comparisons confirmed no changes outside the title or in the other nine fixture files. |

The candidate's broad-task responses explicitly summarized the offer, customer, market and outcome, connected changes to that context, separated technical acceptance from later business metrics, and explained deferred work. Similar sound decisions were already present in the baseline; this small exercise does not demonstrate a general success-rate improvement.

## Artifact and structure checks

- Skill Creator `quick_validate.py`: passed with Python 3.12 and isolated PyYAML 6.0.3. The first attempts could not run because PyYAML was absent; after installing it outside the package, validation succeeded.
- `git diff --check`: passed.
- `npm pack --ignore-scripts --offline`: succeeded. The final archive contains exactly six intended files: README, skill, package metadata, official reference, and both templates. Fixtures, results and validation dependencies are excluded.
- A clean offline install of the final local tarball with lifecycle scripts disabled succeeded. SHA-256 comparisons confirmed that all six installed files match the release sources.
- The installed skill, templates, reference and package metadata also match the independently evaluated copy. Only README testing links were added after the behavioral run.
- No application build/runtime suite applies: this package contains instructions and templates, with no executable code or runtime dependencies.

Final tarball SHA-1 (npm `dist.shasum`): `e92746212b44a75b5490db0af20a0f298253ebe4`.

Evaluated `SKILL.md` SHA-256: `85852adf065652f81c1297825f39646b2011e7ccff194e022ea4adabbbe0730c`.

The edited HTML artifacts are saved beside the responses. Their SHA-256 hashes are:

- [Baseline](baseline/recycled-tote.html): `75ea9af92ac8cdb8f0c5e19042e1a2a78484ab9ca0410d24b9bc57a3be5f3bbf`.
- [Candidate](candidate/recycled-tote.html): `902c342e02c5f529388ba21c03dd6b3c15c5715a6f65c826d6f63dd15fec634b`.

Recorded responses are preserved with only local evidence/artifact links made portable. Follow the [evaluation guide](../../README.md) to rerun the cases from fresh copies.

## Limits

Passing these cases does not prove live crawlability, indexing, demand, conversion lift, ranking improvements, or consistent behavior in every coding agent. The exercises directly invoked the skill; automatic skill selection was not evaluated. No rendered website, production deployment, Search Console, keyword-research service or long-term outcome measurement was available. Further evaluation should use authorized real projects and compare verified technical changes and relevant business outcomes over time.
