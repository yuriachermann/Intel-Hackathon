import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Particles from "../particles";
import Logo from "../3dLogo";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
      <Particles quantity={7} staticity={40} className="absolute inset-0 z-0" />

      {/* Illustration */}
      <div
        className="pointer-events-none absolute inset-0 z-0 -mx-28 overflow-hidden rounded-t-[3rem] opacity-5"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2">
          <Image
            src="/glow-top.svg"
            className="max-w-none"
            width={1404}
            height={658}
            alt="Features Illustration"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="md:pt-30 pb-12 pt-24 md:pb-20">
          {/* Hero content */}
          <div className="mx-auto max-w-xl text-center md:mx-0 md:max-w-[680px] md:text-left">
            <div data-aos="zoom-out">
              <div className="relative mb-6 inline-block rounded-full bg-gray-800 px-4 py-1 text-sm text-gray-300 before:absolute before:inset-0 before:-z-10 before:-m-0.5 before:rounded-full before:bg-gradient-to-t before:from-gray-800 before:via-gray-600 before:to-gray-800 before:content-['']">
                <div className="text-gray-400">
                  {t("announcement_tag")}.{" "}
                  <Link
                    className="group inline-flex items-center font-medium text-orange-700 transition duration-150 ease-in-out"
                    href="mailto:carsten.holst@ipt.fraunhofer.de"
                  >
                    {t("learn_more")}{" "}
                    <span className="ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <h3
              className="h4 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text text-transparent"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              {t("let_ai_help_your")}
            </h3>
            <h1
              className="mb-6 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text font-goldman text-4xl text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              {t("predictive_maintenance")}
            </h1>
            <div aria-hidden="true" className="mb-12 h-[300px] md:hidden">
              <Logo fov={30} />
            </div>
            <p
              className="mb-10 hidden bg-gradient-to-r from-slate-200/40 via-slate-200/50 to-slate-200/40 bg-clip-text text-lg text-transparent md:block md:pr-8"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              {t("use_our_neural_network")}
            </p>
            <div
              className="mx-auto max-w-xs space-y-4 sm:flex sm:max-w-none sm:justify-center sm:space-x-4 sm:space-y-0 md:justify-start"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <Link
                  className="btn group w-full bg-gradient-to-t from-orange-800 to-orange-700 text-white shadow-lg hover:to-orange-500"
                  href="/support/contact"
                >
                  {t("get_Started_for_free")}{" "}
                  <span className="ml-1 tracking-normal text-orange-200 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  className="btn w-full bg-gradient-to-t from-gray-800 to-gray-700 text-gray-300 shadow-lg hover:to-gray-500"
                  href="#0"
                >
                  {t("explore_docs")}
                </Link>
              </div>
            </div>
            <p
              className="mb-10 mt-8 bg-gradient-to-r from-slate-200/40 via-slate-200/50 to-slate-200/40 bg-clip-text text-lg text-transparent md:hidden md:pr-8"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              {t("use_our_neural_network")}
            </p>
          </div>
        </div>
      </div>
      {/* Illustration */}
      <div aria-hidden="true" className="hidden md:block">
        <div className="inset-y-1/4 right-0 h-[full] w-[full] pr-6 align-middle md:absolute">
          <Logo fov={30} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
