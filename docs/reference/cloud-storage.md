# Cloud storage

Upload-aware components in `@medram/ui` depend on a shared cloud storage context instead of coupling directly to an app-specific API layer.

## Import

```tsx
import {
  CloudStorageProvider,
  useCloudStorageContext,
  type CloudStorageContextValue,
  type UploadFileOptions,
} from "@medram/ui/cloud-storage"
```

## Provider

Wrap any subtree that renders attachment, upload, or webcam components:

```tsx
<CloudStorageProvider value={cloudStorageValue}>
  <YourFeature />
</CloudStorageProvider>
```

`cloudStorageValue` must satisfy `CloudStorageContextValue`.

## Consumer access

Custom app code can read the same provider with `useCloudStorageContext()` when it needs to coordinate uploads with package components.

## When it is required

Use the provider whenever you render components that talk to attachments or uploaded media. Pure layout primitives, fields that do not upload files, and chart or modal helpers do not require it.
