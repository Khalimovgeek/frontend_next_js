# Certified True Copy (CTC) Admin Dashboard

An implementation of the Certified True Copy Admin Dashboard built for the Frontend Machine Test. The project is designed with strict adherence to the requested technical stack, combining the layout flexibility of **Tailwind CSS** with the robust enterprise components of **Ant Design** inside the **Next.js App Router**.

---

## 🔗 Submission Links
* **Source Code Repository:** [Insert GitHub URL here]
* **Live Deployment URL:** [Insert Vercel Deployment URL here]

---

## 🚀 Getting Started

Follow these instructions to get the project up and running locally.

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <your-project-folder>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. View in browser
Open [http://localhost:3000](http://localhost:3000) inside your browser.

---

## 🛠️ Technical Stack & Architecture

* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript (Fully typed components, interfaces, and Table columns)
* **UI Component Library:** Ant Design (antd v5)
* **Layout & Utility Styling:** Tailwind CSS
* **Icons:** Lucide-React & @ant-design/icons

---

## 💡 Key Engineering Highlights

### 1. Hybrid Component Architecture (Ant Design + Tailwind)
Standard component libraries can sometimes be difficult to customize to pixel-perfect Figma designs. For this machine test, I utilized a production-standard hybrid approach:
* Used **Ant Design's core layout engine elements** (like `<Table>`, `<Modal>`, `<Tabs>`, `<Drawer>`, `<Select>`, and `<Checkbox>`) to ensure accessible markup, form handling, and optimized DOM rendering.
* Wrapped and styled components using **Tailwind CSS** to match the exact custom margins, borders, paddings, and font weights specified in the Figma file.

### 2. Unified Brand Tokenization (`ConfigProvider`)
Instead of overriding the default Ant Design blue color manually with custom styles, I leveraged Ant Design's modern CSS-in-JS Token system. By wrapping the application in a global `<ConfigProvider>` in `layout.tsx`, all Ant Design elements (checked states, active underlines, and borders) automatically inherited the brand's exact plum color (`#4A1F36`) seamlessly:
```typescript
<ConfigProvider
  theme={{
    token: {
      colorPrimary: "#4A1F36", // Matches brand aesthetic globally
      borderRadius: 6,
    },
  }}
>
```

### 3. Clean and Well-Typed Codebase
All table data, state operations, and column structures are strictly typed using TypeScript interfaces (`DataType`) to eliminate runtime errors and ensure ease of maintainability.

---

## 📦 Project Structure
The project maintains a clean, scalable folder architecture:

```text
src/
├── app/
│   ├── layout.tsx         # ConfigProvider setup and Next/AntdRegistry integration
│   ├── page.tsx           # Main Dashboard Shell & Antd Table integration
│   └── globals.css        # Tailwind core directives
├── components/
│   ├── AddClerkModal.tsx      # Modal to add a new clerk
│   ├── AddressCard.tsx        # Inline address popover component
│   ├── AssignClerkModal.tsx   # Modal to assign personnel to a row
│   ├── ChooseTagMenu.tsx      # Dropdown menu to add tags to rows
│   ├── CreateTagModal.tsx     # Custom Modal to create support tags
│   ├── FilterDrawer.tsx       # Antd Drawer component for global filters
│   ├── ProductFilter.tsx      # Dropdown multi-select for product column
│   ├── TagsQuickFilter.tsx    # Header multi-select to filter rows by active tag
│   └── OrderDetailsModal.tsx  # Tabbed detailed order view (using Antd Tabs)


```
## ⚙️ Implemented Functional Flows

* **Bidirectional Modal Communication:** Clicking "Create New Tag" inside the tag selection dropdown automatically closes the dropdown and opens the global `CreateTagModal`.
* **Dynamic Tag Management:** Click `x` on any tag in the table rows to remove it. Adding a tag via "Choose Tag" automatically renders it in real-time.
* **Complex Multi-Filter:** Table filters on both "Products" and "Tags / Note" can run concurrently.
* **Inline Popovers:** Clicking "Copy Address" displays a clean floating modal with address coordinates corresponding to that specific record.
```