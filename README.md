# @medram/react-ui-kit

Reusable shadcn/ui component library for React and Next.js applications.

## Install

```bash
pnpm add @medram/react-ui-kit
```

## Links

- Source: `https://github.com/medram/react-ui-kit`
- Docs: `https://medram.github.io/react-ui-kit/`
- Issues: `https://github.com/medram/react-ui-kit/issues`

## Documentation

- Repo docs source: `docs/`
- Published site: `https://medram.github.io/react-ui-kit/`
- Local preview: `pnpm docs:dev`

## Tailwind setup

Import the preset and add it to `presets`:

```ts
import preset from "@medram/react-ui-kit/tailwind"

const config = {
  presets: [preset],
}

export default config
```

Consumers also need Tailwind content scanning for the package build output:

```ts
content: [
  "./node_modules/@medram/react-ui-kit/dist/**/*.{js,mjs}",
]
```

## Design tokens

Import `@medram/react-ui-kit/styles.css` once unless your host app already defines the same CSS variables.

## Available subpaths

- `.`
- `./fields`
- `./modal`
- `./primitives`
- `./charts`
- `./wizard`
- `./webcam`
- `./time-picker`
- `./cloud-storage`
- `./tailwind`
- `./styles.css`

## Cloud storage

Upload and webcam components that access attachments require `CloudStorageProvider` from `@medram/react-ui-kit/cloud-storage`.

## License

No license has been granted for this package. Use requires permission from the package owner.
