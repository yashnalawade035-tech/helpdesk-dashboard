# Helpdesk Dashboard

A responsive, pixel-perfect ReactJS Helpdesk Dashboard built with Vite and Tailwind CSS.
Original Design Inspiration: [Dribbble Shot](https://dribbble.com/shots/21816219-Ticketing-Capacity-Helpdesk)

## 🚀 Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Start Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

### Design Decisions & Experience

**1. Data Flow (Single Source of Truth)**
I chose to pass `tickets` as a prop down to the `Dashboard` and `TicketTable` components rather than fetching data inside them.
*   *Why?* It prevents synchronization bugs. The search filter in `App.jsx` updates the state, and `TicketTable` just renders what it receives. It keeps the components pure and predictable.

**2. Mobile-First Layout**
The dashboard uses a `grid-cols-1 md:grid-cols-3` layout.
*   *Why?* Support agents often need to check status on the go. On mobile, this stacks the critical stats cards vertically for easy tapping, while expanding to a full row on desktop for a quick scan.

**3. Scalable Theming**
I configured `tailwind.config.js` to use HSL CSS variables (e.g., `--primary`).
*   *Why?* This isn't just for looks—it allows for future scalability. If we need to add a "Dark Mode" or change the brand color later, we only change the variable in `index.css`, and the entire app updates instantly.

## 📦 Deployment

This project is ready for Netlify/Vercel.
1. Run `npm run build`.
2. Drag and drop the `dist/` folder into the Netlify dashboard.
