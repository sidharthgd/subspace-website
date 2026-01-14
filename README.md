# Subspace Website

A clean, minimal landing page for Subspace — an agentic analysis platform for research labs.

## Files

- `index.html` — Homepage
- `about.html` — About page
- `what-we-do.html` — What We Do page
- `contact.html` — Contact page
- `styles.css` — All styling and animations
- `script.js` — Minimal JavaScript for forms and interactions
- `subspace-logo.png` — Logo
- `CNAME` — Custom domain for GitHub Pages

## Deployment

Just push to GitHub Pages — no build step required.

1. Create a GitHub repository
2. Push all files to the `main` branch
3. Go to Settings → Pages → Deploy from `main` branch
4. Your site will be live at `supspace-app.com`

## Local Preview

Open `index.html` in your browser, or use a local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Customization

- **Colors**: Edit CSS variables at the top of `styles.css`
- **Content**: Edit the HTML files directly
- **Form handling**: Update the `handleFormSubmit` function in `script.js` to connect to your backend
