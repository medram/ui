# Getting started

## Install

```bash
pnpm add @medram/react-ui-kit
```

If you plan to use the Formik-ready field layer, install `formik` in the host app too.
## Add the Tailwind preset

```ts
import preset from "@medram/react-ui-kit/tailwind"

const config = {
  presets: [preset],
}

export default config
```

Host apps also need Tailwind content scanning for the packaged build output:

```ts
content: ["./node_modules/@medram/react-ui-kit/dist/**/*.{js,mjs}"]
```

## Load design tokens

Import the shared stylesheet once near the top of your app shell:

```ts
import "@medram/react-ui-kit/styles.css"
```

Skip this only if the host app already defines the same CSS variables.
## Import components

Use the root entrypoint for shared widgets and helpers:

```tsx
import { SubmitButton, Tabs } from "@medram/react-ui-kit"
```

Use subpaths when you want a narrower dependency boundary:

```tsx
import { InputField } from "@medram/react-ui-kit/fields"
import { Wizard } from "@medram/react-ui-kit/wizard"
import { Button } from "@medram/react-ui-kit/primitives"
```

For form-heavy screens, the clean default is:

- field components from `@medram/react-ui-kit/fields`
- shared helpers such as `SubmitButton` from `@medram/react-ui-kit`

## Upload and webcam flows

Components that access attachments require `CloudStorageProvider` from `@medram/react-ui-kit/cloud-storage`.

The modal webcam field is a special case:

- `WebcamImageUploader` needs `CloudStorageProvider`
- `WebcamImageUploadModal` needs `CloudStorageProvider` + `StackedModalsProvider` + Formik

```tsx
import { CloudStorageProvider } from "@medram/react-ui-kit/cloud-storage"

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <CloudStorageProvider value={{ /* app upload implementation */ }}>
      {children}
    </CloudStorageProvider>
  )
}
```

The provider contract is documented in the [cloud storage reference](/reference/cloud-storage).
