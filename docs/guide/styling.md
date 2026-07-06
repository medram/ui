# Styling

`@medram/react-ui-kit` exposes two styling hooks:

1. `@medram/react-ui-kit/tailwind` for Tailwind theme and plugin setup.
2. `@medram/react-ui-kit/styles.css` for the package CSS custom properties.

## Tailwind preset

Apply the preset before local overrides so your app can extend it deliberately:

```ts
import preset from "@medram/react-ui-kit/tailwind"

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

The stylesheet at `@medram/react-ui-kit/styles.css` provides the tokens used by the packaged components. Import it once in your app shell or global stylesheet.

If your host app already owns the same variables, keep a single source of truth and avoid importing both definitions.

## Scoped imports

The package supports focused imports to avoid pulling unrelated feature areas into callsites:

- `@medram/react-ui-kit/primitives`
- `@medram/react-ui-kit/fields`
- `@medram/react-ui-kit/charts`
- `@medram/react-ui-kit/modal`
- `@medram/react-ui-kit/wizard`
- `@medram/react-ui-kit/webcam`
- `@medram/react-ui-kit/time-picker`
- `@medram/react-ui-kit/cloud-storage`
