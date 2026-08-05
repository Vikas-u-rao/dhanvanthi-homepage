// Social media links configuration
// Leave empty strings for any platform not yet confirmed.
// Components conditionally render links only when a URL is present.

export interface SocialLink {
  label: string;
  url: string;
  icon: "instagram" | "facebook" | "youtube" | "twitter" | "linkedin";
}

export const SOCIAL_LINKS: SocialLink[] = [
  // TODO: Replace empty strings with official URLs when provided by client
  { label: "Instagram", url: "", icon: "instagram" },
  { label: "Facebook", url: "", icon: "facebook" },
  { label: "YouTube", url: "", icon: "youtube" },
];

/** Returns only links that have a URL configured */
export const activeSocialLinks = () => SOCIAL_LINKS.filter((l) => l.url.trim() !== "");
