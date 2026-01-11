import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-display",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

export const metadata: Metadata = {
    title: "Vedic Brew | Premium Organic Tea",
    description: "Experience the essence of nature with Vedic Brew's premium organic tea collection.",
    generator: "Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
            <body className={`${playfair.variable} ${inter.variable} antialiased bg-base-100 font-body`}>
                {children}
            </body>
        </html>
    );
}
