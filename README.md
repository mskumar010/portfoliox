# Portfolio X - Dynamic Developer Portfolio

A premium, highly responsive, and customizable portfolio template built with **React**, **Tailwind CSS**, and **Framer Motion** (via CSS animations). Designed to be "Apple-esque" with a focus on dark/light mode elegance, smooth transitions, and mobile-first usability.

## 🚀 Features

- **🎨 Dynamic Theming:** System-default, Light, and Dark modes with an "Apple-like" color palette (`#f5f5f7` / `#000000`).
- **📱 Mobile First:** Fully responsive sidebar navigation, grid layouts, and modal views.
- **📄 Built-in Resume Viewer:** Embed your PDF resume directly into the site with zoom and download controls.
- **💼 Project Details:** Deep-dive views for projects with tech stack, feature lists, and banner images.
- **⚡ Quick Connect:** Smart contact button with pre-filled messages and validation.
- **🛠️ Easy Customization:** All content is driven by a single `CONFIG` object.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/portfoliox.git
    cd portfoliox
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 📝 Customization (IMPORTANT)

All your personal details, projects, and content are managed in **`src/portfolio.tsx`**. You do NOT need to edit HTML structure manually.

1.  Open `src/portfolio.tsx`.
2.  Locate the `CONFIG` object at the top of the file.
3.  Update the fields:
    - `personal`: Name, title, email, phone, location, social links.
    - `projects`: Add your top projects with images, descriptions, and feature lists.
    - `skills`: Adjust your skill levels.
    - `education` & `experience`: Add your history.
    - `resumePDF`: Place your PDF in the `public` folder (or assets) and update the path here.

### Example Config:

```javascript
const CONFIG = {
  personal: {
    name: "Jane Doe",
    title: "Full Stack Engineer",
    // ...
  },
  // ...
};
```

## 🎨 Theme Colors

You can change the primary accent color easily:

1.  In `CONFIG`, find `primaryColor`.
2.  Change it to any hex code (e.g., `#0ea5e9` for Sky Blue, `#ec4899` for Pink). The site will automatically update all buttons, borders, and highlights.

## 📦 Deployment

This project is optimized for **Vercel**.

1.  Push your code to GitHub.
2.  Go to [Vercel.com](https://vercel.com) and "Add New Project".
3.  Import your repository.
4.  Framework Preset: **Vite**.
5.  Click **Deploy**.

That's it! Your responsive portfolio is live.

## 🧱 Tech Stack

- **React 18**: UI Library
- **Tailwind CSS 3**: Styling
- **Lucide React**: Icons
- **React PDF**: Resume rendering
- **Vite**: Build tool

---

_Built with ❤️ for developers who want a clean, professional start._
