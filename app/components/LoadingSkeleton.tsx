import React from "react";

interface LoadingSkeletonProps {
	variant?: "card" | "image" | "text" | "contact";
	count?: number;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
	variant = "card",
	count = 1,
}) => {
	const skeletons = Array.from({ length: count }, (_, i) => i);

	if (variant === "card") {
		return (
			<>
				{skeletons.map((i) => (
					<div
						key={i}
						className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse"
					>
						<div className="h-48 bg-gray-200" />
						<div className="p-6 space-y-3">
							<div className="h-4 bg-gray-200 rounded w-1/4" />
							<div className="h-6 bg-gray-200 rounded w-3/4" />
							<div className="h-4 bg-gray-200 rounded w-full" />
							<div className="h-4 bg-gray-200 rounded w-2/3" />
						</div>
					</div>
				))}
			</>
		);
	}

	if (variant === "image") {
		return (
			<>
				{skeletons.map((i) => (
					<div
						key={i}
						className="aspect-square bg-gray-200 rounded-xl animate-pulse"
					/>
				))}
			</>
		);
	}

	if (variant === "contact") {
		return (
			<div className="space-y-6 animate-pulse">
				{skeletons.map((i) => (
					<div key={i} className="flex items-start gap-4">
						<div className="w-12 h-12 bg-gray-200 rounded-full" />
						<div className="flex-1 space-y-2">
							<div className="h-4 bg-gray-200 rounded w-24" />
							<div className="h-4 bg-gray-200 rounded w-32" />
						</div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className="space-y-2 animate-pulse">
			{skeletons.map((i) => (
				<div key={i} className="h-4 bg-gray-200 rounded w-full" />
			))}
		</div>
	);
};

export default LoadingSkeleton;
