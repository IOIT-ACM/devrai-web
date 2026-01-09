import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Event } from "@/types";
import Image from "next/image";

interface EventCardProps {
	event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
	return (
		<div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full border border-gray-100">
			<div className="relative h-48 overflow-hidden">
				<Image
					src={event.imageUrl}
					alt={event.title}
					className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
					fill
				/>
				<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
					{event.eligibility}
				</div>
			</div>

			<div className="p-6 flex flex-col grow">
				<h3 className="font-display font-bold text-xl text-gray-900 mb-2">
					{event.title}
				</h3>

				<div className="flex items-center gap-2 text-sm text-secondary font-medium mb-4">
					<Calendar className="h-4 w-4" />
					<span>
						{event.startDate} to {event.endDate}
					</span>
				</div>

				<p className="text-gray-600 text-sm leading-relaxed mb-6 grow">
					{event.description}
				</p>

				<div className="mt-auto">
					{event.isPast ? (
						<button
							disabled
							className="w-full bg-gray-200 text-gray-500 py-3 rounded-lg font-medium cursor-not-allowed"
						>
							Event Ended
						</button>
					) : (
						<a
							href={event.registrationLink}
							target="_blank"
							rel="noreferrer"
							className="w-full inline-flex justify-center items-center gap-2 bg-primary hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors"
						>
							Register Now <ArrowRight className="h-4 w-4" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default EventCard;
