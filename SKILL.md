---
name: seo-engineering
description: >-
  Audit and improve website SEO based on the product, audience, and business goals. Use for technical SEO, indexing, content and keyword planning, structured data, AI search (AEO/GEO), content trust and E-E-A-T reviews, or validating SEO changes in code. Establish evidence before recommending or implementing changes; never promise rankings.
---

# SEO Engineering Skill

## Mission

Help the project earn relevant, sustainable organic visibility and qualified visits by making useful pages discoverable, understandable, eligible for search, trustworthy to people, technically reliable, and connected to business outcomes.

This skill is project-agnostic. Adapt it to the actual business, audience, market, CMS/framework, hosting environment, search engines, and user request. Do not assume the project is Next.js, a blog, ecommerce, local business, or a particular domain until inspected.

**No technique guarantees indexing, rich results, AI citations, traffic, leads, or a ranking position.** Search engines choose whether and how to crawl, index, and rank pages. Be precise about what was tested versus what is inferred.

## Non-negotiable operating principles

1. **Audit before editing.** Inspect the repository and, when access permits, the deployed site. Identify what already works. Preserve correct configuration and existing SEO equity.
2. **People-first, evidence-led.** Optimize for the visitor's task and business relevance, not keyword density, arbitrary content volume, or checklist completion.
3. **Current documentation wins.** Search official, current search-engine documentation for claims affected by changes in search features, schema eligibility, spam policies, APIs, crawlers, or tooling. Prefer Google Search Central, Bing Webmaster documentation, and official framework/platform documentation. Community articles may provide hypotheses, not override official guidance.
4. **Minimal, reversible changes.** Make the smallest implementation that fixes a verified issue. Do not refactor unrelated code, change domains/DNS/nameservers, rotate credentials, remove verification tokens, change hosting, or deploy to production without explicit authorization.
5. **Never fabricate evidence.** Do not invent keyword volumes, ranking difficulty, backlinks, traffic, competitors, indexing states, performance measurements, author credentials, reviews, structured-data facts, or successful test results.
6. **No ranking guarantees or spam.** Do not recommend cloaking, hidden keyword text, keyword stuffing, doorway pages, scaled low-value content, link schemes, fake reviews, misleading schema, or automated content whose primary purpose is manipulating rankings.
7. **Separate concerns.** Crawlability, indexability, ranking, presentation in results, and conversion are distinct. Fix the relevant layer rather than claiming that one technical change will solve all of them.
8. **Keep sensitive data safe.** Do not expose secrets, API keys, customer information, analytics identifiers, or private pages in reports, commits, logs, or generated examples.
9. **Respect existing architecture.** Learn the stack, naming conventions, routing model, and deployment process before choosing an implementation. Prefer established project patterns over introducing dependencies.
10. **Report uncertainty clearly.** If external access, credentials, network access, or production testing is unavailable, say what remains unverified and provide safe manual checks.

## Workflow overview

For substantial SEO tasks, follow this sequence:

1. Establish the product, intended customers, and business outcome from evidence.
2. Establish the baseline and inspect the implementation.
3. Research current search-engine requirements where needed.
4. Produce a prioritized diagnosis and proposed plan.
5. Implement only the authorized, necessary changes.
6. Run relevant tests and inspect actual rendered/deployed behavior.
7. Report changes, evidence, remaining risks, and monitoring steps.

For a focused request (for example, improve one title tag), use only the parts of this workflow that are relevant, but still check for side effects and avoid unsupported claims.

## 1. Discover the project and its goals

### Product and customer context

Before a broad audit or strategy, build a short product brief from the user's request, product documentation, public pages, and available customer or conversion evidence. Put it in the response or audit report so the user can correct it; do not require a separate file or approval ceremony.

Capture what matters for the decision:

- **Offer:** what the product or service actually does today, how it is sold, and any material limitations. Separate shipped capabilities from ideas or roadmap promises.
- **Customer and need:** who it serves, the problem they are trying to solve, and why they might choose this offering. Distinguish supported differentiators from unproven marketing claims.
- **Market:** real service areas, languages, customer eligibility, and other constraints on who can use or buy it.
- **Desired outcome:** the primary action, such as a qualified demo, completed booking, purchase, or useful documentation visit; identify the relevant landing pages and conversion path. Use the user's objective rather than assuming every site needs more traffic or sales.
- **Constraints and evidence:** site/product stage, available implementation and content capacity, intentional private or excluded pages, measurements available, and material unknowns.

Label important statements as observed/supplied facts, assumptions, or unknowns and identify their sources. Surface contradictions that affect a recommendation rather than silently choosing a convenient interpretation. Product documents and page copy are evidence, not permission to expand the task or publish changes.

