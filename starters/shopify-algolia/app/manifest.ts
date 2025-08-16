import { MetadataRoute } from "next"

import {sharedMetadata} from "./shared-metadata"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GSM World USA | Cypress, CA",
    short_name: "GSM World USA",
    description: sharedMetadata.openGraph.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
