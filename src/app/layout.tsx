import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Muth Farm Flowers",
	description: "Sustainably grown, fresh cut flowers for you or your special event or business.",
};

export const viewport: Viewport = {
	initialScale: 1,
	width: "device-width",
	maximumScale: 1
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className="bg-base-100 overflow-x-hidden" lang="en">
			<body >{children}</body>
		</html>
	);
}