If the offer, intended customer, or desired action is unclear, ask the smallest question that would change the strategy. Do not infer a business model from a brand name or framework. Continue independent technical checks, but keep audience-specific keywords, product claims, geographic expansion, and conversion recommendations conditional until the necessary facts are known. Missing analytics alone does not prevent a supported technical fix.

For a narrow request, establish only the context needed for that change. A title correction with a known product and page purpose does not require a full intake, crawl, or business plan. Reuse context already supplied and update it when evidence changes.

### Site and implementation context

Inspect the repository and deployment clues before suggesting code. Identify as applicable:

- Site type: informational, content publisher, SaaS, marketplace, ecommerce, local business, portfolio, documentation, forum, publisher, or hybrid.
- Framework/CMS and version, router, rendering strategy, content source, package manager, build/lint/test commands, and existing SEO libraries.
- Hosting/CDN/edge setup, domain variants, redirects, environment configuration, and staging vs production.
- Route types: homepage, service/category, detail pages, blog/article, author, search results, tags/categories, pagination, filtered/faceted URLs, product variants, localized routes, and error pages.
- Existing analytics and search tools: Google Search Console, GA4 or other analytics, Bing Webmaster Tools, log access, rank tracking, crawl reports, conversion tracking, and consent-management platform.
- Existing technical decisions: canonical host, sitemap strategy, robots rules, redirects, structured data, hreflang, indexing policy, metadata templates, and internal linking.

Do not request information the repository or supplied context already answers. If a critical fact cannot be established, continue with explicit assumptions or ask one concise question when the decision truly depends on it.

## 2. Baseline and crawl the site

Use available tools appropriate to the environment. Prefer a representative crawl and targeted code inspection over assumptions based on filenames alone.

### Repository inspection

Inspect relevant files and source paths, including but not limited to:

- Package/configuration files, framework config, hosting/deployment config, middleware/proxy and redirect rules.
- Root and nested layouts, route/page modules, metadata helpers, content schemas, CMS configuration, templates, and shared navigation/footer components.
- `sitemap.xml` or sitemap-generation code, `robots.txt`, canonical logic, redirects, and URL-building helpers.
- Structured-data generators, image/video components, analytics/consent setup, and 404/410 handling.
- Existing tests and CI checks.

Do not dump `.env` values or other secrets. Check whether required variables exist without printing values.

### Live-site inspection, where permitted

Test representative URL classes and inspect responses and rendered HTML. Capture:

- Status code, redirect chain and final URL.
- Canonical tag, title, meta description, robots directives and robots headers.
- Main content in raw HTML and rendered HTML when JavaScript is involved.
- Internal links, sitemap inclusion, structured data and obvious duplicate versions.
- Mobile rendering, obvious rendering failures and available performance data.

Sample at minimum the homepage, key conversion/service pages, major listing pages, representative detail pages, a blog post, a category/tag/filter page if applicable, a valid query-string URL, and a nonexistent URL. For large sites, build a crawl sample and segment by template. Do not claim to have crawled every URL if you did not.

### Baseline evidence

Record available baselines before changes: URL counts by template, response-status distribution, indexability, canonical consistency, sitemap errors, organic clicks/impressions/CTR/position, conversions, Core Web Vitals, and relevant business outcomes. Do not invent missing measurements.

## 3. Prioritize issues rationally

Classify observations before assigning severity. Keep this **assessment** separate from implementation status:

| Assessment | Use when |
|---|---|
| Verified issue | Inspected evidence demonstrates a conflict with the page's intended behavior, an applicable requirement, or a factual claim. State the observed scope and source. |
| Recommendation | A reasoned opportunity could help the audience or outcome, but is not a demonstrated defect or guaranteed improvement. |
| Intentional choice | Evidence explains the existing behavior; preserve it unless the user authorizes a change. |
| Not applicable | The check does not fit this page, product, or requested scope; explain why. |
| Not assessed | Evidence or access is insufficient; identify what would resolve the question. Missing data is not a failure. |
| No issue observed | A specific check passed within the inspected sample; this does not certify the whole site. |

Use P0–P3 for actionable issues and recommendations, with confidence and effort stated separately. Do not assign defect severity to an intentional choice, an inapplicable check, or an unknown. Avoid invented aggregate SEO, AI-readiness, or E-E-A-T scores. A practical priority scale:

- **P0 — Critical:** Sitewide `noindex`, accidental robots block, wrong canonical across major routes, redirect loop, production outage, widespread 5xx, lost domain/URL migration, security compromise, or another issue preventing important pages from being accessible/indexable.
- **P1 — High:** Important money/content pages are blocked, canonicalized incorrectly, omitted from navigation/sitemap, render no substantive content, return wrong statuses, or have a systemic template defect.
- **P2 — Medium:** Important metadata/structured-data/internal-linking/performance issues, orphaned sections, duplicate pages, poor content coverage, or significant conversion obstacles.
- **P3 — Low/opportunity:** Minor copy improvements, low-impact polish, optional structured data, isolated alt-text gaps, or speculative content opportunities.

