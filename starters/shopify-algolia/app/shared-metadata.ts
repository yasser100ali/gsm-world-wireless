import { env } from "env.mjs"

export const sharedMetadata = {
  metadataBase: new URL(env.LIVE_URL || "https://commerce.blazity.com"),
  openGraph: {
    title: "GSM World USA | Cypress, CA",
    description: "Cell phones, computers, and accessories. GSM World USA — Cypress, CA.",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "GSM World USA | Cypress, CA",
    description: "Cell phones, computers, and accessories.",
    creator: "@gsmworldUSA",
    images: ["/opengraph-image.jpg"],
  },
}
