import { Socials } from "../types/Socials";
import {
  FaFacebook,
  FaInstagram,
  FaBehance,
  FaLinkedin,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export interface NavbarLinks {
  title: string;
  list?: {
    description: string;
    links: {
      title: string;
      list?: string[];
    }[];
  };
}

import { NavbarLink } from "@/types/navbar";

export const navbarLinks: NavbarLink[] = [
  { title: "news" },
  { title: "csr" },
  { title: "roshen care" },
  {
    title: "we are roshen",
    list: {
      description:
        "ROSHN Group is Saudi Arabia's leading multi-asset class real estate developer and a Public Investment Fund (PIF) company...",
      links: [
        { title: "leadership" },
        { title: "the brand story" },
        { title: "vision 2030" },
        { title: "our awards" },
        { title: "sponsorships" },
      ],
    },
  },
  {
    title: "Communities",
    list: {
      description:
        "Our residential communities are distinguished by their vibrant and fully integrated design...",
      links: [
        { title: "sedra", list: ["the garden collection"] },
        { title: "alarous" },
        { title: "warefa" },
        { title: "elmanar" },
        { title: "aldanah" },
      ],
    },
  },
  {
    title: "by roshen group",
    list: {
      description:
        "As a national champion of destination real estate, ROSHN Group is redefining urban landscapes...",
      links: [
        { title: "marafy" },
        { title: "roshen front" },
        { title: "roshen stadium" },
        { title: "roshen next" },
      ],
    },
  },
];

export const socials: Socials[] = [
  {
    name: "whatsapp",
    url: "https://wa.me/+201022153359",
    icon: FaWhatsapp,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    icon: FaFacebook,
  },
  {
    name: "twitter",
    url: "https://www.twitter.com/",
    icon: FaXTwitter,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "behance",
    url: "https://www.behance.com/",
    icon: FaBehance,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    name: "snapchat",
    url: "https://www.snapchat.com/",
    icon: FaSnapchatGhost,
  },
];
