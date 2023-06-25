import { roboto } from "./fonts";
import "./globals.css";

export const metadata = {
    title: "Camp Phillip",
    description: "Camp Phillip",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
