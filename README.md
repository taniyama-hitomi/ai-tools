# ai-tools
AIで作ったツール色々

## Item Manager

A simple web tool built with Next.js, React, and TypeScript for managing items.

### Features

- ✨ Clean UI built with Tailwind CSS
- 📝 Add items with name and description
- 📋 View all items in a list
- 🗑️ Delete items with one click
- ⚡ Modern React hooks (useState, useEffect)
- 🎨 Responsive design with gradient background

### Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3
- **Components:** Functional components with hooks

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout component
│   ├── page.tsx         # Main page with item management
│   └── globals.css      # Global styles with Tailwind
├── components/
│   ├── ItemForm.tsx     # Form component for adding items
│   └── ItemList.tsx     # List component for displaying items
└── ...config files
```

### Screenshots

**Empty State:**
![Empty State](https://github.com/user-attachments/assets/83ea0a4b-2bff-47d8-a209-4391c66d6ef5)

**With Single Item:**
![With Item](https://github.com/user-attachments/assets/1f61729b-670a-4e30-9381-d859387e8e06)

**With Multiple Items:**
![Multiple Items](https://github.com/user-attachments/assets/4cd876ea-ad01-4d34-b8a5-eaa7d0862f55)

