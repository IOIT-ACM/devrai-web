import React from "react";
import EventCard from "../../components/EventCard";
import { EVENTS } from "@/constants";

const Activities: React.FC = () => {
	const upcomingEvents = EVENTS.filter((e) => !e.isPast);
	const pastEvents = EVENTS.filter((e) => e.isPast);

	return (
		<div className="min-h-screen bg-gray-50 pb-20">
			{/* Header */}
			<div className="bg-secondary py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="font-display font-bold text-4xl text-white mb-4">
						Activities & Camps
					</h1>
					<p className="text-teal-100 max-w-2xl mx-auto text-lg">
						Browse our scheduled events for this season. Registration is open
						for upcoming camps!
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
				{/* Upcoming Section */}
				<div className="mb-16">
					<div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-l-4 border-primary">
						<h2 className="text-2xl font-bold font-display text-gray-800">
							Upcoming Events
						</h2>
					</div>

					{upcomingEvents.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{upcomingEvents.map((event) => (
								<EventCard key={event.id} event={event} />
							))}
						</div>
					) : (
						<div className="text-center py-12 bg-white rounded-xl shadow-sm">
							<p className="text-gray-500 text-lg">
								No upcoming events scheduled at the moment. Please check back
								later!
							</p>
						</div>
					)}
				</div>

				{/* Past Section */}
				{pastEvents.length > 0 && (
					<div>
						<div className="bg-white rounded-xl shadow-sm p-6 mb-8 border-l-4 border-gray-400">
							<h2 className="text-2xl font-bold font-display text-gray-800">
								Past Events
							</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80">
							{pastEvents.map((event) => (
								<EventCard key={event.id} event={event} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Activities;
