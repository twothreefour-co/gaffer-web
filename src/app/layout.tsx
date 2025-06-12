import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Gaffer",
	description: "Play fantasy football based on real matches. Join contests and cash out instantly",
	openGraph: {
		title: "Gaffer",
		description: "Play fantasy football based on real matches. Join contests and cash out instantly",
		images: "/icon.png",
		siteName: "Gaffer",
		type: "website",
	},
	icons: {
		icon: "/icon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			<body className="font-obviously antialiased bg-black">{children}</body>
		</html>
	);
}
