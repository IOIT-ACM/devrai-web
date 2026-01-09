"use client";

import React, { useEffect } from "react";
import { Phone, MapPin, Mail, User } from "lucide-react";
import { useContentStore } from "@/store/contentStore";
import LoadingSkeleton from "../../components/LoadingSkeleton";

const Contact: React.FC = () => {
	const { contactInfo, fetchContact, contactLoading } = useContentStore();

	useEffect(() => {
		fetchContact();
	}, [fetchContact]);

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="bg-primary py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="font-display font-bold text-4xl text-white mb-4">
						Get in Touch
					</h1>
					<p className="text-orange-100 max-w-2xl mx-auto text-lg">
						Have questions about eligibility or dates? Reach out to us directly.
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-20">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Contact Info Card */}
					<div className="bg-white rounded-xl shadow-lg p-8 h-fit lg:col-span-1 border-t-4 border-secondary">
						<h2 className="font-display font-bold text-2xl text-gray-900 mb-6">
							Contact Details
						</h2>

						{contactLoading ? (
							<LoadingSkeleton variant="contact" count={3} />
						) : (
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="bg-orange-100 p-3 rounded-full text-primary">
										<User className="h-6 w-6" />
									</div>
									<div>
										<h3 className="font-bold text-gray-900">Coordinator</h3>
										<p className="text-gray-600">{contactInfo.person}</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-teal-100 p-3 rounded-full text-secondary">
										<Phone className="h-6 w-6" />
									</div>
									<div>
										<h3 className="font-bold text-gray-900">Phone</h3>
										{contactInfo.phone.map((phone) => (
											<p key={phone} className="text-gray-600">
												{phone}
											</p>
										))}
										<p className="text-xs text-gray-400 mt-1">
											Available 9 AM - 6 PM
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="bg-orange-100 p-3 rounded-full text-primary">
										<Mail className="h-6 w-6" />
									</div>
									<div>
										<h3 className="font-bold text-gray-900">Email</h3>
										<p className="text-gray-600">info@devraiashram.org</p>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Maps Section */}
					<div className="lg:col-span-2 space-y-8">
						{contactInfo.locations.map((loc, index) => (
							<div
								key={index}
								className="bg-white rounded-xl shadow-md overflow-hidden"
							>
								<div className="p-4 bg-gray-100 border-b border-gray-200 flex items-center gap-2">
									<MapPin className="text-primary h-5 w-5" />
									<h3 className="font-bold text-gray-800">{loc.name}</h3>
								</div>
								<div className="h-64 w-full bg-gray-200 relative">
									<iframe
										src={loc.mapUrl}
										width="100%"
										height="100%"
										style={{ border: 0 }}
										allowFullScreen
										loading="lazy"
										title={`Map of ${loc.name}`}
									></iframe>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
