import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
	title: "Article Preview Component - Frontend Mentor",
	description: "Created with Next.js, Tailwind CSS and TypeScript",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={manrope.className}>{children}</body>
		</html>
	);
}
