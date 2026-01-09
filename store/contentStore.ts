import { create } from "zustand";
import { Event, GalleryImage, ContactInfo } from "@/types";
import { EVENTS, GALLERY_IMAGES, CONTACT_INFO } from "@/constants";
import { client } from "@/sanity/client";
import { eventsQuery, galleryQuery, contactQuery } from "@/sanity/queries";

interface ContentState {
    // Data
    events: Event[];
    galleryImages: GalleryImage[];
    contactInfo: ContactInfo;

    // Loading states
    isLoading: boolean;
    eventsLoading: boolean;
    galleryLoading: boolean;
    contactLoading: boolean;
    eventsLoaded: boolean;
    galleryLoaded: boolean;
    contactLoaded: boolean;

    // Error states
    error: string | null;

    // Actions
    fetchEvents: () => Promise<void>;
    fetchGallery: () => Promise<void>;
    fetchContact: () => Promise<void>;
    fetchAll: () => Promise<void>;
}

export const useContentStore = create<ContentState>((set, get) => ({
    // Initialize with fallback data
    events: EVENTS,
    galleryImages: GALLERY_IMAGES,
    contactInfo: CONTACT_INFO,

    isLoading: false,
    eventsLoading: false,
    galleryLoading: false,
    contactLoading: false,
    eventsLoaded: false,
    galleryLoaded: false,
    contactLoaded: false,
    error: null,

    fetchEvents: async () => {
        if (get().eventsLoaded) return;

        try {
            set({ isLoading: true, eventsLoading: true, error: null });
            const data = await client.fetch<Event[]>(eventsQuery);

            if (data && data.length > 0) {
                set({ events: data, eventsLoaded: true });
            } else {
                // Keep fallback data if no CMS content
                set({ eventsLoaded: true });
            }
        } catch (error) {
            console.error("Failed to fetch events from Sanity:", error);
            // Keep fallback data on error
            set({ error: "Failed to load events from CMS" });
        } finally {
            set({ isLoading: false, eventsLoading: false });
        }
    },

    fetchGallery: async () => {
        if (get().galleryLoaded) return;

        try {
            set({ isLoading: true, galleryLoading: true, error: null });
            const data = await client.fetch<GalleryImage[]>(galleryQuery);

            if (data && data.length > 0) {
                set({ galleryImages: data, galleryLoaded: true });
            } else {
                set({ galleryLoaded: true });
            }
        } catch (error) {
            console.error("Failed to fetch gallery from Sanity:", error);
            set({ error: "Failed to load gallery from CMS" });
        } finally {
            set({ isLoading: false, galleryLoading: false });
        }
    },

    fetchContact: async () => {
        if (get().contactLoaded) return;

        try {
            set({ isLoading: true, contactLoading: true, error: null });
            const data = await client.fetch<ContactInfo>(contactQuery);

            if (data) {
                set({ contactInfo: data, contactLoaded: true });
            } else {
                set({ contactLoaded: true });
            }
        } catch (error) {
            console.error("Failed to fetch contact info from Sanity:", error);
            set({ error: "Failed to load contact info from CMS" });
        } finally {
            set({ isLoading: false, contactLoading: false });
        }
    },

    fetchAll: async () => {
        const { fetchEvents, fetchGallery, fetchContact } = get();
        await Promise.all([fetchEvents(), fetchGallery(), fetchContact()]);
    },
}));
