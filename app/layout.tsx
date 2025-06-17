import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers/page";

const font = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // All available weights
  subsets: ["latin"], // Optional: Define subsets as needed
});

export const metadata: Metadata = {
  title: "Fortinet.Shopping",
  description: "Your one click shop",
  icons: {
    icon: "/img/logo.webp", // Set logo as favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} antialiased`}>
      <head>
        <link rel="icon" href="/img/logo.webp" type="image/png" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
