# Portfolio — Oyeniyi Adenike Adetutu

Plain HTML5, CSS3 and JavaScript. No build step, no dependencies.

## Structure

```
portfolio/
├── index.html              ← main page (Home, About, Skills, My Work, Contact)
├── product-detail.html     ← placeholder for page 2, already wired up
├── css/
│   └── styles.css
├── js/
│   ├── projects.js         ← the 8 work/certificate cards live here
│   └── script.js           ← typewriter, animations, navigation
└── assets/
    ├── images/
    │   ├── profile.jpg     ← your photograph
    │   └── work/           ← the 8 card images
    ├── icons/
    │   ├── pen.svg  code.svg  people.svg  hands.svg  heart.svg  star.svg  wrench.svg  folder.svg
    │   └── tools/  ← vscode, nodejs, google-classroom, zoom, trello, github, word, google-sheets, canva, powerpoint (.svg)
    └── docs/
        └── oyeniyi-adenike-adetutu-cv.pdf
```

## Where to put "new portfolio materials"

Don't drop the folder in as-is. Move its contents into `assets/` using the map above:
photograph → `assets/images/profile.jpg`, project/certificate images →
`assets/images/work/`, tool logos → `assets/icons/tools/`, section icons → `assets/icons/`.
Keep the exact file names listed, and nothing else needs editing.

## Replacing your photo

Save the new picture as `assets/images/profile.jpg`. A portrait crop around 800×960px
works best — the crystal frame crops to a 5:6 ratio from the top, so your face stays visible.

## Editing the work cards

Everything for the eight cards is in `js/projects.js`. To change a title, blurb or image,
edit that entry. To add a ninth, copy a block and give it a new `slug` — the grid, the
stagger animation and the link to `product-detail.html?project=<slug>` all follow automatically.

## Running it locally

Open `index.html` in a browser, or for a proper local server:

```bash
cd portfolio
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploying

**GitHub Pages:** push these files to the repo root, then Settings → Pages → Branch `main`, folder `/root`.
**Netlify / Vercel:** drag the folder in, or connect the repo. No build command, publish directory is the root.

## Still to do

- `product-detail.html` currently shows a placeholder that reads the project slug.
  Once the page 2 design is ready it gets the real gallery, description, tools and links.
