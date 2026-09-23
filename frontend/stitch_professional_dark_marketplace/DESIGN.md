---
name: Midnight Merchant
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bcc9c6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#879391'
  outline-variant: '#3d4947'
  surface-tint: '#6bd8cb'
  primary: '#6bd8cb'
  on-primary: '#003732'
  primary-container: '#29a195'
  on-primary-container: '#00302b'
  inverse-primary: '#006a61'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#ca8100'
  on-tertiary-container: '#3e2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is centered on "Sophisticated Commerce"—a philosophy that prioritizes trust, clarity, and a premium shopping experience. By utilizing a deep charcoal foundation, the interface recedes to allow high-quality product photography to command attention. 

The aesthetic combines **Modern Minimalism** with **Corporate Precision**. It avoids unnecessary decorative elements, favoring structural integrity and high-contrast information density. The emotional response should be one of reliability and exclusivity, ensuring users feel secure while navigating through high-value inventory.

## Colors

This design system utilizes a "Deep-Sea Teal" as the primary action color, chosen for its professional yet modern appeal. 

- **Primary (#0D9488):** Reserved for high-priority CTAs like "Add to Cart" or "Checkout."
- **Secondary (#94A3B8):** A muted Slate used for borders, icons, and secondary information to maintain low visual noise.
- **Tertiary (#F59E0B):** A "Golden Amber" used sparingly for trust indicators, ratings, and promotional highlights.
- **Neutral / Backgrounds:** The base is a Deep Charcoal (#121212). Successive layers use slightly lighter variants to denote elevation and hierarchy without relying solely on shadows.

## Typography

The typography system relies exclusively on **Inter** for its exceptional legibility on mobile screens and its neutral, systematic feel. 

- **Headlines:** Use a tighter letter-spacing and heavier weights to create a strong visual anchor. On mobile, `headline-lg` should scale down to 24px to ensure product titles do not wrap awkwardly.
- **Body:** Standardized at 16px for optimal readability in product descriptions. 
- **Labels:** Small labels use a slight tracking increase and uppercase transform to distinguish them from body text, ideal for categories or "In Stock" indicators.

## Layout & Spacing

This design system follows a **Fluid Grid** model optimized for mobile-first delivery. 

- **Mobile (0-599px):** 4-column grid with 16px side margins and 16px gutters. Components should generally span the full width of the available column space.
- **Tablet (600-1023px):** 8-column grid with 24px gutters.
- **Desktop (1024px+):** 12-column grid with a maximum content width of 1280px.

Spacing follows a 4px baseline. Use `md` (16px) for standard padding within cards and `lg` (24px) for vertical rhythm between sections.

## Elevation & Depth

To maintain a "Professional Dark" look, the design system avoids heavy, blurry shadows. Instead, it uses **Tonal Layering** combined with sharp, low-opacity strokes.

1.  **Level 0 (Base):** #121212.
2.  **Level 1 (Cards/Surface):** #1E1E1E with a 1px solid border of #2D2D2D.
3.  **Level 2 (Modals/Popovers):** #2D2D2D with a subtle ambient shadow (0px 8px 24px rgba(0,0,0,0.5)).

Interactive elements like buttons use a "Glow" effect rather than a shadow; when hovered or active, they emit a soft 8px blur of the primary teal color.

## Shapes

The design system uses a **Soft (0.25rem)** roundedness approach. This choice strikes a balance between the precision of sharp edges and the approachability of rounded corners.

- **Small Components:** Checkboxes and small tags use `rounded-sm` (2px).
- **Standard Components:** Buttons and Input fields use `rounded` (4px).
- **Large Components:** Product cards and image containers use `rounded-lg` (8px).
- **Special Elements:** Search bars may use a pill-shape for distinctiveness, but primary UI elements remain consistently architectural.

## Components

### Buttons
- **Primary:** Background color #0D9488, white text, 4px corner radius. No border.
- **Secondary:** Transparent background, #94A3B8 border (1px), #94A3B8 text.
- **Ghost:** No background or border, #94A3B8 text, used for "Cancel" or minor actions.

### Input Fields
Inputs use the #1E1E1E surface color with a 1px border of #2D2D2D. The label should be `label-md`. On focus, the border transitions to #0D9488.

### Product Cards
Cards feature a #1E1E1E background. Product images should have a `rounded-lg` top-corner treatment. Prices are displayed in `headline-md` weight using the primary teal color to draw the eye.

### Chips & Badges
Used for categories or status (e.g., "New Arrival"). These should have minimal padding (4px 12px) and use `label-sm` typography.

### Lists
List items should be separated by a 1px divider of #2D2D2D. Use 16px padding to ensure touch targets are accessible for mobile users.