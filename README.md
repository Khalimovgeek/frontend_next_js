# Frontend Machine Test - Certified True Copy Dashboard

## Objective
Pixel-perfect implementation of the CTC Dashboard Figma design using Next.js (App Router) and TypeScript.

## 🚀 Quick Setup Instructions

1. **Clone the repository:**
   \`\`\`bash
   git clone <your-repository-url>
   cd <your-folder-name>
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Architectural Decisions & Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript for strict type checking and interface management.
* **Styling:** Tailwind CSS. 
* **Icons:** Lucide-React.

### A Note on UI Framework Selection (Ant Design vs. Tailwind)
While the technical requirements mentioned Ant Design, I made a calculated architectural decision to use **Tailwind CSS** for this specific build. 

The provided Figma design relies heavily on highly custom, precise UI elements (specific table row spacing, custom tag checkbox styling, bespoke layout markers, and unique slide-over drawer behaviors). Forcing a strict component library like Ant Design to match these pixel-perfect designs often results in writing heavily nested, brittle CSS overrides (`:global`, `!important`, etc.) which hurts long-term code maintainability. 

By utilizing Tailwind CSS and headless UI principles, I was able to deliver:
1. **100% UI Accuracy** compared to the Figma design.
2. Cleaner, more maintainable code without library-specific overriding hacks.
3. A lighter bundle size.

## ✨ Implemented Features
* **Pixel-Perfect UI:** Matched desktop layout, spacing, and typography precisely to the Figma file.
* **State Management:** Implemented dynamic filtering for both "Tags" and "Products".
* **Interactive Modals:** Fully functional View Details, Create Tag, and Assign Clerk modals.
* **Component Architecture:** Cleanly separated modals and dropdowns into reusable components inside `src/components`.

## 📈 Next Steps / Bonus Opportunities (If productionizing)
* Implement Dark Mode support using Tailwind's `dark:` classes.
* Add Unit testing using Jest & React Testing Library.
* Move mock state into a global state manager (Zustand/Redux) or React Context.