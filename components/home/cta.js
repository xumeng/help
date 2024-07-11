"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WXIcon from "../../public/wx.svg";
import MailIcon from "../../public/email.svg";

export default function Cta({ locale, CTALocale }) {
  const [visible, setVisible] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const handleFocus = () => {
    setVisible(true);
  };

  const handleBlur = () => {
    setVisible(false);
  };

  return (
    <section id="cta" className="relative py-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto">
          <h2 className="font-bold  text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em]">
            {locale.h2}
          </h2>

          <h3 className="w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center">
            {locale.h3}
          </h3>

          {/* <a
            title="get source code"
            className="mt-10 btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full"
            href="#"
          >
            <SiGithub /> {CTALocale.btn1}
          </a> */}

          <div className="socials flex flex-row gap-2">
            <a
              title="发送邮件"
              className="mt-10 btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full"
              href="mailto:gosuxm@gmail.com"
            >
              <Image width={40} height={40} src={MailIcon} alt="Mail Icon" />
            </a>

            <a
              title="立即联系"
              className="mt-10 btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full"
              href="#"
              onClick={handleClick}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <div>
                <Image width={40} height={40} src={WXIcon} alt="WeChat Icon" />
              </div>
              {visible && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)", // 调整位置使其在正下方
                    left: "50%",
                    transform: "translateX(-50%)", // 居中对齐
                  }}
                >
                  <Image
                    width={200}
                    height={200}
                    src="/me_qrcode.jpg"
                    alt="Wechat image"
                  />
                </div>
              )}
            </a>
          </div>
        </div>
      </motion.div>

      <div className="hidden md:block absolute left-[30%] top-0 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
    </section>
  );
}
