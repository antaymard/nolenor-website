# Media production brief

Every row below is one `<MediaFrame>` (or `<CodeBlock>`) call in the codebase.
Each `id` matches a `data-media-id` attribute in the rendered HTML and a
`MEDIA: <id>` comment directly above its call site in the `.astro` source —
grep either to find the exact component.

Until real files are supplied, every `MediaFrame` renders a styled
placeholder (icon + the description below) instead of a broken image/video,
so the page looks intentional at every stage of production.

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
| feature-canvas-nodes | `index.astro` (feature 1) | video | 16/10 | 6-10s | Slow pan/zoom across a busy canvas showing 4-5 different node types side by side (Blocknote, Image, Table, Value/KPI, PDF), then one node gets dragged into an expanded window. | `feature-canvas-nodes.mp4` + poster | ⬜ |
| feature-nole-agent | `index.astro` (feature 2) | video | 16/10 | 8-12s | Chat panel: user @mentions two nodes, sends a message, tool-call chips appear one by one (transparent reasoning trace), then a second "sub-agent" indicator shows work happening on another node in the background while the main thread keeps streaming. | `feature-nole-agent.mp4` + poster | ⬜ |
| feature-mini-apps | `index.astro` (feature 3, featured/wide) | video | 16/9 | 10-15s | An App node generates a live chart from connected data; briefly show a visible error state on the node; then the self-healing loop kicks in and the chart renders correctly without user action. This is the single highest "wow" clip — worth extra takes. | `feature-mini-apps.mp4` + poster | ⬜ |
| feature-version-history | `index.astro` (feature 4) | video | 16/10 | 6-10s | Open a node's version history panel, scrub/click through 2-3 prior versions, then click "jump to conversation" to land in the exact AI thread that made one of the changes. | `feature-version-history.mp4` + poster | ⬜ |
| feature-collaboration | `index.astro` (feature 5) | video | 16/10 | 6-10s | Share modal: add a collaborator by email, set permission to "editor"; then a second cursor/edit appears live on the canvas as if from another user; toggle a canvas to public and copy the share link. | `feature-collaboration.mp4` + poster | ⬜ |
| feature-export | `index.astro` (feature 6) | video | 16/10 | 6-10s | Open the export panel, choose "export this canvas," watch the client-side zip progress indicator, then show the resulting folder structure (README.md, canvas.json, nodes/*.md) in a file browser or terminal. | `feature-export.mp4` + poster | ⬜ |
| feature-mcp | `index.astro` (feature 7) | — (CodeBlock, no media) | — | — | No media needed — this section renders a hand-written JSON config snippet instead of video. | — | n/a |
| og-image | `BaseHead.astro` | image | 1200×630 | — | Static social share card: logo mark + "Your thinking deserves a canvas" + a clean canvas screenshot in the background, light background to match the palette. | `og-image.png` | ⬜ |

**Not currently in the manifest but referenced in code as static assets** (no
placeholder rendering needed, already copied verbatim from the product repo):
`public/favicon.svg`, `public/apple-touch-icon.png`, `public/icons/icon-192.png`,
`public/icons/icon-512.png`.
