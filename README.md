# Jinglin Cao — personal research homepage

Static, bilingual personal site for [wr3ck1am.github.io](https://wr3ck1am.github.io/).

## Edit

- `index.html`: English content, links and page structure.
- `assets/main.js`: Chinese translations and language switching.
- `assets/styles.css`: responsive styling.
- `cv.html`: bilingual contact page for requesting a CV. CV PDFs are not published.

No build step or external runtime dependencies. Preview with `python3 -m http.server 8767` from this directory.

## GitHub Pages

Repository: `Wr3ck1Am/wr3ck1am.github.io`. Publish from `main` at `/`. `.nojekyll` keeps the site buildless.

## Content and media sources

- Current resume and project descriptions in the parent workspace, as confirmed on 2026-10-13.
- CAMP co-second authorship explicitly confirmed by the user on 2026-10-13; the arXiv display order is not used to infer contribution rank.
- Portrait from the user's GitHub avatar.
- CRIS-0 cover and demo still: the official film cover and public household-tidying demonstration poster from the [Aether AI research blog](https://aetherlabs.ai/articles/real-world-autonomous-robotic-system-with-causality-driven-agent-and-world-model).
- CAMP main figure: [CAMP project website](https://robo-camp.github.io/).
- Video2World: [official project page](https://aetherlabsai.github.io/Video2World/) and [arXiv paper](https://arxiv.org/abs/2610.04432), verified 2026-10-15. Authorship is labeled “Author” / “参与作者” without a rank, as confirmed by Jinglin; the entry describes the published project and benchmark scale. Its overview image comes from the project page.
- Submission states and planned data releases remain explicitly labeled.

Research figures and photographs belong to their respective owners. The site does not include private repository code or training assets.

## Visual design

Warm paper, cobalt blue, and orange accents form a research-notebook style. A portrait collage, dotted trajectory, orange sticker, and robot snapshot introduce Jinglin, while thumbnail rows present the released research. Mobile layouts retain the same content and language controls.

The compact academic layout places titles, authorship, and status together, with inline benchmark numbers and a short project index. CRIS-0 contributions open by default. On mobile, the decorated portrait sits beside the introduction and project thumbnails float beside the text. Research descriptions use 14–15 px, with smaller labels increased slightly for readability. The three-paragraph introduction links people, projects, and affiliations to their official pages; localized text uses separate spans so language switching preserves the links. It emphasizes current research and collaboration; undergraduate background is kept brief.

Space Grotesk is self-hosted from Google Fonts; its SIL Open Font License is included in `assets/fonts/OFL.txt`.

Only publicly released research is listed. CVs are shared individually on request; do not add resume PDFs or private recruiting materials to this repository.