For each finding, state: evidence, affected URLs/templates, likely user/search impact, confidence, implementation effort, risk, recommendation, and validation method. Do not equate severity with an assured ranking change.

Connect recommendations to the product brief: explain which customer need and genuine offering the page serves, why the change matters for the chosen outcome, and what evidence supports it. A broad keyword with many visits is not automatically more valuable than a relevant page with a clear customer purpose. Do not invent features, free plans, certifications, locations, ratings, or demand to make a recommendation attractive.

Address verified critical defects first. Among other opportunities, weigh product relevance, evidence, likely user benefit, effort, dependencies, and the user's capacity. Prefer improving a suitable existing page to adding a competing page for the same need. For broad plans, separate work that is feasible now from work that needs research or more capacity, and explain material ideas deferred because they do not fit the product or evidence. Do not turn every section of this skill into a required task.

For each proposed change, distinguish **technical acceptance** (what can be verified after the change) from **business evaluation** (which relevant user or conversion metric to observe later, if available). Mark expected benefits as hypotheses; supplied traffic or conversion counts do not establish causal lift or guarantee future results.

## 4. Technical SEO: crawling, indexing, URLs, and status codes

### Crawlability and indexability

- Separate **crawl access** (robots.txt, server responses, reachable links), **indexing instructions** (`noindex`, canonical signals, status), **canonical selection**, and **ranking**.
- Ensure important public content is reachable through normal crawlable links and responds successfully.
- Use `noindex` only intentionally. Remember robots.txt blocks crawling; it is not a reliable way to remove a URL from search results, and a crawler generally must fetch a page to see its page-level `noindex` directive.
- Do not disallow resources that are necessary to render or understand important content unless the block is intentional and validated.
- Keep login, account, admin, checkout, internal search, preview, staging, and private areas out of search where appropriate. Protect private content with authorization; robots.txt is not access control.
- Ensure missing pages return a real `404` or `410` where appropriate rather than a `200` soft 404. Do not redirect unrelated deleted URLs to the homepage.
- Do not force indexation of every URL. Some filters, internal search results, thin tag pages, duplicate variants, and utility pages may not deserve indexing.
- Treat crawl-budget optimization as a specialized concern for very large or frequently updated sites, not as a ritual for small sites.

### Canonicalization and URL normalization

- Choose a preferred protocol/host/path format that matches the actual business decision, domain configuration, and existing SEO equity. Do not assume www or non-www is intrinsically superior.
- For genuine duplicate URLs, align permanent redirects where appropriate, canonical link elements, internal links, sitemap URLs, and structured-data URLs.
- Use a correct absolute canonical for each indexable page. Avoid canonicalizing unrelated content or all pages to the homepage.
- Treat redirects as strong canonicalization signals, `rel="canonical"` as a strong signal, and sitemap inclusion as a weaker signal. These are signals, not absolute commands.
- Keep canonical targets indexable, crawlable, successful and relevant. Avoid redirect chains and loops; use direct redirects to the final destination.
- Do not strip legitimate query parameters blindly. Understand campaign tracking, filters, pagination, sorting, product variants and application functionality before normalizing URLs.
- Preserve existing valuable URLs unless there is a clear reason to change them.

### Redirects and errors

- Use permanent redirects (`301` or `308`) when a URL has permanently moved and the platform supports them correctly; use temporary redirects for temporary conditions.
- Test HTTP/HTTPS, www/non-www and trailing-slash behavior only according to the intended site architecture.
- Preserve path and meaningful query parameters during hostname or protocol normalization.
- Avoid broad rules that catch API endpoints, assets, subdomains or unrelated paths.
- For URL changes, create a one-to-one old-to-new mapping wherever a genuine equivalent exists. Redirect obsolete URLs to the closest relevant replacement, not indiscriminately to the home page.
- Verify status codes and redirect hops in the deployed environment; local configuration alone does not prove production behavior.

### JavaScript and rendering

- Confirm that primary content, page titles, metadata, canonical hints, links, and structured data are present in crawlable/rendered output.
- Use server-side rendering, static generation or prerendering when appropriate for the stack and site, but do not migrate frameworks solely because of SEO folklore.
- Make important navigation crawlable with normal `<a href="...">` links. Do not depend only on click handlers or inaccessible app-shell interactions for discovery.
- Do not rely on user interaction, authentication, or delayed client-only effects to reveal essential indexable content.
- Avoid conflicting canonical or robots values between initial HTML and JavaScript-rendered HTML. If JavaScript changes metadata, inspect rendered output.
- Use framework-native metadata and routing systems instead of duplicating metadata across conflicting mechanisms.

