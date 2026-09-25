import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trend Ads — Creative Advertising & Digital Growth Agency",
    short_name: "Trend Ads",
    description:
      "Trend Ads is a premier creative advertising agency crafting bold digital products, brand systems, and performance marketing campaigns.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0c10",
    theme_color: "#8ACFF8",
    icons: [
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
