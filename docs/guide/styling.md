# Styling

`@medram/ui` exposes two styling hooks:

1. `@medram/ui/tailwind` for Tailwind theme and plugin setup.
2. `@medram/ui/styles.css` for the package CSS custom properties.

## Tailwind preset

Apply the preset before local overrides so your app can extend it deliberately:

```ts
import preset from "@medram/ui/tailwind"

const config = {
  presets: [preset],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(var(--primary))",
        },
      },
    },
  },
}

export default config
```

## CSS variables

The stylesheet at `@medram/ui/styles.css` provides the tokens used by the packaged components. Import it once in your app shell or global stylesheet.

If your host app already owns the same variables, keep a single source of truth and avoid importing both definitions.

## Scoped imports

The package supports focused imports to avoid pulling unrelated feature areas into callsites:

- `@medram/ui/primitives`
- `@medram/ui/fields`
- `@medram/ui/charts`
- `@medram/ui/modal`
- `@medram/ui/wizard`
- `@medram/ui/webcam`
- `@medram/ui/time-picker`
- `@medram/ui/cloud-storage`