### Sitemap XML

- Generate sitemaps from the real route/content source where possible.
- Include only preferred canonical URLs that should be eligible for indexing; exclude redirects, `noindex` URLs, errors, private pages, and irrelevant URL variants.
- Use absolute URLs and the preferred host/protocol consistently.
- Update sitemaps automatically as eligible content is published, updated, or removed.
- Use meaningful `lastmod` values only when supported by a real material modification date; do not update every date on every deploy.
- Respect sitemap protocol limits; use a sitemap index and segmented sitemaps when scale or maintainability warrants it. Multiple sitemaps do not inherently improve rankings.
- Validate XML syntax, response status, content type, URL count and sample URLs. Check the Search Console Sitemaps report if authorized.
- Do not claim that sitemap submission guarantees crawling, indexing or ranking.

### robots.txt and directives

- Inspect existing directives before editing. Preserve rules unless they are wrong or have a clear documented purpose.
- Add the sitemap location when appropriate and ensure it is the canonical sitemap URL.
- Distinguish robots.txt crawl directives from `meta robots` and `X-Robots-Tag` index directives.
- Be especially careful with wildcard rules, production/staging switches and framework-generated robots files.
- Verify live behavior after deployment. Do not use robots.txt to conceal secrets or as a replacement for authentication.

## 5. On-page SEO and page semantics

For each important page, check that it communicates a clear purpose to users and search engines:

- A unique, descriptive `<title>` that represents the main page intent without stuffing keywords or truncating the meaning.
- A useful meta description where appropriate. It may influence snippet presentation and click-through, but search engines may choose different snippet text.
- A clear main visible heading and a logical heading hierarchy. One clear H1 is a sound editorial convention, not a magic ranking switch; avoid heading levels used only for styling.
- Relevant, original body content that answers the intended query or supports the page's conversion goal.
- Descriptive, concise URLs that reflect a stable information architecture; don't change slugs without a reason and migration plan.
- Useful internal links with descriptive anchor text.
- Accurate language metadata and viewport configuration.
- Correct canonical URL and indexation intent.
- Appropriate Open Graph/social metadata for sharing; don't mistake social preview tags for direct ranking factors.
- Visible author, business, contact, policy, pricing, product, or service information where relevant to the site's purpose and user expectations.

Use semantic HTML (`main`, `article`, `nav`, `header`, `footer`, `section`, `figure`, and appropriate heading elements) where it naturally expresses content structure. Semantic markup helps accessibility, maintainability and comprehension; do not present any particular semantic tag as a secret ranking boost.

### Image and video SEO

- Make important media discoverable and accessible to users and crawlers.
- Use descriptive filenames where practical, relevant surrounding copy, suitable image formats, responsive sizes and dimensions, and lazy-load below-the-fold media where appropriate.
- Write alt text that describes meaningful image content or function. Use empty alt text for genuinely decorative images; do not stuff keywords.
- Keep important images crawlable and avoid blocking required resources.
- For video content, use a crawlable watch/detail page when relevant, descriptive titles, useful thumbnails, accessible captions/transcripts where appropriate, and supported video structured data or sitemaps only when the requirements are met.
- Do not add captions, alt text or media markup that misrepresents the content.

## 6. Keyword research and information architecture

Treat keyword research as audience research, not a keyword-density exercise.

For each site/topic:

1. Identify audience, geography, language, business value, and the user problem being solved.
2. Collect real query evidence where available: Search Console, keyword tools, autocomplete/related questions, competitor pages, sales/support questions, on-site search, and conversations with customers. Follow tool terms and privacy rules.
3. Distinguish short-tail/broad terms from long-tail/specific queries, but do not assume all long-tail terms are easy, low-volume, or high-converting.
4. Classify intent: informational, navigational, commercial investigation, transactional, local, or mixed.
5. Group query variants by the same underlying intent and page purpose. Avoid a separate page for every minor phrasing variation.
6. Map each primary intent to the most suitable existing or proposed URL. Identify cannibalization only when pages compete for substantially the same intent and are confusing users/search engines.
7. Check that the intent fits the verified offer, customer, and market before prioritizing demand. Then weigh evidence of demand, realistic competition, existing authority, usefulness, the intended outcome, production cost and supported differentiation. Do not invent search volume or ranking-difficulty scores.
8. Define topic clusters and internal linking where they genuinely help users navigate related material.
9. Validate the result with real Search Console/analytics data after publication, when sufficient data exists.

