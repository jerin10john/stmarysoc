# Scroll Behavior Fix

This folder contains utilities to fix the scroll behavior when navigating between pages in our React Router application.

## The Problem

By default, React Router preserves the scroll position when navigating between routes. This means if you're scrolled halfway down a page and click a link to another page, the new page will also be scrolled to that same position instead of starting at the top.

## The Solution

We've implemented several utilities to ensure proper scroll behavior:

1. `ScrollToTop` component - Automatically scrolls to the top when routes change
2. `ScrollLink` component - Custom Link component with built-in scroll reset
3. Scroll utility functions - Helpers for scroll management

## How to Use

### 1. The ScrollToTop Component

This component is already added to `App.tsx`. It automatically scrolls to the top whenever the route changes:

```jsx
<Router>
  <ScrollToTop />
  <Routes>
    {/* Routes here */}
  </Routes>
</Router>
```

### 2. Using ScrollLink Instead of Link

Replace React Router's `Link` component with our custom `ScrollLink` for automatic scroll behavior:

```jsx
import ScrollLink from '../components/ScrollLink';

// Instead of this:
<Link to="/about">About</Link>

// Use this:
<ScrollLink to="/about">About</ScrollLink>
```

### 3. Using Scroll Utilities

For more control, use the utility functions directly:

```jsx
import { scrollToTop, handleLinkClick, scrollToElement } from '../utils/scrollUtils';

// Scroll to top programmatically
scrollToTop();

// With smooth scrolling
scrollToTop(true);

// Create a click handler that scrolls to top
<Link to="/about" onClick={handleLinkClick()}>About</Link>

// Scroll to a specific element
scrollToElement('section-id', true, 80); // smooth scroll with 80px offset
```

## Best Practices

1. Use `ScrollLink` whenever possible for consistent behavior
2. For third-party components that use anchor tags, add the `handleLinkClick` function
3. For programmatic navigation, call `scrollToTop()` after navigation

## Implementation Details

- `ScrollToTop` uses React Router's `useLocation` hook to detect route changes
- `handleLinkClick` preserves modifier key behavior (ctrl/cmd+click to open in new tab)
- All utilities are fully typed with TypeScript