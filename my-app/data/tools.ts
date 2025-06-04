import type { IconType } from "react-icons";
import {
  HiCheckCircle,
  HiCollection,
  HiBookOpen,
  HiTrendingUp,
  HiBookmark,
  HiStar,
  HiShare,
} from "react-icons/hi";

export interface Tool {
  name: string;
  icon: IconType;
  description: string;
}

export const tools: Tool[] = [
  {
    name: "DoneOS",
    icon: HiCheckCircle,
    description:
      "Tangram Tools DoneOS is a complete system to clarify, organize, and execute your goals today...",
  },
  {
    name: "Zettelkasten",
    icon: HiCollection,
    description: "Linked notes and knowledge capture",
  },
  {
    name: "QuickRead",
    icon: HiBookOpen,
    description: "Summarizer for books/titles",
  },
  {
    name: "Pipeline",
    icon: HiTrendingUp,
    description: "Sales CRM template",
  },
  {
    name: "Brand Book",
    icon: HiBookmark,
    description: "Branding documentation system",
  },
  {
    name: "Feature Focus",
    icon: HiStar,
    description: "Product roadmap manager",
  },
  {
    name: "Share your work",
    icon: HiShare,
    description: "Call to submit user tools",
  },
];