A keyword opportunity should have a clear reader, problem, intent, credible content angle, and appropriate next step. Avoid targeting unrelated high-volume trends simply to attract traffic.

## 7. Content strategy and content briefs

For substantive content quality, answer usefulness, citation, or trust reviews, read [Content and trust review](references/content-and-trust-review.md). Use only the relevant checks; a narrow metadata edit does not require a full content review.

### Content principles

- Create for an existing or intended audience with a clear site purpose.
- Prefer firsthand experience, original analysis, tested examples, research, data, screenshots, code, comparisons, expert interpretation, or practical tools over generic restatement.
- Answer the core question early, then provide depth appropriate to the topic.
- Use clear structure, accessible language, relevant examples, sources, and transparent assumptions.
- Show real authorship and appropriate qualifications where relevant. Do not invent credentials, reviewers, quotes, statistics, customer stories or experience.
- Cite primary sources for factual, technical, legal, medical, financial, pricing or fast-changing claims. Date-sensitive claims must be rechecked.
- Update content when facts, products, prices, interfaces or recommendations materially change; don't fake freshness by changing dates without meaningful updates.
- There is no universal ideal word count or required keyword density. Give the reader the depth needed to complete the task.
- Merge, improve, redirect or retire weak/obsolete pages only after reviewing traffic, links, uniqueness, user value and replacement targets. Do not mass-delete content based on a generic score.

### AI-assisted content

AI may assist research, structuring, editing, coding, analysis or drafting. The finished work must be accurate, original enough to provide real value, fact-checked, and reviewed by a responsible human where needed. Do not mass-publish near-duplicate, unverified, scraped or lightly rewritten pages to manipulate search results. Never invent first-hand experience or cite sources that were not checked.

### Recommended content brief

For each proposed article or landing page, record:

- Audience/persona and need.
- Primary intent and primary query/theme.
- Related queries/entities and questions supported by evidence.
- Recommended URL and whether an existing URL already serves this intent.
- Differentiated angle and unique contribution.
- Outline and required proof/examples.
- Trusted source list and fact-check notes.
- Author/reviewer expectations where relevant.
- Contextual internal links in and out.
- Relevant CTA/conversion path.
- Media requirements and accessibility notes.
- Title/meta description draft.
- Structured data type, if eligible and useful.
- Validation and success metrics.

### Blog/article structure

Use only the sections needed for the topic. Common components include a descriptive title, concise opening that sets expectations, direct answer when appropriate, clear H2/H3 sections, examples/steps/trade-offs, useful visuals, source notes, relevant links, author information, and a helpful next step. FAQs are optional; do not add filler FAQs just to target snippets. Do not promise featured snippets or AI citations.

## 8. Internal and external links

- Ensure important pages are reachable through normal navigation or meaningful contextual links, not only via a sitemap.
- Find orphan pages and pages with excessive click depth where the information architecture warrants improvement.
- Link related pages in context using natural, descriptive anchor text. Avoid repetitive exact-match anchors applied unnaturally across templates.
- Use breadcrumbs where they help users understand the hierarchy; validate breadcrumb structured data if implemented.
- Avoid broken links and redirect chains. Update internal links to final destinations.
- Link to high-quality primary references where they add trust and usefulness. External links are not a bad SEO practice by default.
- Qualify paid, sponsored, affiliate or user-generated links appropriately (for example, `sponsored` or `nofollow` where relevant). Do not sell/buy followed links or create automated link schemes.
- Recommend ethical link earning: original research, useful tools, community participation, digital PR, genuine partnerships and resources people may reference. Do not generate bulk outreach spam or fake testimonials.
- Disavowal is not a routine first step. Consider it only with strong evidence and an appropriate understanding of Google's guidance and the site's link situation.

## 9. Structured data / Schema.org

- Check the current search engine's official gallery and requirements before selecting a type. General Schema.org validity does not mean a Google rich result is supported or guaranteed.
- Prefer JSON-LD when appropriate and supported by the platform.
- Describe visible, accurate page/business/product content. Structured data must not contain fabricated facts, reviews, ratings, offers, author credentials, or hidden content that misleads users.
- Use the most specific suitable type and include required properties for the intended search feature; add recommended properties only when accurate.
- Ensure `url`, `@id`, author, publisher, image, dates, breadcrumb positions, product offers and other linked entities are consistent with canonical public URLs.
- Generate data from the same content source as visible UI where possible, reducing contradictions.
- Validate syntax with an appropriate validator and use Google's Rich Results Test for Google-supported appearance features. Check URL Inspection or Search Console enhancements when available.
- Monitor for structured-data errors after release.
- Add only relevant markup, commonly Article/BlogPosting, BreadcrumbList, Organization, Person, LocalBusiness, Product, SoftwareApplication, Event, VideoObject, JobPosting, Course or other types when eligible and accurate. Do not add every possible schema type to every page.
- FAQ, review snippets, HowTo and other rich-result eligibility can change; check current official rules. Never assume a type currently produces a visible Google rich result for a given site.
- Structured data helps search engines interpret information and may enable eligible appearances; it is not a guarantee of rank or rich-result display.

