import type { Metadata } from "next";
import "@/styles/globals.css";
import { AppLayout } from "@/components/layout/app-layout";
import { ThemeProvider } from "@/context/theme-context";

export const metadata: Metadata = {
    title: "Sirius UNAB",
    description: "Plataforma estudiantil UNAB",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className="antialiased">
                <ThemeProvider>
                    <AppLayout>{children}</AppLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
