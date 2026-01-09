"use client";
import React, { useState } from "react";
import { GALLERY_IMAGES } from "@/constants";
import Image from "next/image";

const Gallery: React.FC = () => {
	const [filter, setFilter] = useState<"All" | "Camp" | "Competition">("All");

	const filteredImages =
		filter === "All"
			? GALLERY_IMAGES
			: GALLERY_IMAGES.filter((img) => img.category === filter);

	const filters: ("All" | "Camp" | "Competition")[] = [
		"All",
		"Camp",
		"Competition",
	];

	return (
		<div className="min-h-screen bg-white">
			<div className="bg-warm-gray py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="font-display font-bold text-4xl text-gray-900 mb-4">
						Photo Gallery
					</h1>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg">
						A glimpse into the life at Devrai Vidnyan Ashram.
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Filter Controls */}
				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{filters.map((f) => (
						<button
							key={f}
							onClick={() => setFilter(f)}
							className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
								filter === f
									? "bg-primary text-white shadow-md transform scale-105"
									: "bg-gray-100 text-gray-600 hover:bg-gray-200"
							}`}
						>
							{f}
						</button>
					))}
				</div>

				{/* Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{filteredImages.map((image) => (
						<div
							key={image.id}
							className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
						>
							<Image
								src={image.url}
								alt={image.title}
								fill
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								loading="lazy"
							/>
							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
								<div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
									<p className="text-white font-medium text-sm md:text-base">
										{image.title}
									</p>
									<span className="text-white/80 text-xs uppercase tracking-wider">
										{image.category}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>

				{filteredImages.length === 0 && (
					<div className="text-center py-12">
						<p className="text-gray-500">No photos found in this category.</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Gallery;