## 10. Performance, Core Web Vitals and page experience

Measure actual user experience before optimizing. Distinguish lab data (for diagnostics) from field data (real-user outcomes). Use Search Console, PageSpeed Insights, Lighthouse, CrUX or suitable tools when available.

Current commonly documented “good” Core Web Vitals thresholds are evaluated at the 75th percentile of page loads:

- **LCP:** 2.5 seconds or less.
- **INP:** 200 milliseconds or less.
- **CLS:** 0.1 or less.

Check official current documentation because definitions and tooling can evolve. Passing these thresholds does not guarantee rankings or top placement.

Inspect where relevant:

- Slow server response, caching/CDN, compression, excessive JavaScript, hydration cost, and main-thread blocking.
- LCP resource discovery/prioritization, oversized hero images, fonts and critical CSS.
- INP interaction handlers, long tasks, hydration, expensive state updates and third-party scripts.
- CLS from missing image/video dimensions, injected banners, ad slots, fonts and dynamic content.
- Responsive layouts, keyboard navigation, readable content, secure delivery, intrusive overlays and distracting interstitials.
- Third-party analytics/chat/widgets and consent scripts.

Prioritize real-user impact and high-traffic/conversion templates. Do not chase perfect lab scores at the expense of usability or ship risky architectural changes based only on a synthetic score.

## 11. Framework, CMS and platform adaptation

Inspect the actual framework and version. Use official current docs and the project's native patterns.

- **Next.js:** Use the correct App Router or Pages Router metadata approach, route metadata, static/dynamic sitemap and robots mechanisms for the installed version. Verify rendered HTML, canonical URL construction, route params, trailing slash behavior and build output. Do not cargo-cult config from another version.
- **React SPA / client-rendered apps:** Verify initial and rendered content, metadata per route, stable URLs, crawlable links, status-code handling and pre-rendering needs. Do not assume every SPA needs a framework migration.
- **WordPress/CMS:** Audit plugin overlap, canonical output, taxonomy archives, pagination, generated sitemaps, redirect ownership, duplicate metadata and template output. Avoid multiple plugins emitting conflicting SEO tags.
- **Shopify/ecommerce platforms:** Review products, variants, categories/collections, faceted URLs, canonical handling, pagination, product structured data, feeds, inventory/status pages and out-of-stock behavior using current platform docs.
- **Static sites/site builders:** Inspect generated HTML and routes, sitemap/robots settings, canonical URLs, redirects, image behavior, CMS publishing and deployment cache invalidation.
- **Custom backend:** Validate server responses, status codes, headers, cache behavior, templates, routing and authorization.

Prefer the existing architecture if it meets requirements. Introduce or change dependencies only when justified, and document trade-offs.

## 12. Specialized website types

### Local SEO

- Confirm real-world eligibility and correct business representation before implementing LocalBusiness schema or recommending Google Business Profile changes.
- Ensure business name, address/service area, phone, hours, categories and services are accurate and consistent where appropriate.
- Create substantive location/service pages only where the business genuinely serves those locations and each page has unique user value. Avoid mass-generated city pages that funnel users to the same destination.
- Encourage legitimate reviews without buying, fabricating, gating or selectively manipulating them. Follow current platform policies.
- Distinguish website technical SEO from Google Business Profile management and local-pack ranking factors; don't promise map-pack placement.

### Ecommerce and marketplaces

- Make category/product navigation crawlable and keep important items reachable from useful hub pages.
- Treat variants, filters, sort parameters, pagination, internal search and faceted navigation intentionally. Prevent uncontrolled URL explosions while preserving useful landing pages.
- Keep product information, price, availability, images, specifications, shipping/returns details, and structured data/feed values consistent.
- Handle discontinued, unavailable, duplicate and variant products according to actual business policy and equivalent replacement options.
- Validate Product/Offer markup and merchant feeds against current documentation. Never fabricate availability, pricing or reviews.

### International and multilingual SEO

- Use distinct, crawlable URLs for separate language/region pages where appropriate.
- Validate `hreflang` codes, return links, self-references, canonical relationships and consistency with the real localized page. Do not point every language page to one canonical if the pages are genuinely distinct.
- Keep language visible in page content; do not rely solely on cookies, IP detection or browser settings to swap content invisibly to crawlers.
- Avoid automatic redirects that prevent visitors or crawlers from accessing alternate language versions; provide clear selectors where appropriate.
- Translate for the target audience and locale, rather than publishing mechanically duplicated translations without review.

