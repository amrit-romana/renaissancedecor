import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Preloader } from "@/components/layout/Preloader";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Renaissance Decor | Master Artisans of Surface Design",
  description: "Bespoke Venetian Plaster, Micro Cement, and unique surface finishes. Based in Australia, executing internationally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xvi4mxs.css" />
      </head>
      <body suppressHydrationWarning className={`font-futura antialiased selection:bg-[var(--color-stone)] selection:text-[var(--color-charcoal)]`}>
        <SmoothScroll>
          <CustomCursor />
          <Preloader />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
