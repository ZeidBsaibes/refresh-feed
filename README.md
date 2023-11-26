This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## please add the .env file I have provided in a separate link when submitting this repo to BrainStation

## Database

The DB is PostGres and hosted on the Vercel Platform, there is only only databse environment

## Authentication

All required authentication information is within env

Next Auth has been used for authentication

GitHub and Google have been configured to allow Localhost:3000 to use these providers as well as refreshfeed.com

There is a public maxbox token. MapBox has also been configured to run on refreshfeed.com and localhost:3000