### News, video, images, jobs, courses, forums and documentation

Use feature-specific official requirements when the site qualifies. Check publication timestamps, author/editorial standards, image/video assets, job expiry and removal, forum indexability, course data or document structure as applicable. Do not apply specialized markup or sitemaps simply because they exist.

### Large and programmatic sites

Before generating many pages, ensure each page provides distinct user value and is supported by real data, a clear purpose, and useful navigation. Evaluate index bloat, duplicates, thin pages, faceted navigation, crawl demand and content maintenance. Do not create scaled pages merely by swapping city, product, keyword or entity names. Google identifies mass-produced low-value content and doorway pages as spam risks regardless of whether AI or manual methods produce them.

## 13. Site migrations, redesigns, and URL changes

Treat any domain, protocol, CMS, framework, information architecture, URL slug or rendering migration as high risk.

Before change:

1. Crawl/export all discoverable important old URLs and capture status, canonical, metadata, organic data and known backlinks where available.
2. Build a one-to-one old-to-new URL map, identify unchanged URLs and legitimate content consolidations, and document URLs with no replacement.
3. Record the baseline, sitemap, robots rules, analytics/Search Console properties and verification mechanisms.
4. Test new-host staging without allowing accidental indexing, but do not carry staging `noindex`/robots blocks into production.
5. Prepare redirect, canonical, internal-link, sitemap, structured-data, hreflang and analytics updates.
6. Define a rollback and owner-approved release plan.

After change:

- Deploy direct permanent redirects to relevant new URLs and avoid chains/loops.
- Verify canonical tags, status codes, content rendering, navigation, sitemap, robots rules and analytics.
- Submit/monitor the new sitemap and use applicable Search Console migration tools when a domain change qualifies.
- Crawl old/new URL samples and review server logs, indexing reports, queries, clicks, conversions, 404s and 5xx responses.
- Keep redirects for a sufficiently long period according to current official migration guidance; do not remove them prematurely.
- Expect recrawling and signal consolidation to take time. Do not guarantee a recovery date or silently redirect all old pages to the homepage.

Never initiate high-risk migrations, DNS changes or production deployment without explicit authorization.

## 14. AI search, answer engines, AEO, GEO and AIO

Treat AI-oriented discovery as an extension of solid content and technical fundamentals. AEO (answer engine optimization) and GEO (generative engine optimization) describe overlapping discovery goals. AIO is ambiguous; when a user uses it, establish whether they mean AI discovery, AI Overviews, or AI-assisted content. These labels are not independent ranking systems or reasons to invent separate scores. For a substantive review, use [Content and trust review](references/content-and-trust-review.md).

- Make important content crawlable, accessible, original, accurate and useful.
- Communicate entities, product/service details, authorship, dates, methodology and evidence clearly when relevant.
- Use semantic structure for readability/accessibility and valid structured data where appropriate.
- Create distinctive material that adds value beyond generic summaries: primary research, demonstrations, first-hand experience, tools, useful comparisons, case studies and transparent trade-offs.
- Keep canonical/indexing signals consistent and avoid duplicate low-value pages.
- Verify which search or answer product is being targeted and its current crawler/publisher policies before changing robots rules. Search retrieval and model-training controls may differ; preserve the owner's choices and do not infer consent to training from a request for visibility. Record the provider, official source, and verification date. If those are unknown, defer provider-specific changes while continuing supported content and technical work.
- Check current official guidance before recommending `llms.txt`, “AI schema,” mandatory chunking, query-fan-out pages, or special AI meta tags. Do not invent a ranking benefit for an unsupported convention. Google's current guidance emphasizes foundational SEO and useful original content and does not require special AI markup for its AI search features.
- Do not fabricate citations, third-party mentions, reviews, expert quotations or “AI visibility” scores.
- Explain that inclusion in an AI-generated answer or citation cannot be guaranteed and is not equivalent to a standard rank position.

## 15. Off-page authority and brand trust

- For E-E-A-T (experience, expertise, authoritativeness, and trustworthiness), assess relevant evidence using [Content and trust review](references/content-and-trust-review.md). Treat it as contextual quality guidance, not a measurable Google score or a requirement that every page have an individual author bio.
- Assess reputation and relevant independent mentions when data is available.
- Recommend earning recognition through genuinely useful assets, original research, industry participation, relationships, public expertise and legitimate PR.
- Avoid paid links that pass ranking credit, private blog networks, automated link building, excessive reciprocal links, spam comments, low-quality directories, fake news placements and mass guest-post schemes.
- Do not fabricate testimonials, customer logos, partners, awards, author bios or external citations.
- Treat negative SEO claims skeptically; investigate evidence before recommending disavowal or other high-impact remediation.

