import { TfiYoutube } from "react-icons/tfi";
import { FaRedditAlien, FaTiktok, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaSquareThreads, FaWeixin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiWechatChannelsLine } from "react-icons/ri";

const baseSiteConfig = {
  name: "职生机 职业生涯的导师伙伴",
  description: "职生机是您职业生涯的最佳导师伙伴之一",
  url: "https://help.amonxu.com",
  ogImage: "https://help.amonxu.com/logo.png",
  metadataBase: "/",
  keywords: [
    "landing page template",
    "landing page boilerplate",
    "opensource landing page",
    "next.js landing page",
    "free landing page",
    "awesome landing page",
  ],
  authors: [
    {
      name: "amonxu",
      url: "https://about.amonxu.com",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "zh-CN",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
