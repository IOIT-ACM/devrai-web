import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "6y5ir6s8",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});
