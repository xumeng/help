"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import WXIcon from "../../public/wx.svg";
import MailIcon from "../../public/email.svg";

const FloatingContactInfo = () => {
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
    <div className={styles.floatingContactInfo}>
      <div className={styles.contactItem}>
        <a
          title="立即联系"
          href="#"
          onClick={handleClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={styles.icon}
        >
          <div>
            <Image width={22} height={22} src={WXIcon} alt="WeChat Icon" />
          </div>
          {visible && (
            <div
              style={{
                position: "absolute",
                left: "-180%", // 调整位置使其在正下方
                top: "30%",
                transform: "translateY(-50%)", // 居中对齐
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
          <span>在线咨询</span>
        </a>
      </div>
      <div className={styles.contactItem}>
        <a href="mailto:gosuxm@gmail.com" className={styles.icon}>
          <Image width={22} height={22} src={MailIcon} alt="Mail Icon" />
          邮件咨询
        </a>
      </div>
    </div>
  );
};

export default FloatingContactInfo;
