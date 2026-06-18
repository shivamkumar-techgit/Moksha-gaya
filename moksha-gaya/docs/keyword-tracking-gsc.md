# Google Search Console (GSC) Keyword Tracking & Optimization Guide

This guide details how to configure **Google Search Console**, monitor our core high-intent keywords, and execute a monthly optimization workflow to turn search impressions into customer bookings for **Gaya Rituals**.

---

## 1. GSC Setup & Verification

Before tracking performance, verify ownership of `https://gayarituals.com` in Google Search Console:

1.  **Create Property:** Add a new property in the GSC dashboard selecting **URL Prefix** or **Domain** verification.
2.  **Verification Method:** 
    *   *HTML File Upload:* Place the Google-provided verification file in the `public/` directory of your Next.js project.
    *   *DNS TXT Record:* Add the TXT record in your domain registrar's DNS settings (Recommended for complete domain tracking).
3.  **Submit Sitemap:** Go to **Sitemaps** in the left sidebar and submit:
    ```
    https://gayarituals.com/sitemap.xml
    ```
    *This registers all 57 static routes for instant crawling.*

---

## 2. Core Target Keywords & Page Mapping

Google matches search queries to specific pages. Ensure you monitor the performance of these specific target keywords against their mapped landing pages:

| Target Search Query | Mapped Target Landing Page | Priority |
| :--- | :--- | :--- |
| `pind daan in gaya` | [/pind-daan-in-gaya](/pind-daan-in-gaya) | High |
| `gaya pind daan` | [/gaya-pind-daan](/gaya-pind-daan) | High |
| `online pind daan gaya` | [/online-pind-daan-gaya](/online-pind-daan-gaya) | High |
| `shraddha in gaya` | [/gaya-shraddha](/gaya-shraddha) | High |
| `gaya rituals` | [/](/) (Homepage) | Brand |
| `best pandit for pind daan in gaya` | [/best-pandit-for-pind-daan-in-gaya](/best-pandit-for-pind-daan-in-gaya) | Local |
| `pind daan in gaya cost` | [/gaya-pind-daan-cost](/gaya-pind-daan-cost) | High-intent |

---

## 3. Monthly Optimization Workflow (Impression-to-Click Strategy)

Execute this workflow **on the 1st of every month** to identify and improve pages that are visible but not capturing search clicks.

### Step 1: Identify "High Impression, Low Click" Pages
1. In GSC, navigate to **Performance** > **Search Results**.
2. Select a Date Range of **Last 28 Days**.
3. Toggle on **Average CTR** and **Average Position**.
4. In the table below, export the list or sort the query data by **Impressions** descending.
5. Look for keywords that have **Impressions > 500** but **CTR < 2%** (these represent huge untapped traffic opportunities).
6. Note the **Average Position** — typically, these pages will rank on page 2 (positions 8–18) of Google search results.

### Step 2: Analyze the Intent Gap
Before editing, search the target query in Google yourself and inspect the top 3 ranking results:
* What questions do they answer immediately?
* Do they feature interactive cost lists, tables, or videos?
* Is our page missing matching structured schemas or target keywords?

### Step 3: Execute Page Improvements
Based on your findings, optimize the low-performing page:

1.  **Low CTR (Position 1–5, but few clicks):**
    *   *Fix:* Improve the page's Meta Title and Meta Description in `page.tsx` to make it click-worthy.
    *   *Action:* Use action words, highlight transparency, or add trust indicators:
        *   *Before:* `Pind Daan in Gaya Cost - Gaya Rituals`
        *   *After:* `Pind Daan in Gaya Cost 2026: Complete Cost Breakdowns & Budgets`
2.  **Low Position (Position 11–25, high impressions, low clicks):**
    *   *Fix:* Increase content depth, add internal link anchors, and satisfy long-tail intents.
    *   *Action:*
        *   Add 2-3 new frequently asked questions inside the FAQ section.
        *   Link directly to the target page from recently created blog posts.
        *   Include a table detailing prices, accommodation lists, or timings.

---

## 4. Performance Log Tracker

Copy this template to track your monthly progress and audit optimization results:

| Month | Target Keyword | Impressions | Clicks | CTR (%) | Avg. Position | Optimization Action Taken |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **July 2026** | `online pind daan gaya` | | | | | Adjusted meta desc to highlight 'Live HD Streaming' |
| **July 2026** | `pind daan in gaya cost` | | | | | Added lodging rates table and linked from cost blog |
| **Aug 2026** | `shraddha in gaya` | | | | | |
| **Aug 2026** | `gaya pind daan` | | | | | |
| **Sept 2026** | `best pandit for pind daan` | | | | | |

---

*Tip: Google updates search console data with a 48-hour delay. After implementing changes, request Google to re-crawl the page via the GSC URL Inspection Tool for faster indexing.*
