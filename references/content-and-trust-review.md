# Content, answers, and trust review

Use this reference for substantive content, AEO/GEO, or E-E-A-T reviews. Adapt the depth to the page's purpose and the consequence of a wrong answer. It supports editorial judgment; it is not an automated audit or a ranking model.

## Start with the visitor's task

Identify the intended reader, their question or decision, the actual offer, and the appropriate next step. Check whether the page answers that need accurately before proposing new sections or keywords. Distinguish a product page, reference documentation, comparison, personal experience, and consequential advice; they need different evidence and structure.

Evaluate whether the answer is easy to find, specific enough to use, and qualified where conditions matter. Keep limitations next to the claim they qualify so a short excerpt remains accurate. Add examples, procedures, comparisons, definitions, or FAQs only when they resolve a real reader need. There is no universal word count, citation count, heading pattern, or FAQ requirement.

Prefer a useful improvement to an existing suitable page over a new page for every question. Do not turn unmeasured query ideas into claims of demand, and do not present formatting choices as proof of AI citation eligibility.

## Check claims against their evidence

For claims that materially affect a reader's decision, trace the page's exact assertion to the available evidence. Prioritize product capabilities, quantitative results, comparisons, credentials, reviews, prices, and consequential advice.

- Check that the source addresses the same product, audience, measurement, baseline, time period, and conditions. A reachable citation does not establish that it supports the sentence. An uncontrolled pilot does not establish causation or a universal result.
- Separate **supported within the evidence**, **contradicted by the evidence**, and **unverified with available evidence**. A broken link, missing document, or inaccessible source does not prove the claim false. State the evidence gap; recommend obtaining support, qualifying the claim, or removing an unsupported promise rather than inventing a replacement statistic.
- Distinguish a first-party claim, a supplied test artifact, an independent source, and a check you actually ran. Preserve provenance and date. Do not describe an offline excerpt as a freshly verified live source or a supplied CI result as your own successful test.
- If evidence supports only a narrower claim, retain its conditions and limitations. A percentage alone can conceal a different metric or population. Do not extrapolate a small sample into a customer-wide promise.
- Date-sensitive facts require current verification before publication. Change displayed review dates only after a substantive review or update; a new timestamp alone adds no evidence.

For a substantial review, a compact claim table is useful:

| Page claim | Evidence and date | What it supports / does not establish | Assessment | Next action |
|---|---|---|---|---|

Keep technical failures, source mismatches, and editorial opportunities distinct. For example, an inspected 404 is a verified broken reference; the truth of the unavailable study's claim can still be unverified. Use the assessment categories in SKILL.md section 3 and explain confidence separately. Keep these distinctions in summaries and prioritized findings too: recommend verifying, qualifying, or removing an unverified consequential claim without grouping its truth under "verified issues."

## Evaluate trust in context

Look for relevant evidence of actual experience, expertise, responsibility, and accuracy. Examples include reproducible code, a described test method, original observations, real product demonstrations, accountable editorial ownership, or an appropriately qualified reviewer. Describe the evidence rather than awarding an E-E-A-T score.

- An author bio or credential does not by itself prove accuracy. A missing individual bio does not by itself show poor expertise: team-maintained product documentation may establish responsibility and useful evidence through ownership, tested examples, versioning, and a correction channel.
- Verify that credentials match the subject and the role being claimed. Do not invent qualifications, reviewers, customer identities, external reputation, case studies, or schema facts. Label unresearched reputation as not assessed.
- Apply greater scrutiny where inaccurate content could harm health, finances, or safety. Flag unsupported consequential claims and identify the qualified review or evidence needed. Do not manufacture expert approval, provide assurances based on a disclaimer alone, or expand an informational product into advice it does not offer.
- Separate original contribution from cosmetic trust signals. Explain which real demonstration, example, method, or limitation would help this reader, using evidence the team can actually provide.

Google describes E-E-A-T as a way to think about quality, not a specific ranking factor. Verify current guidance through [official resources](official-resources.md); do not claim a byline, schema type, or review badge directly changes rankings.

## AI discovery and measurement boundaries

Identify the target search/answer provider before advising on its eligibility or crawler controls. Consult its current official documentation and record when checked. Search retrieval, user-triggered fetching, and model training can have different controls. A visibility request does not authorize changing all of them.

For Google AI search, use ordinary crawl/indexing and useful-content checks; consult the official source before asserting special requirements. Do not make `llms.txt`, special AI schema, mandatory chunking, or filler question pages release prerequisites. Do not generalize Google's policies to every provider.

Where available, record the actual query, provider, date, observed citation, landing page, and relevant referral or conversion outcome. A single observed answer is a dated sample, not a stable visibility score. Missing measurement access means not assessed, not zero visibility. Distinguish technical eligibility from selection and later visitor outcomes.

Keep all reported checks bounded: source HTML is not proof of rendered output; a lab performance score is not field Core Web Vitals; self-declared canonical markup is not Google's selected canonical; a valid schema is not proof of rich-result eligibility or appearance. State what was checked and what would resolve important gaps.

## Turn the review into feasible work

Prioritize verified harmful or misleading claims and relevant technical blockers, then evidence-backed improvements that fit the audience and capacity. Preserve intentional privacy and indexing choices. Report a recommendation's expected benefit as a hypothesis, with a concrete acceptance check and a later user/business metric where available.

Use the [audit report](../templates/seo-audit-report-template.md) for findings or the [content brief](../templates/content-brief-template.md) for planned content. Include only useful sections; do not fill every field for a small request. Never equate all checks passing with complete SEO, guaranteed rankings, or guaranteed AI citations.
