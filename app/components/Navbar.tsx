"use client";
import { Menu, Rocket, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => setIsOpen(!isOpen);

	const isActive = (path: string) => pathname === path;

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "Activities", path: "/activities" },
		{ name: "Gallery", path: "/gallery" },
		{ name: "Contact", path: "/contact" },
	];

	return (
		<nav className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					{/* Logo Section */}
					<div className="shrink-0 flex items-center">
						<Link href="/" className="flex items-center gap-2">
							<Image
								src={"/logo.png"}
								width={100}
								height={100}
								alt="Devrai Vidnyan Ashram Logo"
							/>
							<span className="font-display font-bold text-xl text-gray-900 tracking-tight">
								Devrai Vidnyan Ashram
							</span>
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.path}
								className={`font-medium transition-colors duration-200 ${
									isActive(link.path)
										? "text-primary font-bold"
										: "text-gray-600 hover:text-primary"
								}`}
							>
								{link.name}
							</Link>
						))}
						<Link
							href="/activities"
							className="bg-primary hover:bg-orange-700 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-sm"
						>
							Register Now
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="flex items-center md:hidden">
						<button
							onClick={toggleMenu}
							className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
							aria-label="Toggle menu"
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isOpen && (
				<div className="md:hidden bg-white border-t border-gray-100">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.path}
								onClick={() => setIsOpen(false)}
								className={`block px-3 py-3 rounded-md text-base font-medium ${
									isActive(link.path)
										? "bg-orange-50 text-primary"
										: "text-gray-700 hover:bg-gray-50 hover:text-primary"
								}`}
							>
								{link.name}
							</Link>
						))}
						<div className="pt-2">
							<Link
								href="/activities"
								onClick={() => setIsOpen(false)}
								className="block w-full text-center bg-primary text-white px-4 py-3 rounded-lg font-bold shadow-sm"
							>
								Register Now
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
