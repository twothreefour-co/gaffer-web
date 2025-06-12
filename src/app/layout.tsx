import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
	title: "Gaffer",
	description: "Gaffer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			<body className="font-obviously antialiased">{children}</body>
		</html>
	);
}
