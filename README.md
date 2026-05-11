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

## Key Decisions & Assumptions

- **Indentation cap at 72px** – I didn't want the sidebar to break when someone nests 10 levels deep. Each level adds 12px, stops at 72px. Works like VS Code.

- **Container vs leaf** – Containers can have children, leaves can't. UI only shows add buttons on containers.

- **localStorage only** – No backend, just saves tree and dark mode locally. Good enough for the assignment.

- **Why react-quill-new** – The normal react-quill crashed on React 18. This fork fixed it.

- **Recursive TreeNode** – Handles unlimited depth. Might slow down at 500+ nodes but fine for an editor.

- **Dark mode via CSS class** – Simple toggle on the root div, saves to localStorage.

- **Responsive** – Sidebar goes full width on mobile. Not perfect but usable.

- **Graph tab not functional** – Assignment only needed the tree view.

- **IDs using Date.now()** – Works for one user. Would use uuid if multiple people edited at once.