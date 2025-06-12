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
		<html lang="en">
			<body className="font-obviously antialiased">{children}</body>
		</html>
	);
}
