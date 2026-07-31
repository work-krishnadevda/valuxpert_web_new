import siddhantImage from "@/assets/images/sidhant-S-image.png";
import shubhamImage from "@/assets/images/Shubham-Pandey.webp";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin: string;
  tags: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Siddhant S.",
    role: "Co-Founder | Builder",
    image: siddhantImage,
    linkedin: "https://www.linkedin.com/in/property-valuation-software/",
    description:
  "Co-Founder of ValuXpert, Siddhant S. builds technology that helps valuation firms eliminate inefficiencies and scale efficiently.",
    tags: [
      "PropTech",
      "Product",
      "Automation",
      "Growth",
    ],
  },
  {
    id: 2,
    name: "Shubham Pandey",
    role: "Co-Founder | CEO",
    image: shubhamImage,
    linkedin: "https://www.linkedin.com/in/shubham-pandey-cofounder/",
    description:
      "Drives strategic decisions, balances priorities, and keeps every effort aligned with the company's vision and long-term goals.",
    tags: [
      "Strategy",
      "Technology",
      "Innovation",
      "Growth",
    ],
  },
];