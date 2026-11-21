# Media production brief

Every row is one media slot on the site. Each `id` matches a
`data-media-id` attribute in the rendered HTML. Until a real file is
supplied, a `MediaFrame` renders a labelled placeholder, so the page never
looks broken.

**Format notes**
- Videos: `.mp4` (H.264), muted, looping, no audio track. Under ~4 MB
  (they autoplay on scroll). Supply a `poster` frame (`.jpg`) for each.
- Clips are silent and 10 to 20 s: one gesture per clip, readable without
  sound. Shoot real canvases, never mock-ups.
- Every capture should come from a canvas that can be published read-only,
  so the site can link "See this canvas for real" next to it.

## Priority 1 — needed before the launch posts

| ID | Where | Type | Aspect | Content | File | Status |
|---|---|---|---|---|---|---|
| hero-demo | Home hero | image → video | 4/3 (bleeds right on desktop) | Today: `main.png`. Target: 10 s clip, Alt+click on 3 competitor screenshots → one sentence → a table lands next to them. | `main.png` / `hero-demo.mp4` | 🟨 image live |
| home-show | Home, gesture 2 | video | 16/10 | Same gesture as the hero clip, slower: the nodes outlined in purple, Nolë's steps, the end summary with the changed nodes. | `add-attachments.mp4` (temporary) | 🟨 |
| home-keep | Home, gesture 3 | image or video | 16/10 | A node's Versions tab: "Nolë" and "You" rows, a diff highlighted, restore. | `history.png` | ✅ |
| og-image | `BaseHead.astro` | image | 1200×630 | A canvas capture + the hero line, one per language. A first version is generated from `main.png`; replace with a designed one. | `public/og-image.png`, `public/og-image-fr.png` | 🟨 v1 live |

## Priority 2

| ID | Where | Type | Aspect | Content | File | Status |
|---|---|---|---|---|---|---|
| home-lay | Home, gesture 1 | video | 16/10 | Drop 6 files at once (PDF, screenshots, an audio): they land as nodes; Ctrl+K finds a sentence inside the scanned PDF. | `add-nodes.mp4` (temporary) | 🟨 |
| nole-at-work | /nole | video | 16/9 | Nolë working while the user edits another node; panel closed; the task lands in the Inbox. | `add-attachments.mp4` (temporary) | 🟨 |
| app-live | /product (to add) | video | 16/10 | A cell edited in a table, the chart of the connected app follows. The rental simulator is a good subject. | — | ⬜ |
| mcp-claude-code | /developers, /use-cases/founders (to add) | video | 16/9 | Claude Code reads a spec on the canvas over MCP and flips the task to "Done" in a table. | — | ⬜ |

## Public canvases to publish (read-only), then paste in `src/lib/constants.ts` → `PUBLIC_CANVASES`

| Key | Canvas | Used on |
|---|---|---|
| home | the existing demo canvas (check it still reads well) | Home, Product |
| founders | Competitive review of a SaaS launch | /use-cases/founders |
| consultants | Market map: buy now, pay later in Europe | /use-cases/consultants |
| research | Synthesis of 12 interviews | /use-cases/research |
| personal | Rental investment, with the simulator app | /use-cases/personal |

An empty URL hides the "See this canvas for real" button, so nothing links
to a dead end.
