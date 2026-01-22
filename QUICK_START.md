# Quick Start Guide

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## Project Structure Overview

### `/src` Directory
```
src/
├── App.tsx                     # Main application with React Router
├── index.tsx                   # React DOM entry point
├── index.css                   # Global styles
├── constants.ts                # All data (solutions, services, case studies, etc.)
├── types.ts                    # TypeScript type definitions
│
├── /layout
│   ├── Header.tsx              # Navigation header with React Router links
│   └── Footer.tsx              # Footer with links and branding
│
├── /pages                      # Page components (one per route)
│   ├── Home.tsx                # Landing page
│   ├── Solutions.tsx           # Solutions catalog with filtering
│   ├── Services.tsx            # NEW! Service offerings page
│   ├── Foundation.tsx          # Platform foundation features
│   ├── CaseStudies.tsx         # Success stories and case studies
│   ├── Insights.tsx            # Blog/insights with category filtering
│   └── Contact.tsx             # Contact form
│
└── /components
    └── SharedComponents.tsx    # Reusable UI components library
```

## Key Files to Edit

### Adding/Editing Data
- **`src/constants.ts`** - Solutions, Services, Case Studies, Insights, Navigation items
- **`src/types.ts`** - TypeScript interfaces and enums

### Creating New Pages
1. Create a new file in `src/pages/NewPage.tsx`
2. Add a route in `src/App.tsx`
3. Add navigation item in `src/constants.ts` (NAV_ITEMS)
4. Import in `src/App.tsx`

### Styling
- All styling uses **Tailwind CSS** classes
- Custom colors defined in `index.html` tailwind config
- Global styles in `src/index.css`
- Glass effects: `.glass-card`, `.glass-panel`
- Hero glow: `.hero-glow`

## Routes

```
Home           http://localhost:5173/
Solutions      http://localhost:5173/solutions
Services       http://localhost:5173/services
Foundation     http://localhost:5173/foundation
Case Studies   http://localhost:5173/case-studies
Insights       http://localhost:5173/insights
Contact        http://localhost:5173/contact-us
```

## Important Components

### SharedComponents
Contains all reusable UI elements:
```jsx
import SharedComponents from '../components/SharedComponents';

<SharedComponents.Button>Click Me</SharedComponents.Button>
<SharedComponents.FadeIn>Content</SharedComponents.FadeIn>
<SharedComponents.SectionHeader eyebrow="Section" title="Title" />
```

### Navigation
Use React Router `Link` for navigation:
```jsx
import { Link } from 'react-router-dom';

<Link to="/solutions">
  <SharedComponents.Button>View Solutions</SharedComponents.Button>
</Link>
```

## Tailwind Classes

All styling uses Tailwind's utility classes:
- `bg-primary` - Cyan color
- `bg-[#050505]` - Dark background
- `text-textMuted` - Muted gray text
- `border-white/10` - 10% white border
- `hover:border-primary/50` - Hover effect

## Common Patterns

### Page Template
```tsx
import SharedComponents from '../components/SharedComponents';

const MyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] pb-32">
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <SharedComponents.FadeIn>
          <h1>Page Title</h1>
        </SharedComponents.FadeIn>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Your content */}
      </div>
    </div>
  );
};

export default MyPage;
```

### Filter Button
```tsx
<SharedComponents.FilterDropdown
  label="Industry"
  options={FILTER_OPTIONS.Industry}
  selectedValues={selectedIndustry}
  onChange={setSelectedIndustry}
/>
```

### Modal
```tsx
<SharedComponents.SolutionDetailModal
  solution={selectedSolution}
  isOpen={!!selectedSolution}
  onClose={() => setSelectedSolution(null)}
/>
```

## Deployment

The built `dist/` folder can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

```bash
# Build
npm run build

# Preview production build locally
npm run preview
```

## Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### TypeScript errors
- Check `src/types.ts` for interface definitions
- Ensure all imports are correct
- Use TypeScript strict mode for better error detection

### Styling issues
- Check `index.html` for Tailwind config
- Verify classes are valid Tailwind utilities
- Use browser DevTools to inspect styles

## Contact & Support

For questions about the refactored structure, refer to:
- `REFACTORING_SUMMARY.md` - Overview of changes
- `src/types.ts` - All type definitions
- `src/constants.ts` - All data structure
- Component files - Implementation examples
