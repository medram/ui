---
layout: home
title: "@medram/ui"
titleTemplate: false
hero:
  name: "@medram/ui"
  text: Reusable shadcn/ui building blocks for React and Next.js
  tagline: Component primitives, form fields, charts, modal and wizard helpers, webcam upload flows, and shared design tokens.
  actions:
    - theme: brand
      text: Get started
      link: /guide/getting-started
    - theme: alt
      text: API reference
      link: /reference/exports
features:
  - title: Broad surface area
    details: Root exports cover the commonly reused components, while focused subpaths keep larger feature areas isolated.
  - title: Tailwind-ready
    details: The package ships a Tailwind preset and CSS tokens so host apps can adopt the same design system quickly.
  - title: Integration helpers
    details: Upload, attachment, and webcam flows share a cloud storage context instead of requiring app-specific wiring in every component.
---

## Included modules

- `@medram/ui` for the root barrel.
- `@medram/ui/primitives` for vendored shadcn primitives.
- `@medram/ui/fields` for Formik-oriented inputs and field wrappers.
- `@medram/ui/charts` for Recharts wrappers.
- `@medram/ui/modal` for the stacked modal system.
- `@medram/ui/wizard` for wizard state and navigation.
- `@medram/ui/webcam` for webcam capture and upload helpers.
- `@medram/ui/time-picker` for the time picker surface.
- `@medram/ui/cloud-storage` for upload context wiring.

Start with the [getting started guide](/guide/getting-started), then use the [exports reference](/reference/exports) to pick the correct entrypoint.
