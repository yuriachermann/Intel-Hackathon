import React from "react";
import { useTranslation } from "react-i18next";

function Features02() {
  const { t } = useTranslation();

  return (
    <section className="relative">
      {/* Bg illustration */}
      <div className="absolute inset-0 -z-10 -mt-[1000px] flex h-[1000px] w-full flex-col bg-gradient-to-b from-transparent to-white" />
      <video
        autoPlay
        loop
        muted
        className="relative -z-10 -mb-48 -mt-12 w-auto min-w-full max-w-full md:-mt-48"
      >
        <source src="/wave.mp4" type="video/mp4" />
        {t("your_browser_does_not_support_the_video_tag")}
      </video>
    </section>
  );
}

export default Features02;
