export interface Event {
    id: string;
    title: string;
    slug: string;
    startDate: string;
    endDate: string;
    eligibility: string; // e.g., "Std 8th to 12th"
    description: string;
    registrationLink: string;
    imageUrl: string;
    isPast?: boolean;
}

export interface GalleryImage {
    id: string;
    url: string;
    title: string;
    category: "Camp" | "Competition" | "Other";
}

export interface ContactInfo {
    person: string;
    phone: string[];
    locations: {
        name: string;
        mapUrl: string; // Embed URL
    }[];
}
