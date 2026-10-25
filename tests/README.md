# Behavioral checks

These synthetic cases test how the skill reasons about product context, content evidence, and reporting while respecting a requested scope. They do not measure live search performance or prove ranking improvements. Test fixtures and results stay in GitHub; they are excluded from the npm package. Agent evaluations are reviewed separately; `npm test` runs only the executable installer checks.

## Installer checks

Run `npm ci --ignore-scripts` followed by `npm test` with Node.js 22.20 or newer. The tests pack the release, install that tarball with cached dependencies into a fresh directory containing spaces, and run its real npm executable from a project folder also containing an ampersand. They check help/version, invalid options, installer failure propagation, complete copied assets for Codex/Claude Code/Cursor, temporary-file cleanup, and a reinstall that preserves unrelated files. Test installs disable upstream telemetry and use project scope only.

The installer reuses the pinned `skills` dependency; `npm test` uses `--offline` after dependencies have been downloaded. Global installation and other operating systems require separate validation. Also exercise the default interactive command in a disposable project before releasing installer changes.

## Run the cases

1. Run the Skill Creator `quick_validate.py` against the skill folder (requires Python and PyYAML). This checks structure, not SEO behavior.
2. Run `npm pack --ignore-scripts` and extract the archive into an isolated skill directory. Check the package file allowlist: README, skill, package metadata, CLI, the official-resources and content-and-trust-review references, and the two templates.
3. Copy `fixtures/` into a separate working directory. Give an independent agent only the extracted skill, its supporting resources, and each case's `request.txt` and evidence. Do not give it this evaluation guide, expected outcomes, prior responses, or the implementation discussion.
4. Ask for an actual response to each request. Only `focused-edit` authorizes editing its copied HTML. Keep external access disabled and record essential questions instead of waiting for answers.
5. Save the responses and evaluate the decisions against the evidence below. For the focused edit, verify that the only changed bytes are inside the title element and that every other fixture file is unchanged.
6. Install the local tarball in a disposable directory with `npm install --ignore-scripts --no-audit --no-fund --offline <tarball>` after caching its dependencies. Verify that the package's installed files match the archive. For installer changes, run the installer checks above. No website application build is required for this repository.

For a comparison, run the previous skill in a separate directory and agent context with the same requests. A successful baseline must be reported as such; a small synthetic sample cannot establish a general improvement rate.

## Decision criteria

| Case | Evidence-based behavior to check |
|---|---|
| `saas` | Understand the UK accounting-practice audience and qualified-demo goal. Prioritize the verified accidental `noindex` on the relevant acquisition page within the one-day budget. Do not chase the template page's larger traffic count, invent a free trial/features/demand, or weaken private-app protections. Distinguish technical acceptance from later demo outcomes. |
| `local-service` | Respect the two actual service areas, mobile bicycle offer, and booking goal. Address the service page's wrong canonical and relevant homepage copy. Reject unsupported locations, services and ratings. Preserve the private address, authenticated booking details and intentionally excluded booking flow. Missing analytics or unresolved language expansion must not block supported fixes. |
| `unknown-product` | Identify the missing offer/customer/outcome and ask only material questions. Do not invent an industry, feature, CTA promise or keyword demand. Continue supported technical observations, distinguish missing evidence from defects, and preserve login/app protections. |
| `focused-edit` | Use supplied product facts to improve only the title. Avoid unsupported claims, unnecessary intake, broad audits or edits to other content/files. Verify the exact change. |
| `claims-and-evidence` | Prioritize the accidental public-page noindex and misleading product claim within capacity. Notice that assignment time in two teams does not support resolution time for every team or prove causation. Treat the unavailable customer-count source as unverified, not disproven. Preserve private tickets and separate acceptance checks from later qualified-demo outcomes. |
| `docs-and-coverage` | Recognize useful team-owned documentation and supplied test evidence without claiming to have rerun it. Do not manufacture defects from missing individual bios, FAQs, schema, a short page, or a decorative empty alt. Keep missing field CWV, selected canonical, and AI measurements unassessed; the lab score and declared canonical do not establish them. Preserve the private dashboard and fit any recommendation into half a day. |
| `trust-and-ai-policy` | Correct the physician claim contradicted by the supplied profile; do not infer clinical qualification from a design PhD. Flag the unsupported consequential metric and broken citation without claiming the unavailable study disproves it. Reject false credential schema and cosmetic date updates. Preserve the owner's training preference, defer provider-specific changes pending current documentation, and avoid presenting llms.txt as a Google requirement. Keep the product's appointment-preparation purpose. |

Across content cases, distinguish demonstrated issues from editorial recommendations and unknowns, with source provenance and confidence. Record intentional choices and bounded successful checks where relevant. Do not require a particular report layout or all assessment labels in every answer. Unsupported claims must not silently become verified falsehoods. Missing external access must neither become a failed metric nor block supported work.

Judge decisions and actions, not whether the answer repeats particular headings or phrases. Record failures and limitations as well as passes. If a correction is needed, rerun the affected scenario in a fresh context before releasing.

## Recorded runs

- [Version 0.4.0 content, reporting, and installer evaluation](results/0.4.0/report.md)
- [Version 0.3.0 installer evaluation](results/0.3.0/report.md)
- [Version 0.2.0 evaluation](results/0.2.0/report.md)
