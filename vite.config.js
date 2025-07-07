import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { createHtmlPlugin } from "vite-plugin-html";

// Configurações básicas do site
const siteConfig = {
  title: "Psicóloga Pamela Sousa | CRP 17/7870",
  description:
    "Acolhimento profissional para saúde emocional - Ansiedade, Depressão e Terapia Online",
  canonicalUrl: "https://seusite.com", // Substitua pelo seu domínio real
};

export default defineConfig({
  plugins: [
    react(),
    // Otimização de imagens (WebP, compressão)
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 60 },
    }),
    // Injeção de tags SEO no HTML
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: siteConfig.title,
          description: siteConfig.description,
          canonical: siteConfig.canonicalUrl,
          // Meta tags adicionais
          metas: [
            {
              name: "keywords",
              content:
                "psicóloga, terapia online, ansiedade, depressão, psicoterapia",
            },
            {
              property: "og:title",
              content: siteConfig.title,
            },
            {
              property: "og:description",
              content: siteConfig.description,
            },
            {
              property: "og:type",
              content: "website",
            },
          ],
        },
      },
    }),
  ],
  build: {
    assetsInclude: [
      "**/*.png",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.webp",
      "**/*.avif",
    ],
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
      },
    },
  },
  server: {
    host: true, // Permite acesso via IP local
  },
});
