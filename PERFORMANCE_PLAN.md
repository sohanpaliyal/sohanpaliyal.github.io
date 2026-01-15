# Performance Optimization Plan

This document outlines the strategy to ensure the portfolio website is fully performant, responsive, and provides an excellent user experience.

## 1. Animation & Interaction Optimization
-   **Reduce Tilt Effect**: The 3D tilt effect on cards has been optimized to be subtle (max angle 3° instead of 10°). This reduces the GPU load during hover interactions and provides a more professional feel.
    -   *Status*: Completed for `ProjectCard` and `BlogCard`.
-   **Optimize Framer Motion**: Ensure `whileInView` only triggers once (`viewport={{ once: true }}`) for non-hero animations to avoid repeated heavy calculations on scroll.

## 2. Code Splitting & Lazy Loading
-   **Lazy Load 3D Canvases**: The heaviest components are the 3D Fiber canvases (`Earth`, `Stars`, `Computers`, `Ball`). These are already dynamically imported with `ssr: false`, which is excellent.
    -   *Action*: Verify all new heavy components follow this pattern.
-   **Route-Based Splitting**: Next.js automatically splits code by route. Ensure shared components are not bloated.

## 3. Image Optimization
-   **Next/Image Usage**: All images are served using `next/image` with the `fill` prop or explicit dimensions.
-   **WebP/AVIF Formats**: Ensure the Next.js config allows modern formats (default in newer versions).
-   **Responsive Sizes**: Add `sizes` prop to `Image` components (e.g., `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`) to ensure the browser loads the correct resolution.

## 4. Bundle Optimization
-   **Analyzer**: Use `@next/bundle-analyzer` to identify large dependencies.
-   **Tree Shaking**: Ensure icons (Lucide/React-icons) are tree-shaken correctly (importing from specific subpaths if needed, though modern bundlers handle this well).

## 5. Web Vitals Focus
-   **LCP (Largest Contentful Paint)**: Optimize the Hero image/text load.
-   **CLS (Cumulative Layout Shift)**: Ensure text elements have fixed heights or containers (like the new `Typewriter` fix) to prevent shifts.
-   **INP (Interaction to Next Paint)**: Minimizing main thread blocking tasks.

## 6. Accessibility & Best Practices
-   **Semantic HTML**: Continue using proper semantic tags (`section`, `article`, `nav`) for better SEO and accessibility.
-   **Contrast**: Ensure all text meets constant ratios (already improved in Contact section).

## 7. Next Steps
1.  **Audit**: Run Lighthouse/PageSpeed Insights on the production build.
2.  **Refine**: Tweaking `sizes` for images based on audit.
3.  **Monitor**: Use `vercel analytics` or similar to track real-world performance.
