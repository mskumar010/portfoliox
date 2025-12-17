# PortfolioX ⚡
 
A high-performance, design-driven developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**. Features a professional "Apple-esque" aesthetic, dark mode, and a configuration-driven architecture.

## ✨ Features

- **🎨 Dynamic Theming**: System-syncing Dark/Light mode with meaningful contrast (Tinted Outlines vs Solid Fills).
- **📱 Responsive Layout**: Mobile-first architecture with a smooth sidebar navigation on desktop.
- **⚡ Tech Stack Visuals**: Integrated **Official Brand Icons** (React, Node, Mongo, etc.) using `react-icons/si` for professional accuracy.
- **💼 Project Showcase**: Deep-dive views with high-fidelity mockups, feature lists, and category filtering.
- **📄 Resume Viewer**: Built-in PDF viewer (`react-pdf`) with zoom/download controls.
- **💬 Quick Connect**: "One-Click" contact form autofill with smart validation and personalization ("Rahul from T-Hub").
- **🛠 Config-Driven**: Entire content (Bio, Skills, Projects, Socials) managed via a single `src/config.tsx` file.

## 🚀 Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Icons**: Lucide React + React Icons (Simple Icons)
- **PDF**: React-PDF
- **Animation**: CSS Native Animations

## 🛠️ Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/portfoliox.git
    cd portfoliox
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run Development Server**:

    ```bash
    npm run dev
    ```

4.  **Build for Production**:
    ```bash
    npm run build
    ```

## 🔐 Environment Setup

To enable the contact form, you need to set up **EmailJS**.

1.  Copy the example environment file:
    ```bash
    cp .env.example .env
    ```
2.  Open `.env` and fill in your EmailJS credentials:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

## 📝 Customization

All content is managed in **`src/config.tsx`**. You do NOT need to touch the main component logic.

1.  Open `src/config.tsx`.
2.  Update the `CONFIG` object:
    - **Personal**: Name, Email, Bio.
    - **Tech Stack**: Add icons using `react-icons` (e.g., `<SiReact />`).
    - **Projects**: Update titles, descriptions, and mockups.
    - **Theme**: Change `primaryColor` hex code to re-theme the entire app instantly.

## 📄 License

MIT License. Free to use and customize.
