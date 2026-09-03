# Media production brief

Every row below is one `<MediaFrame>` call in the codebase (or, for the
`node-*` rows, one card slot in `NodeTypes.astro`).
Each `id` matches a `data-media-id` attribute in the rendered HTML and a
`MEDIA: <id>` comment directly above its call site in the `.astro` source —
grep either to find the exact component.

Until real files are supplied, every `MediaFrame` renders a styled
placeholder (icon + the description below) instead of a broken image/video,
so the page looks intentional at every stage of production.

The landing page is being rebuilt section by section. Rows whose location
says "unplugged" belong to sections that are still on disk but not rendered
on the page yet — no media needed for them until they come back.

Each `StickyFeatureScroll` step renders its media twice, from the same file:
once in the sticky desktop stack, once inline in the mobile layout.

**Format notes:**
- Videos: `.mp4` (H.264), muted, looping, no audio track needed. Keep under
  ~4MB where possible (they autoplay on scroll — file weight matters).
  Supply a static `poster` frame (`.jpg`) for each.
- Aspect ratios are fixed in code — cropping to match is easier than
  reshooting.
- "Content description" is a shot brief, not a literal script — the goal
  is to capture the feeling described, not match it frame-for-frame.

| ID | Location | Type | Aspect | Duration | Content description | Filename(s) | Status |
|---|---|---|---|---|---|---|---|
| hero-demo | `Hero.astro` | video | 16/9 | 8-14s | Supplied directly by the user, not produced from this brief. Reference frame: a chat thread on the left builds comparison nodes ("Nolënor vs Capacities/Spine/Flowith") that populate the canvas on the right, alongside a live chart and reference cards. Should read as "calm, fast, in control" — the first impression of the product. | `hero-demo.mp4` + `hero-demo-poster.jpg` | ⬜ |
| feature-canvas-nodes | `StickyFeatureScroll.astro` (step 1) | video | 16/10 | 6-10s | Slow pan/zoom across a busy canvas showing 4-5 different node types side by side (Blocknote, Image, Table, Value/KPI, PDF), then one node gets dragged into an expanded window. | `feature-canvas-nodes.mp4` + poster | ⬜ |
| feature-nole-agent | `StickyFeatureScroll.astro` (step 2) | video | 16/10 | 8-12s | Chat panel: user @mentions two nodes, sends a message, tool-call chips appear one by one (transparent reasoning trace), then a second "sub-agent" indicator shows work happening on another node in the background while the main thread keeps streaming. | `feature-nole-agent.mp4` + poster | ⬜ |
| feature-mini-apps | `StickyFeatureScroll.astro` (step 3) | video | 16/10 | 10-15s | An App node generates a live chart from connected data; briefly show a visible error state on the node; then the self-healing loop kicks in and the chart renders correctly without user action. This is the single highest "wow" clip — worth extra takes. | `feature-mini-apps.mp4` + poster | ⬜ |
| feature-version-history | unplugged (pending redesign) | video | 16/10 | 6-10s | Open a node's version history panel, scrub/click through 2-3 prior versions, then click "jump to conversation" to land in the exact AI thread that made one of the changes. | `feature-version-history.mp4` + poster | ⬜ |
| feature-collaboration | unplugged (pending redesign) | video | 16/10 | 6-10s | Share modal: add a collaborator by email, set permission to "editor"; then a second cursor/edit appears live on the canvas as if from another user; toggle a canvas to public and copy the share link. | `feature-collaboration.mp4` + poster | ⬜ |
| feature-export | unplugged (pending redesign) | video | 16/10 | 6-10s | Open the export panel, choose "export this canvas," watch the client-side zip progress indicator, then show the resulting folder structure (README.md, canvas.json, nodes/*.md) in a file browser or terminal. | `feature-export.mp4` + poster | ⬜ |
| feature-mcp | unplugged (pending redesign) | — (CodeBlock, no media) | — | — | No media needed — this section renders a hand-written JSON config snippet instead of video. | — | n/a |
| node-title | `NodeTypes.astro` (card: title) | image | see note | — | A Title node with its formatting toolbar (H1/H2/H3) open, linked to two smaller labelled nodes on the canvas. | `node-title.png` | ⬜ |
| node-blocknote | `NodeTypes.astro` (card: blocknote) | image | see note | — | A Blocknote node with the slash-command menu open on the block list (divider, table, image, video, audio, file) over real written content. | `node-blocknote.png` | ⬜ |
| node-link | `NodeTypes.astro` (card: link) | image | see note | — | A Link node showing a fetched page preview: thumbnail, page title, description, favicon and source URL. | `node-link.png` | ⬜ |
| node-pdf | `NodeTypes.astro` (card: pdf) | image | see note | — | A PDF node rendering a real document in place on the canvas — text and charts visible, no download step. | `node-pdf.png` | ⬜ |
| node-table | `NodeTypes.astro` (card: table) | image | see note | — | A Table node with typed columns (version, status select, date, text) and one select cell open on its options. | `node-table.png` | ⬜ |
| node-app | `NodeTypes.astro` (card: app) | image | see note | — | An App node rendering a live dashboard built from canvas data: editable inputs on the left, a chart below. | `node-app.png` | ⬜ |
| node-image | `NodeTypes.astro` (card: image) | image | see note | — | An Image node holding a 2×2 grid of generated logo variants, with the generation caption underneath. | `node-image.png` | ⬜ |
| node-media | `NodeTypes.astro` (card: media) | image | see note | — | An Audio node with a waveform player and a loop region, above a Video node playing on the canvas. | `node-media.png` | ⬜ |
| og-image | `BaseHead.astro` | image | 1200×630 | — | Static social share card: logo mark + "You need somewhere to think" + a clean canvas screenshot in the background, on the cream (#F6EDDF) brand background. | `og-image.png` | ⬜ |

**`node-*` previews (NodeTypes section):** these are the only slots that are
*cropped on purpose*. Each one sits at the bottom of its card and is clipped
by the card's edge, so only the top of the screenshot is ever visible — a peek
into the node, not a framed screenshot. Shoot them ~700px wide (2× the card)
and at least ~420px tall so the crop never runs out of image; anything below
the first ~260px will not be seen on any screen size.

**Not currently in the manifest but referenced in code as static assets** (no
placeholder rendering needed, already copied verbatim from the product repo):
`public/favicon.svg`, `public/apple-touch-icon.png`, `public/icons/icon-192.png`,
`public/icons/icon-512.png`.
