"use client";
import Image from "next/image";
import { NavLinksList } from "@/lib/navLinksList";
import { usePathname } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";
import { useEffect, useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const langName = defaultLocale;
  const [linkList, setLinkList] = useState([]);

  useEffect(() => {
    const fetchLinksList = async () => {
      setLinkList(NavLinksList[`LINK_${langName.toUpperCase()}`] || []);
    };
    fetchLinksList();
  }, [pathname, langName]);

  return (
    <footer className="w-full px-5 py-10 bg-[#202020] text-[#f7f7f7] ">
      <div className="max-w-[1024px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-2 text-sm">
        <div className="flex flex-col items-center md:items-start">
          <a
            aria-label="职生机 Help"
            className="flex items-center mb-3"
            title="职生机 Help"
            href="#"
          >
            <Image
              width={200}
              height={200}
              src={"/logo.gif"}
              className="transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10"
              alt="logo"
            ></Image>
            <h2 className="ml-3 font-bold leading-5">职生机 Help</h2>
          </a>
          <div className="flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1">
            {linkList.map((link, index) => {
              return (
                <a key={index} title={link.name} href={`/${link.url}`}>
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        <p>
          ©{" "}
          <a title={"职生机"} href="https://help.gegegugu.com" target="_blank">
            职生机
          </a>{" "}
          2024出品.
          <a
            aria-label="职生机 Help"
            className="flex items-center mt-2 gap-x-2 hover:scale-80"
            href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral"
          >
            <Image
              width={69}
              height={30}
              src={"/upyun.png"}
              alt="upyun logo"
            ></Image>
            提供CDN加速/云存储服务
          </a>
        </p>
      </div>
    </footer>
  );
}
