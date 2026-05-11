# InkTree – Hierarchical Content Editor

Live demo:[https://inktree-editor.netlify.app/]

A responsive single‑page application for authoring and editing tree‑structured content. Built with React, Bootstrap, and React Quill. Supports unlimited tree depth, container/leaf nodes, WYSIWYG editing, dark mode, and localStorage persistence.

## Features

- **Hierarchical Tree** – Add, remove, and nest nodes (containers and leaves) with unlimited depth.
- **WYSIWYG Editor** – Medium‑like editor with headings, bold, italic, lists, blockquotes, code blocks, images, and videos.
- **Content Persistence** – Tree structure and node content saved automatically to `localStorage`.
- **Dark Mode** – Toggle dark/light theme, preference saved in `localStorage`.
- **Responsive Layout** – Works on desktop, tablet, and mobile (sidebar collapses on small screens).
- **Recursive Rendering** – Scalable tree rendering with depth‑based indentation (capped at 72px).

## Tech Stack

- **React** – UI library
- **Bootstrap** – Layout & responsive grid
- **React Quill (fork)** – Rich text editor with custom toolbar
- **React Icons** – Icons for tree and header
- **Vite** – Build tool
- **LocalStorage** – Persistence

