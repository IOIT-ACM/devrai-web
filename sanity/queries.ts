import { groq } from "next-sanity";

export const eventsQuery = groq`
  *[_type == "event"] | order(startDate desc) {
    "id": _id,
    title,
    "slug": slug.current,
    startDate,
    endDate,
    eligibility,
    description,
    registrationLink,
    "imageUrl": image.asset->url,
    isPast
  }
`;

export const galleryQuery = groq`
  *[_type == "galleryImage"] {
    "id": _id,
    title,
    "url": image.asset->url,
    category
  }
`;

export const contactQuery = groq`
  *[_type == "contactInfo"][0] {
    person,
    phone,
    locations[] {
      name,
      mapUrl
    }
  }
`;
