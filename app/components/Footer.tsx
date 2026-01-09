import { CONTACT_INFO } from "@/constants";
import { Mail, MapPin, Phone, Rocket } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-900 text-white pt-12 pb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Brand */}
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<Rocket className="h-6 w-6 text-secondary" />
							<span className="font-display font-bold text-xl">
								Devrai Vidnyan Ashram
							</span>
						</div>
						<p className="text-gray-400 text-sm leading-relaxed max-w-xs">
							Inspiring the next generation of scientists and artists through
							nature-based learning in the heart of Ratnagiri.
						</p>
					</div>

					{/* Quick Links (Implicit via layout) & Contact */}
					<div className="space-y-4">
						<h3 className="font-display font-bold text-lg text-secondary">
							Contact Us
						</h3>
						<ul className="space-y-3">
							<li className="flex items-start gap-3 text-gray-300">
								<Phone className="h-5 w-5 text-primary shrink-0" />
								<div className="flex flex-col">
									{CONTACT_INFO.phone.map((p) => (
										<span key={p}>{p}</span>
									))}
								</div>
							</li>
							<li className="flex items-start gap-3 text-gray-300">
								<MapPin className="h-5 w-5 text-primary shrink-0" />
								<span>Devrukh & Sangameshwar, Ratnagiri</span>
							</li>
							<li className="flex items-center gap-3 text-gray-300">
								<Mail className="h-5 w-5 text-primary shrink-0" />
								<span>info@devraiashram.org</span>
							</li>
						</ul>
					</div>

					{/* Newsletter / CTA */}
					<div className="space-y-4">
						<h3 className="font-display font-bold text-lg text-secondary">
							Stay Updated
						</h3>
						<p className="text-gray-400 text-sm">
							Get the latest updates on camps and competitions.
						</p>
						<div className="flex">
							<input
								type="email"
								placeholder="Enter email"
								className="bg-gray-800 text-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-secondary"
							/>
							<button className="bg-primary hover:bg-orange-700 px-4 py-2 rounded-r-md transition-colors font-medium">
								Join
							</button>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
					<p>
						© {new Date().getFullYear()} Devrai Vidnyan Ashram. All rights
						reserved.
					</p>
					<p className="mt-2 text-xs">
						Developed by AISSMS IOIT ACM Student Chapter
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
