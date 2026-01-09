"use client";

import { useEffect } from "react";
import { useContentStore } from "@/store/contentStore";
import { ArrowRight, Leaf, AtomIcon, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EventCard from "./components/EventCard";
import LoadingSkeleton from "./components/LoadingSkeleton";

export default function Home() {
	const { events, fetchEvents, eventsLoading } = useContentStore();

	useEffect(() => {
		fetchEvents();
	}, [fetchEvents]);

	const latestEvents = events.filter((e) => !e.isPast).slice(0, 3);

	return (
		<div className="animate-in fade-in duration-500">
			{/* Hero Section */}
			<section className="relative h-[80vh] min-h-125 flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="/hero.jpg"
						alt="Nature Background"
						fill={true}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-linear-to-r from-gray-900/80 to-gray-900/40"></div>
				</div>

				<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
					<h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
						Discover Science in the <br />{" "}
						<span className="text-primary">Heart of Nature</span>
					</h1>
					<p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
						Join Devrai Vidnyan Ashram for immersive camps, competitions, and
						activities designed to spark curiosity in young minds.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/activities"
							className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
						>
							Explore Camps <ArrowRight className="h-5 w-5" />
						</Link>
						<Link
							href="/contact"
							className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-colors flex items-center justify-center"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</section>

			{/* About Snippet */}
			<section className="py-16 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
							About the Ashram
						</h2>
						<div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6"></div>
						<p className="text-gray-600 text-lg leading-relaxed">
							Located in the scenic landscapes of{" "}
							<span className="font-semibold text-secondary">Devrukh</span> and{" "}
							<span className="font-semibold text-secondary">Sangameshwar</span>
							, Devrai Vidnyan Ashram is an educational institute dedicated to
							bridging the gap between textbook learning and real-world
							observation. We conduct camps for students from Std 8th to 12th.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="p-8 bg-warm-gray rounded-2xl text-center hover:bg-orange-50 transition-colors duration-300">
							<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
								{/* Lucide React Icon */}
								<Leaf size={32} />
							</div>
							<h3 className="font-display font-bold text-xl mb-3">
								Nature Trails
							</h3>
							<p className="text-gray-600">
								Explore the biodiversity of the Konkan region with guided tours.
							</p>
						</div>
						<div className="p-8 bg-warm-gray rounded-2xl text-center hover:bg-teal-50 transition-colors duration-300">
							<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-secondary">
								<AtomIcon size={32} />
							</div>
							<h3 className="font-display font-bold text-xl mb-3">
								Science Experiments
							</h3>
							<p className="text-gray-600">
								Hands-on physics and chemistry workshops outside the classroom.
							</p>
						</div>
						<div className="p-8 bg-warm-gray rounded-2xl text-center hover:bg-orange-50 transition-colors duration-300">
							<div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
								<Palette size={32} />
							</div>
							<h3 className="font-display font-bold text-xl mb-3">
								Art & Competitions
							</h3>
							<p className="text-gray-600">
								Painting and elocution competitions to foster creativity.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Latest Updates */}
			<section className="py-16 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
						<div>
							<h2 className="font-display font-bold text-3xl text-gray-900 mb-2">
								Upcoming Activities
							</h2>
							<p className="text-gray-500">
								Don&apos;t miss out on our latest summer camps and workshops.
							</p>
						</div>
						<Link
							href="/activities"
							className="text-primary font-bold hover:text-orange-700 flex items-center gap-1"
						>
							View All <ArrowRight className="h-4 w-4" />
						</Link>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{eventsLoading ? (
							<LoadingSkeleton variant="card" count={3} />
						) : (
							latestEvents.map((event) => (
								<EventCard key={event.id} event={event} />
							))
						)}
					</div>
				</div>
			</section>
		</div>
	);
}
