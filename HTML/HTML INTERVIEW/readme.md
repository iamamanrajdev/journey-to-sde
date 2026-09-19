# HTML Interview Questions — Prep Notes

Personal revision notes based on commonly asked HTML/HTML5 interview questions.

---

## Core Concepts

**1. Are tags and elements the same thing?**
No. A tag is just the opening/closing marker (`<h1>` or `</h1>`). An element is the full thing — opening tag + content + closing tag together.

**2. Tags vs Attributes**
Tags define the structure of content. Attributes sit inside a tag and describe extra properties of that element (e.g. `align`, `src`, `class`).

**3. Void elements**
Elements that don't need a closing tag because they don't wrap any content — e.g. `<br>`, `<img>`, `<hr>`.

**4. Why whitespace collapsing matters**
Browsers treat any run of spaces/tabs/newlines as a single space. This lets you indent and format your HTML source freely for readability without affecting how it renders.

**5. HTML Entities**
Special codes used to display reserved characters (`<`, `>`, `&`) or characters not on a keyboard, since typing them directly could break the HTML parser. E.g. `&lt;` for `<`, `&nbsp;` for a non-breaking space.

**6. class vs id**
`class` can be reused across multiple elements (for shared styling). `id` must be unique to a single element on the page.

**7. multipart/form-data**
An `enctype` value used on forms that need to upload files — it lets the browser send binary file data to the server, unlike the default `application/x-www-form-urlencoded`.

**8. Standard page layout tags**
`<header>` (top info), `<nav>` (menu), `<article>` (self-contained content), `<section>` (grouping within an article), `<aside>` (sidebar), `<footer>` (bottom section).

---

## Performance

**9. Optimizing asset loading**
- **CDN** — serve assets from servers closer to the user
- **Compression** — shrink file sizes before sending
- **Concatenation** — combine files to cut down HTTP requests
- **Minification** — strip unnecessary characters from JS/CSS
- **Lazy loading** — load non-critical assets only when needed

---

## Formatting & Semantics

**10. `<b>`/`<i>` vs `<strong>`/`<em>`**
They look identical by default (bold/italic), but `<strong>` and `<em>` also carry semantic meaning ("this text matters"), which matters for accessibility and SEO. `<b>`/`<i>` are purely visual.

**11. Doctypes**
Three legacy types exist — Strict, Transitional, and Frameset — though modern HTML5 just uses `<!DOCTYPE html>`.

**12. Declaring character encoding**
Done via `<meta charset="UTF-8">` inside `<head>`.

---

## HTML5 Specific

**13. What HTML5 added**
Native multimedia support, offline storage, background JS execution, canvas drawing (shapes), and new semantic tags.

**14. `<audio>` / `<video>`**
Native tags for embedding media without needing a plugin like Flash.

**15. Inline vs Block elements**

| Inline | Block |
|---|---|
| Takes only as much width as needed | Takes full available width |
| Doesn't force a new line | Always starts on a new line |
| `<span>`, `<a>`, `<strong>`, `<img>`, `<input>` | `<div>`, `<p>`, `<h1>`–`<h6>`, `<table>`, `<section>` |

**16. `<figure>` vs `<img>`**
`<img>` just embeds the picture. `<figure>` semantically wraps an image (or other media) together with its caption as one self-contained unit.

**17. Meta tags for metadata**
`<meta>` is a void tag used for things like SEO keywords, page description, and behaviors like auto-refresh — all set via its `name`/`content` or `http-equiv`/`content` attributes.

---

## Source

Compiled from InterviewBit's HTML Interview Questions guide, for personal revision only.