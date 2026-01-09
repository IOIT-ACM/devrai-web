import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const quicksand = Quicksand({
	variable: "--font-quicksand",
	subsets: ["latin"],
});
const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Devrai Vidnyan Ashram",
	description: `Devrai Vidnyan Ashram is an educational institute located in Devrukh and Sangameshwar
(Ratnagiri) that conducts science camps, painting competitions, and reading groups for students (Std
8th to 12th)`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${quicksand.variable} ${inter.variable} antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
