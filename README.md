This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What This Isn't
- No backend
- No database
- No authentication
- No payment processing

## What This Is
- Proof-of-concept walkthrough showing a reimagined version of the RetailReady app for desktop.

## High-Level Overview
All product descriptions courtesy of GPT-4o!

### Define Data Format
CSV File (productInstructions.csv):
```
product,category,instruction
"Chemical Cleaner","Chemical-Containing Products","Use strong, leak-proof containers. Place absorbent materials around the product inside the carton."
"LED Light Bulb","Light Bulbs","Wrap each light bulb in bubble wrap or foam. Use dividers inside the carton to prevent bulbs from touching."
"Cooking Oil","Food Products","Use food-grade packaging materials. Ensure airtight sealing to prevent contamination."
"Lithium Battery","Batteries","Place each battery in a plastic bag. Use dividers to separate batteries inside the carton."
"Smartphone","Electronics","Wrap each electronic item in anti-static bubble wrap. Use foam inserts to secure the items in the carton."
"Hairspray","Aerosol Dispensed Products","Use strong, leak-proof containers. Place absorbent materials around the product inside the carton."
"Propane Canister","Fuels/Gases","Use approved, leak-proof containers. Secure containers upright inside the carton."
...
```

### Predefined Order Format:

Example Order
Order ID: 1001
Product: LED Light Bulb
- Category: Light Bulbs
- Count: 4
- Instruction: Wrap each light bulb in bubble wrap or foam. Use dividers inside the carton to prevent bulbs from touching.
- Description: Energy-efficient LED light bulbs, pack of 4.
- Price: $12.99
- Weight: 1.2 lbs
Product: Tennis Racket
- Category: Sporting Goods
- Count: 1
- Instruction: Use a sturdy box. Add cushioning materials to protect the racket frame.
- Description: High-quality tennis racket for professional players.
- Price: $129.99
- Weight: 0.6 lbs
Pallets:
- Pallet ID: P001
Products: LED Light Bulb (4), Tennis Racket (1)
*Exceptions (text / img): None*

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Multi-Step Form Credits
Of great help to this project was the multi-step shadcn form component [@barcaca](https://github.com/barcaca) for the [Multi-Step Form](https://github.com/barcaca/multi-step-form/tree/master) project.

