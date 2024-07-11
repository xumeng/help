"use client";
import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useContext } from "react";
import ThemeContext from "@/context/ThemeContext";

export default function PricingCard({ pricingItem = {} }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-full min-h-96 px-5 py-10 border-2 border-base-content rounded-xl flex flex-col items-center gap-2 transition-all duration-100 shadow-none hover:shadow-2xl bg-base-100 ${
        pricingItem.recommend && "md:scale-125"
      }`}
    >
      <h2 className="text-xl font-bold text-center">{pricingItem.title}</h2>
      <p className="text-center">{pricingItem.description}</p>
      <div className="text-4xl font-bold text-center py-5 bg-gradient-to-r from-base-content from-0% to-[#9c9c9c] md:text-center bg-clip-text text-transparent">
        {pricingItem.price}/{pricingItem.duration}
      </div>

      <ul className="w-full flex flex-col gap-2 py-5">
        {pricingItem.features &&
          pricingItem.features.map((feature, Featureindex) => {
            return (
              <li className="flex items-center gap-2" key={Featureindex}>
                {Featureindex <= pricingItem.enableToIndex ? (
                  <FaCheck />
                ) : (
                  <RxCross1 color="red" />
                )}{" "}
                {Featureindex <= pricingItem.enableToIndex ? (
                  <span
                    style={{ color: theme === "business" ? "white" : "black" }}
                  >
                    {feature}
                  </span>
                ) : (
                  <span
                    style={{ color: theme === "business" ? "gray" : "gray" }}
                  >
                    {feature}
                  </span>
                )}
              </li>
            );
          })}
      </ul>

      <a
        aria-label="选择此方案"
        title="选择此方案"
        href="#cta"
        className="btn w-10/11 bg-base-content text-base-100 hover:bg-base-100 hover:text-base-content rounded-full"
      >
        详细咨询
      </a>
    </div>
  );
}
