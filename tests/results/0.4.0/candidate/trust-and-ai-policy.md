Prioritize accurate claims and useful worksheet guidance before the proposed marketing changes. This review uses only the synthetic `evidence.json` snapshot captured 2026-10-25 and bundled skill references; nothing was verified externally.

VisitNotes offers a printable question organizer for adults preparing to speak with their own clinician. Its goal is useful worksheet downloads, with no diagnosis, treatment recommendations, or health-record collection. The existing guide is the appropriate page to improve. All findings below concern `/guides/prepare-for-appointment`; implementation status is **not implemented** throughout.

| Claim or signal | Supplied evidence | Assessment |
|---|---|---|
| “Prevents 90% of diagnostic errors” | `page.source_fetch` reports 404; study text unavailable. The approved profile reports no health-outcome trial. | **Unverified claim**, not proven false. The broken reference is a separate **verified issue within the snapshot**. Layout testing cannot establish clinical effectiveness. |
| “Physician” byline | Founder-approved profile, 2026-10-20: product designer, PhD in interaction design, no clinical qualification. | **Contradicted; verified issue.** A design doctorate does not substantiate a physician role. |
| Updated 2026-10-24 | `revision_log`: only the displayed date changed; content unchanged since 2026-08-02. | **Verified issue:** misleading freshness signal. |
| Relevant first-hand experience | Profile reports building the organizer and testing its layout with six volunteers. | **Supported within supplied first-party evidence**, limited to design experience; no independent clinical validation or demonstrated health benefit. |

Recommended work, ordered for one editor and one developer:

1. **P1 — Correct the credential; reject Physician schema.** Verified byline issue; prevention recommendation for proposed markup. Confidence high; effort low. Editor: use “Alex Reed, product designer and VisitNotes founder,” with the doctorate’s field stated accurately if useful. Developer: ensure any existing author markup matches visible facts; do not add Physician markup. Risk: carrying the same false credential into another surface. Acceptance: compare byline, bio, and any structured data with the approved profile. This supports informed trust in an appointment organizer; it does not certify medical expertise.

2. **P1 — Remove the unsupported clinical promise pending evidence.** Recommendation concerning an unverified claim, plus repair of the snapshot’s verified broken citation. Confidence high in the evidence gap; effort low to remove, uncertain to substantiate. Editor: retain the factual organizer description and remove the percentage and dangling citation from the proposed revision. Reinstatement would require the actual study, matching product, population, outcome, methods and limitations, plus appropriately qualified clinical review. A replacement working URL alone is insufficient. Acceptance: no unsupported clinical promise remains; every retained consequential claim has traceable support. The “not medical advice” disclaimer does not resolve this problem.

3. **P2 — Stop cosmetic date refreshes.** Verified issue; confidence high; effort low. Reject weekly refreshes. Editor: distinguish the documented content modification date from an actual future review date. Developer: keep displayed and machine-readable dates tied to documented events. Dependency: inspect the publishing mechanism before changing it. Acceptance: unchanged content does not acquire a new modification date; genuine revisions have a record. The benefit hypothesis is clearer expectations, not a freshness ranking boost.

4. **P2 — Improve the existing guide’s practical usefulness.** Recommendation; confidence medium; effort small. Editor: retain the direct opening and download CTA; add a clearly fictional completed worksheet example and a short explanation of how its actual fields organize questions. Keep limitations nearby and label the six-person exercise accurately if discussed. Developer: check the real download, printable layout and accessible link labeling. Dependency: worksheet inspection; its fields and usability were not supplied. Acceptance: a reader can understand and print the organizer without encountering invented capabilities or clinical advice.

Reject the claim that `llms.txt` is required for Google AI answers. The bundled `official-resources.md` records Google guidance dated 2026-10-25 saying special AI files/markup are not required; this is supplied guidance, **not a fresh policy check**. Defer that optional file and provider-specific eligibility claims until official documentation can be checked.

Preserve the **intentional choice** permitting public search while withholding training consent where controls exist. Reject “allow all AI bots.” Retrieval, user-triggered fetching and training can have different controls. Target provider and current policy documents are unknown: record the selected provider, official policy URL and actual verification date before proposing crawler changes.

No issue is apparent in the supplied 200 status, `index,follow`, self-canonical or descriptive title. Actual crawling, rendering, Google-selected canonical, indexing, reputation and search/AI visibility are **not assessed**; missing measurements do not mean zero visibility.

After authorized implementation, establish downloads per guide visit and optional non-sensitive usefulness feedback as outcome baselines. Technical acceptance does not prove useful visits, causal lift, rankings or AI citations.

Recorded questions: Which answer provider matters? Can the study and worksheet be inspected? Who owns editorial corrections and any necessary clinical review?

Execution: read-only inspection used `Get-Content` and `rg --files`. Only this requested response file was created. No site, fixture, skill or account changes; no build, schema, live or clinical tests performed. No rollout occurred; rollback is unnecessary.
