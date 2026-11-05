# Staffing for CPA

A standard Next.js App Router website using DaisyUI, Tailwind CSS 4, Embla Carousel, Prisma 7, PostgreSQL, Lucide and React Icons. Each page has its own route in `app/`.

## Run locally (Windows / VS Code)

Install Node.js 22 or newer. In the folder containing `package.json`, run:

```powershell
npm install
npm run db:generate
npm run dev
```

Open http://localhost:3000. The website pages can be previewed without PostgreSQL. Contact and consultation submissions need the database steps below. Sample prices, phone, WhatsApp and email are placeholders. Floating contact buttons link to the contact page until real numbers are supplied.

## Enable the forms

1. Create a PostgreSQL database named `staffing_for_cpa`.
2. Copy `.env.example` to `.env` and replace the password and other connection values with your own. Do not share or commit `.env`.
3. Apply the migration:

```powershell
npx prisma migrate deploy
```

4. Restart `npm run dev`. Submissions will be stored in the `ConsultationRequest` table, with the `kind` field distinguishing the two forms. To view records locally, run `npx prisma studio`.

The forms store submissions; they do not send email notifications. A production deployment needs a real PostgreSQL connection, spam/rate-limiting protection, appropriate privacy/retention policies, monitored contact details and secure transport. Do not collect confidential client documents through these forms. API requests return an error when the database is not configured; they never claim success without storing the record.

## Production

```powershell
npm run build
npm run start
```

Set `DATABASE_URL` securely in the hosting provider and apply the migrations before accepting requests. The example pricing is illustrative and must be replaced with your approved offer.

## Images and service pages

The three locally bundled stock photos are from Unsplash: office (photo-1497366811353-6870744d04b2), team (photo-1521737711867-e3b97375f902), and workspace (photo-1497366754035-f200968a6e72). Replace these files in `public/images/` when desired. The homepage uses an Embla slider; About and How It Works use background images. Each service has its own route under `app/services/`; detailed copy is maintained in `lib/service-details.ts`, and their common page structure is in `components/ServiceDetail.tsx`.

## Editing the design

- `app/globals.css`: DaisyUI color theme and basic page defaults.
- `app/<page>/page.tsx`: content and Tailwind classes for each main page.
- `lib/service-details.ts`: editable text for the five detailed service pages.
- `components/ServiceDetail.tsx`: shared layout for service details.
- `components/Header.tsx` and `components/Footer.tsx`: navigation and footer used on every page.

The project uses Tailwind utility classes and DaisyUI components for page styling. There is no separate global stylesheet for page layouts.
# staffingforcpa
