# Exports reference

## Root entrypoint

`@medram/ui` re-exports the most commonly reused fields and components:

- Field surface including `BasicImageUploaderField`, `DatePickerField`, `DateRangePickerField`, `InputField`, `MultiCheckBoxInputField`, `MultiSelectField`, `RadioGroupField`, `SelectField`, and `UploadField`.
- Shared components such as `AlertBox`, `AttachmentsPreview`, `Avatar`, `CardBox`, `CopyableButton`, `LoadingSection`, `ModalBox`, `Pagination`, `SubmitButton`, `Tabs`, `WizardCard`, and `WizardCompletion`.
- `WebcamImageUploader` for the uploader flow.
- Shared types from `src/types.ts`.

The root barrel also preserves the historical `DropdownBox` alias by mapping it to `DropdownBoxField`.

## Subpath entrypoints

### `@medram/ui/primitives`

Vendored shadcn primitives including accordion, alert, avatar, badge, button, calendar, card, chart, checkbox, dialog, dropdown menu, input, label, popover, radio group, select, separator, sheet, switch, table, tabs, textarea, and tooltip.

### `@medram/ui/fields`

Formik-oriented field wrappers and reusable inputs including combo boxes, drop zones, select inputs, upload inputs, date and time fields, checkbox variants, and attachment helpers.

### `@medram/ui/charts`

Area, bar, line, pie, radar, and stacked bar chart wrappers plus `BaseChartCard`.

### `@medram/ui/modal`

The stacked modal system exports the modal context, guard utilities, and hook helpers.

### `@medram/ui/wizard`

Exports `BaseWizard`, `Wizard`, `useWizardContext`, and the shared wizard types.

### `@medram/ui/webcam`

Exports image upload card, webcam capture, webcam modal, and the webcam image uploader.

### `@medram/ui/time-picker`

Exports the time picker surface.

### `@medram/ui/cloud-storage`

Exports `CloudStorageProvider`, `useCloudStorageContext`, and the provider types used by upload-aware components.
