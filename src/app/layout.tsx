import "@/styles/css/globals.css";
import "@/styles/css/media-quires.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "efuzone – The Best Web Hosting Solutions in Pakistan",
  description:
    "Affordable and reliable web hosting in Pakistan. We offer flexible hosting packages with fastest servers, 24/7 support, and 99.9% uptime guarantee.",
  keywords:
    "web hosting in pakistan, web hosting in karachi, web hosting services, domain hosting services, affordable web hosting, linux web hosting, shared web hosting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${openSans.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {" "}
        {children}
      </body>
    </html>
  );
}
