# Input–Output Scroll Mapping (React)
Deployment link: https://input-output-scroll.vercel.app/
This project implements an **interactive input–output viewer** in React, where:

- The **left panel** shows the full input text (e.g., a clinical note / case history).
- The **right panel** shows a list of **phrases** extracted from that text.
- Clicking on a **clickable phrase** on the right **automatically scrolls** the left panel to the corresponding phrase.
- Some phrases can be **non-clickable** (still highlighted but don’t trigger scroll).

This was built as a solution to an assignment on mapping **highlighted phrases** in an output view back to their **exact location** in the input text.

---

## ✨ Features

- Two-column layout: **Input** (left) and **Output** (right)
- Scrollable containers with smooth scrolling
- **Automatic mapping** of phrases from output to input using string matching
- **Clickable highlights** (scroll to text on left)
- **Non-clickable highlights** (visually distinct but no scroll)
- Simple, clean UI built with plain React + CSS (no UI library)

---

## 🧠 Core Idea / Algorithm

1. **Input text** (full paragraph/notes) is stored as a single string.
2. **Highlights** are stored as a list of objects, for example:

   ```js
   {
     id: "h1",
     text: "sharp and worsening abdominal pain",
     clickable: true
   }
