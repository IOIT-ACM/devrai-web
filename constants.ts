import { ContactInfo, Event, GalleryImage } from "@/types";

export const EVENTS: Event[] = [
    {
        id: "1",
        title: "Summer Science Camp 2026",
        slug: "summer-science-camp-2026",
        startDate: "2026-05-10",
        endDate: "2026-05-15",
        eligibility: "Std 8th to 12th",
        description:
            "A 5-day immersive camp focusing on practical physics, chemistry experiments, and nature trails. Students will learn through hands-on activities.",
        registrationLink: "#",
        imageUrl: "https://picsum.photos/id/20/800/600",
        isPast: false,
    },
    {
        id: "2",
        title: "Nature Reading Group",
        slug: "nature-reading-group",
        startDate: "2026-04-05",
        endDate: "2026-04-05",
        eligibility: "Open to all",
        description:
            'Join us for a Sunday morning reading session amidst nature. We will be discussing "The Hidden Life of Trees".',
        registrationLink: "#",
        imageUrl: "https://picsum.photos/id/24/800/600",
        isPast: false,
    },
    {
        id: "3",
        title: "Annual Painting Competition",
        slug: "painting-competition-2026",
        startDate: "2026-03-20",
        endDate: "2026-03-20",
        eligibility: "Std 5th to 10th",
        description:
            'Express your creativity with the theme "Science in Nature". exciting prizes to be won!',
        registrationLink: "#",
        imageUrl: "https://picsum.photos/id/104/800/600",
        isPast: false,
    },
    {
        id: "4",
        title: "Winter Astronomy Workshop",
        slug: "winter-astronomy-2025",
        startDate: "2025-12-15",
        endDate: "2025-12-16",
        eligibility: "Std 8th to 12th",
        description: "Stargazing and telescope making workshop.",
        registrationLink: "#",
        imageUrl: "https://picsum.photos/id/111/800/600",
        isPast: true,
    },
];

export const GALLERY_IMAGES: GalleryImage[] = [
    {
        id: "1",
        url: "https://picsum.photos/id/20/600/600",
        title: "Lab Experiments",
        category: "Camp",
    },
    {
        id: "2",
        url: "https://picsum.photos/id/28/600/600",
        title: "Forest Trail",
        category: "Camp",
    },
    {
        id: "3",
        url: "https://picsum.photos/id/104/600/600",
        title: "Abstract Art",
        category: "Competition",
    },
    {
        id: "4",
        url: "https://picsum.photos/id/106/600/600",
        title: "Sunset View",
        category: "Other",
    },
    {
        id: "5",
        url: "https://picsum.photos/id/175/600/600",
        title: "Telescope",
        category: "Camp",
    },
    {
        id: "6",
        url: "https://picsum.photos/id/212/600/600",
        title: "Group Photo",
        category: "Camp",
    },
    {
        id: "7",
        url: "https://picsum.photos/id/250/600/600",
        title: "Sketching",
        category: "Competition",
    },
    {
        id: "8",
        url: "https://picsum.photos/id/301/600/600",
        title: "River Clean Drive",
        category: "Other",
    },
];

export const CONTACT_INFO: ContactInfo = {
    person: "Sanjay (Coordinator)",
    phone: ["+91 98765 43210", "+91 99887 76655"],
    locations: [
        {
            name: "Devrukh Ashram",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.679366579044!2d73.6186!3d17.0697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1c3b1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sDevrukh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
        },
        {
            name: "Sangameshwar Site",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.679366579044!2d73.55!3d17.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1c3b1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sSangameshwar!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
        },
    ],
};
