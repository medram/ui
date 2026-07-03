# Getting started

## Install

```bash
npm install @medram/ui
```

## Add the Tailwind preset

```ts
import preset from "@medram/ui/tailwind"

const config = {
  presets: [preset],
}

export default config
```

Host apps also need Tailwind content scanning for the packaged build output:

```ts
content: ["./node_modules/@medram/ui/dist/**/*.{js,mjs}"]
```

## Load design tokens

Import the shared stylesheet once near the top of your app shell:

```ts
import "@medram/ui/styles.css"
```

Skip this only if the host app already defines the same CSS variables.

## Import components

Use the root entrypoint for the shared surface:

```tsx
import { InputField, SubmitButton } from "@medram/ui"
```

Use subpaths when you want a narrower dependency boundary:

```tsx
import { Wizard } from "@medram/ui/wizard"
import { Button } from "@medram/ui/primitives"
```

## Upload and webcam flows

Components that access attachments require `CloudStorageProvider` from `@medram/ui/cloud-storage`.

```tsx
import { CloudStorageProvider } from "@medram/ui/cloud-storage"

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <CloudStorageProvider value={{ /* app upload implementation */ }}>
      {children}
    </CloudStorageProvider>
  )
}
```

The provider contract is documented in the [cloud storage reference](/reference/cloud-storage).
