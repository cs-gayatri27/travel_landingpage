# 🌍 Wander — Travel Landing Page

A modern, minimal travel landing page built with pure HTML & CSS as part of Week 2 of my web development journey.

---

## 🧭 About This Project

**Wander** is a landing page for a travel community built for explorers who love discovering the world differently — together.

The page represents a platform where like-minded travellers can:

- **Discover** curated destinations across 48+ countries
- **Connect** with local expert guides and fellow explorers
- **Share** travel stories, itineraries, and hidden gems
- **Plan** meaningful journeys rooted in culture and sustainability

The community is built around the idea that the best travel experiences come not from tourist checklists, but from genuine human connections and slow, purposeful exploration. Whether you're a backpacker, a luxury seeker, or a digital nomad — Wander is a home for every kind of explorer.

> *"Not all those who wander are lost — but with Wander, you'll always find something extraordinary."*

---

## 📁 Project Structure

```
wander-landing/
├── index.html        ← Main landing page
├── about.html        ← About page (Task 2)
└── README.md         ← You are here
```

---

## ✅ What's Built

| Feature | Tech Used |
|---|---|
| Fixed navigation bar with blur | CSS `position: fixed`, `backdrop-filter` |
| Hero section with image grid | Flexbox, CSS Grid |
| Scrolling destinations marquee | CSS `@keyframes` animation |
| Featured destination cards | Flexbox, CSS hover transitions |
| Newsletter signup section | HTML form elements |
| Responsive layout | CSS `@media` queries |
| Fade-in page animations | CSS `@keyframes`, `animation-delay` |

---

## 🧠 Concepts Learned

### HTML
- Semantic tags — `<nav>`, `<section>`, `<footer>`, `<ul>`, `<figure>`
- Structuring a full multi-section page
- Linking between pages with `<a href="">`
- Image embedding with `<img>` and `alt` text
- Form elements — `<input>`, `<button>`

### CSS
- CSS custom properties (`--variables`) for consistent theming
- `position: fixed` for sticky navbar
- `backdrop-filter: blur()` for glassmorphism effect
- `clamp()` for fluid responsive font sizes
- `object-fit: cover` for image cards
- `overflow: hidden` for the marquee strip
- `::before` / `::after` pseudo-elements for decorative backgrounds
- Transition and `transform` for smooth hover effects

### Flexbox
- `display: flex` for navbar, hero, cards, and footer layout
- `justify-content` and `align-items` for alignment
- `flex: 1` for flexible column sizing
- `gap` for spacing between flex children
- `flex-direction: column` on mobile with media queries
- `flex-wrap` to handle overflow on small screens

---

## 🚀 What's Next — Improvements to Make

### 🔧 Functionality
- [ ] Add a working contact / newsletter form (connect to Firebase or Formspree)
- [ ] Add a destinations filter (JavaScript — filter cards by region)
- [ ] Add a mobile hamburger menu (JavaScript toggle)
- [ ] Add smooth scroll behaviour for nav links

### 🎨 Design
- [ ] Add a dark mode toggle
- [ ] Add more destination cards with a "Load more" button
- [ ] Add a testimonials / reviews section
- [ ] Improve mobile layout for the hero image grid

### ⚡ Performance
- [ ] Replace Unsplash URLs with locally hosted optimised images
- [ ] Add `loading="lazy"` to all images
- [ ] Minify CSS into a separate `style.css` file

### 📄 Pages to Add
- [ ] `destinations.html` — full destinations listing page
- [ ] `contact.html` — contact form page
- [ ] `blog.html` — travel stories / blog listing

---

## 🛠️ How to Run

No server needed. Just open the file in your browser:

```bash
# Option 1 — double click index.html in your file explorer

# Option 2 — use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"

# Option 3 — use Python's built-in server
python -m http.server 3000
# Then visit http://localhost:3000
```


```
screenshots/
├── desktop-hero.png
├── destinations-section.png
└── mobile-view.png
```

---

## 🔗 Live Demo

> Deploy to GitHub Pages and paste the link here.

`https://your-username.github.io/wander-landing/`

---

## 👤 Author

**Your Name**  
Week 2 — Web Development Fundamentals  
Focus: HTML, CSS, Flexbox

---

## 📚 Resources Used

- [MDN Web Docs — Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout)
- [CSS Tricks — A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Google Fonts — Cormorant Garamond & DM Sans](https://fonts.google.com/)
- [Unsplash — Free travel photography](https://unsplash.com/)