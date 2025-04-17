# CV Website – John Doe

A fully responsive and modular personal CV website built using HTML, CSS, and JavaScript.

This project demonstrates clean layout structure, reusable components, and responsive design, with deployment handled via Railway.

---

## Live Demo

[https://cv-website-html-production.up.railway.app](https://cv-website-html-production.up.railway.app)

---

## Project Structure

```
cv-website-html/
├── index.html               # Main landing page
├── about.html               # Subpages (shared layout)
├── experience.html
├── education.html
├── skills.html
├── contact.html
│
├── css/
│   └── style.css            # Core styles, responsive layout, dark mode
│
├── js/
│   ├── include.js           # Injects header, sidebar, and footer via fetch()
│   └── script.js            # Optional site-specific JS
│
├── partials/
│   ├── header.html
│   ├── sidebar.html
│   └── footer.html
│
├── img/
│   └── profile.jpg
│
├── package.json             # Defines static server (serve)
└── Procfile                 # Required for Railway deployment
```

---

## Features

- Responsive and mobile-friendly design
- Reusable layout structure with HTML partials
- Clean CSS using global variables and modern practices
- Native dark mode support using `prefers-color-scheme`
- Font Awesome integration for social icons
- Deployed using Railway and `serve` for static hosting

---

## Setup and Local Development

To run locally:

```bash
git clone https://github.com/devbyjonni/cv-website-html.git
cd cv-website-html
npm install
npm start
```

> Requires [Node.js](https://nodejs.org) installed globally.

---

## Deployment

This project is deployed using [Railway](https://railway.app), which hosts and serves static files using the `serve` package.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome
- Railway

---

## Planned Improvements

- Dynamic rendering of sections using JSON (projects, skills, etc.)
- Contact form integration (e.g., Formspree)
- Visual theme refinement (fonts, colors)

---

