Prioritize correcting the evidence claims and removing the accidental public-page indexing block. Keep the work on `/support-routing`; new pages and speculative AI tactics would dilute the two-day budget.

This is an offline review of supplied snapshots captured **2026-10-25**, not a live crawl. The approved product brief (2026-10-21) establishes QueuePilot as a shared support inbox with rule-based routing and audit history for UK B2B software support teams with 5–20 agents. The objective is qualified demo requests. AI-generated replies, autonomous resolution and a free plan are unavailable.

| Page claim | Supplied evidence | Assessment and action |
|---|---|---|
| Route conversations using rules and retain handoff history | Approved product brief | Supported within the supplied evidence. Preserve this direct explanation. |
| “Cuts customer resolution time by 70% for every team” | September pilot: two teams, two weeks; median **manual assignment** time went from 10 to 3 minutes; resolution time unmeasured; uncontrolled comparison | **Verified source mismatch.** The cited study supports a narrower observation, not this metric, universal promise or causal claim. Replace it. |
| “Trusted by 500 support teams” | `/customers` timed out; no text captured | **Not assessed/unverified.** A timeout does not prove the count false or the page permanently broken. Obtain dated, auditable support and define “support team”; otherwise omit the count. |

Suggested replacement: “In a two-week internal pilot with two support teams, median manual assignment time fell from 10 to 3 minutes after routing rules were enabled. This uncontrolled before/after comparison did not measure customer resolution time or establish causation.” Keep those limitations beside the result and its pilot link, so an excerpt remains accurate.

**Developer day — up to eight hours.**

- **P1, verified issue; high confidence; medium effort:** The supplied page returns 200 but declares `noindex,follow`. Public acquisition intent and the release note confirm it inherited a preview restriction. This obstructs the intended search eligibility; it does not establish actual Google indexing status. Allocate four hours to inspect the owning layout/header logic and prepare the smallest public-route fix. Do not remove restrictions globally.
- Allocate two hours to regression checks: the public page should return 200, retain its canonical, expose its content and crawlable home link, and emit no conflicting `noindex` in HTML or response headers. Preview restrictions must remain intentional, and `/app/tickets` must remain authenticated (supplied 401) and excluded. Risk: shared-layout changes could expose unintended routes; keep the patch narrow and retain a revertable diff.
- **P2 recommendation; medium confidence; small-to-medium effort:** Use the remaining two hours to inspect existing funnel measurement and, if feasible within its conventions, prepare page-level demo-start and completed/qualified-demo attribution. Dependencies are analytics access, qualification rules and implementation details. Acceptance is correctly attributed, deduplicated test events without ticket/customer data. If those dependencies are unavailable, document the measurement gap rather than build a new system.

**Editor day — up to eight hours.**

- **P1, verified source mismatch; high confidence; small effort:** Spend two hours correcting the pilot sentence and checking every related summary. Acceptance: metric, population, duration and limitations match the report.
- **P2 recommendation; high confidence in the evidence gap; small effort:** Spend one hour obtaining support for the customer count or omitting it.
- **P3 recommendation; medium confidence; medium effort:** Spend four hours making the page more useful to the actual buyer: add one real routing-rule/handoff example and explain how its audit history helps inspect that handoff, using approved product behavior. Keep “Book a demo” as the next step. Spend one hour checking claims and links. Original, qualified examples may help readers and answer systems understand the offer; citation lift is a hypothesis.

No issue is observed in the supplied status, descriptive title/H1, declared canonical or home linkage. Preserve private-route authentication/exclusion. Robots.txt, sitemap, rendered output, Google-selected canonical and broader site behavior are **not assessed**.

After an authorized release, separate acceptance from outcomes: inspect deployed directives first; later monitor page-level search discovery and qualified demo count/rate over comparable periods. The supplied **220 homepage organic sessions and 9 qualified demos (2026-09-21–2026-10-18)** are homepage context, not this page’s baseline or evidence of causal lift. Search Console, query volumes and AI citations are unavailable. For future AI measurement, select a provider and record query, date, cited URL and relevant referral outcome; no ranking or citation is guaranteed.

Open items: evidence behind “500,” target answer provider, page-level baseline, qualification definition and layout/analytics ownership.

All recommendations are **not implemented**. No site files changed or publishing occurred. Commands were read-only local evidence/skill reads; no build, tests or live checks ran. Provider policies remain externally unverified. No rollback is needed for this review; a future technical release should preserve its previous configuration for targeted reversal.