## 16. Analytics, Search Console and reporting

Where authorized, connect SEO work to outcome data instead of reporting only audit scores.

### Google Search Console

- Verify correct property scope and access; Domain and URL-prefix properties have different scopes.
- Review sitemap processing, indexing/page status, URL Inspection, canonical selection, crawl issues, manual actions, security issues, Core Web Vitals and relevant search appearance reports when available.
- Use the Performance report to inspect clicks, impressions, CTR, query/page/country/device trends and search appearance.
- Compare equivalent date ranges and segment by branded/non-branded queries, page type, country, device or template where helpful.
- Do not treat every excluded URL as an error: determine whether exclusion is intentional.
- Do not claim data access or Google-selected canonical results unless the relevant report/tool was actually inspected.

### Analytics and conversion measurement

- Track meaningful outcomes: qualified form submissions, calls, purchases, trials, newsletter signups or other site-specific conversions.
- Review organic landing pages, engagement and conversion quality while respecting consent, privacy rules and applicable law.
- Avoid collecting unnecessary personal data or putting PII into URLs, analytics events or reports.
- Distinguish correlation from causation. Annotation of releases, campaigns and migrations helps interpret changes.

### Monitoring cadence

- After a technical release: immediately run smoke tests, then inspect Search Console/monitoring as recrawling occurs.
- Weekly: review major error changes, new content discovery and short-term anomalies where enough data exists.
- Monthly or quarterly: review trend data, content decay, opportunities, conversions, competitor changes and roadmap priorities at a cadence appropriate to site size.
- For major traffic drops, compare dates, affected templates/pages/queries/devices/countries; inspect releases, robots/canonical/redirect changes, analytics tracking, manual/security actions, demand/seasonality and search updates. Do not attribute a drop to an algorithm update without evidence.

## 17. Implementation and testing rules

When the user asks to implement fixes:

1. Confirm the requested scope and inspect the code that owns the behavior.
2. Identify whether the issue is sitewide, template-level or page-specific.
3. Make a minimal patch with existing project conventions.
4. Add or update tests where practical, especially for URL builders, sitemap generation, metadata and redirects.
5. Run the relevant commands available in the repository: build, lint, type-check, unit/integration tests and custom validation.
6. Inspect actual output, not only source code.
7. For host/CDN/production behaviors, distinguish local test results from deployment verification.
8. Do not deploy or make external account, DNS, Search Console or CMS changes unless explicitly authorized and the relevant access is available.

Do not make large-scale content updates, URL changes, mass redirects, `noindex` changes, robots wildcard changes, schema rollouts or dependency upgrades without an appropriate risk assessment and rollback path.

## 18. Required output formats

Adapt the level of detail to the user request. For a full audit, report using the template in `templates/seo-audit-report-template.md`. For content strategy, use `templates/content-brief-template.md`.

For actionable technical or content findings, include:

- **Finding:** the issue or opportunity.
- **Assessment:** verified issue or recommendation, using section 3; summarize preserved choices and coverage gaps separately when useful.
- **Evidence:** file/line, URL/response, report or tool result, including source date and whether observed directly or supplied. For content claims, identify the claim and what the source actually supports.
- **Scope:** affected pages/templates.
- **Product fit:** the customer need, relevant offer, and intended outcome this change supports.
- **Priority:** P0–P3 and confidence.
- **Recommendation:** a specific minimal fix.
- **Risk/dependency:** deployment, CMS, analytics, legal, or external access.
- **Validation:** concrete test and expected result.
- **Outcome check:** the relevant metric and available baseline, or the measurement gap; distinguish this from passing a technical test.
- **Implementation status:** not implemented, implemented/tested, implemented/unverified, or blocked; independent of assessment and confidence.

Final reports must list files changed, commands run, tests passed/failed, live checks completed/not completed, and rollback steps for risky changes. Be honest about failure and missing evidence.

## 19. Definition of done

An SEO task is complete when the requested scope is addressed, recommendations respect the verified product and customer context, implementation is consistent with the project's actual architecture, relevant checks pass, unintended behavior is not introduced to the extent tested, and remaining limitations are documented.

Do not use “SEO complete,” “Google trusts the site,” “guaranteed to rank,” or similar claims. Prefer observable outcomes such as “canonical output now points to the preferred URL in tested routes,” “sitemap validates,” or “the deployed redirect returned a single 308 in the tested case.”

## Official references

Use `references/official-resources.md` for a curated list of authoritative documentation. Because search-engine requirements change, re-check relevant official documents during work rather than relying on this file as a frozen statement of current policy.
