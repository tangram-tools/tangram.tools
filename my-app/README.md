# Tangram Tools

This repository is now a plain static export of `tangram.tools`.

## Structure

- `index.html` is the homepage.
- Each route is a real directory with its own `index.html`, for example `about/index.html` and `toolbox/business/index.html`.
- `assets/` contains all scripts, fonts, images, and local runtime modules needed by the site.

## Hosting

Host the repository root as a static site. No build step or Framer hosting is required.

For local verification, serve the directory with any static file server, for example:

```bash
cd /Users/gradyharwood/git/tangram.tools/tangram.tools/my-app
python3 -m http.server 4173
```
