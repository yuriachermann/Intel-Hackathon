import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

function TimelineAbout() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 text-justify sm:px-6">
        <div className="py-12 md:py-20">
          <div className="pb-16" data-aos="zoom-out">
            <Image
              src="/features.svg"
              width="1104"
              height="512"
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm items-start gap-8 md:max-w-none md:grid-cols-4 lg:gap-12">
            <div className="flex flex-col items-center" data-aos="zoom-out">
              <h4 className="h4 mb-2 text-center text-gray-200">2021</h4>
              <p className="text-center text-lg text-gray-400">
                {t("feature_1_description")}
              </p>
            </div>
            <div
              className="flex flex-col items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <h4 className="h4 mb-2 text-center text-gray-200">2022</h4>
              <p className="text-center text-lg text-gray-400">
                {t("feature_2_description")}
              </p>
            </div>
            <div
              className="flex flex-col items-center"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <h4 className="h4 mb-2 text-center text-gray-200">2023</h4>
              <p className="text-center text-lg text-gray-400">
                {t("feature_3_description")}
              </p>
            </div>
            <div
              className="flex flex-col items-center"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <h4 className="h4 mb-2 text-center text-gray-200">2024</h4>
              <p className="text-center text-lg text-gray-400">
                {t("feature_3_description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimelineAbout;
