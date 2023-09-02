import { useEffect, useState } from "react";
import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

// Import Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.min.css";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
Swiper.use([Navigation]);

export default function FeaturesCarousel() {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  useEffect(() => {
    const carousel = new Swiper(".testimonials-carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
    setSwiperInitialized(true);
  }, []);

  return (
    <section>
      <div className="mx-auto mb-8 max-w-6xl px-4 sm:px-6">
        {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
        {/* * Custom styles in src/css/additional-styles/theme.scss */}
        <div className="relative ">
          <div className="testimonials-carousel swiper-container group">
            <Highlighter
              className="swiper-wrapper w-fit"
              refresh={swiperInitialized}
            >
              {/* Carousel items */}
              <HighlighterItem className="swiper-slide group/slide h-auto">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
                  {/* Particles animation */}
                  <Particles
                    className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
                    quantity={3}
                    refresh={swiperInitialized}
                  />
                  {/* Radial gradient */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/3 -translate-x-1/2 translate-y-1/2"
                    aria-hidden="true"
                  >
                    <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-[#252673]" />
                  </div>
                  <div className="flex h-full flex-col p-6">
                    <Image
                      className="mb-3"
                      src="/carousel-icon-01.svg"
                      width={56}
                      height={56}
                      alt="Icon 01"
                    />
                    <div className="grow">
                      <div className="mb-1 text-lg font-bold">
                        Real-time monitoring
                      </div>
                      <div className="mb-3 text-slate-400">
                        Real-time monitoring systems to detect and respond to performance issues as they happen.
                      </div>
                    </div>
                    <div className="text-right">
                      <a
                        className="group inline-flex items-center text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
                        href="#0"
                      >
                        Learn More{" "}
                        <span className="ml-1 tracking-normal text-orange-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem className="swiper-slide group/slide h-auto">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
                  {/* Particles animation */}
                  <Particles
                    className="absolute inset-0 -z-10 opacity-80 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
                    quantity={3}
                    refresh={swiperInitialized}
                  />
                  {/* Radial gradient */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/3 -translate-x-1/2 translate-y-1/2"
                    aria-hidden="true"
                  >
                    <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-[#252673]" />
                  </div>
                  <div className="flex h-full flex-col p-6">
                    <Image
                      className="mb-3"
                      src="/carousel-icon-02.svg"
                      width={56}
                      height={56}
                      alt="Icon 01"
                    />
                    <div className="grow">
                      <div className="mb-1 text-lg font-bold">
                        Performance metrics
                      </div>
                      <div className="mb-3 text-slate-400">
                        Defining and measuring key performance indicators (KPIs) for the production line.
                      </div>
                    </div>
                    <div className="text-right">
                      <a
                        className="group inline-flex items-center text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
                        href="#0"
                      >
                        Learn More{" "}
                        <span className="ml-1 tracking-normal text-orange-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem className="swiper-slide group/slide h-auto">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
                  {/* Particles animation */}
                  <Particles
                    className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
                    quantity={3}
                    refresh={swiperInitialized}
                  />
                  {/* Radial gradient */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/3 -translate-x-1/2 translate-y-1/2"
                    aria-hidden="true"
                  >
                    <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-[#252673]" />
                  </div>
                  <div className="flex h-full flex-col p-6">
                    <Image
                      className="mb-3"
                      src="/carousel-icon-03.svg"
                      width={56}
                      height={56}
                      alt="Icon 01"
                    />
                    <div className="grow">
                      <div className="mb-1 text-lg font-bold">
                        Data collection
                      </div>
                      <div className="mb-3 text-slate-400">
                        Gather data from various sources within the production line to provide a comprehensive view of its performance.
                      </div>
                    </div>
                    <div className="text-right">
                      <a
                        className="group inline-flex items-center text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
                        href="#0"
                      >
                        Learn More{" "}
                        <span className="ml-1 tracking-normal text-orange-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem className="swiper-slide group/slide h-auto">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
                  {/* Particles animation */}
                  <Particles
                    className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
                    quantity={3}
                    refresh={swiperInitialized}
                  />
                  {/* Radial gradient */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/3 -translate-x-1/2 translate-y-1/2"
                    aria-hidden="true"
                  >
                    <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-[#252673]" />
                  </div>
                  <div className="flex h-full flex-col p-6">
                    <Image
                      className="mb-3"
                      src="/carousel-icon-04.svg"
                      width={56}
                      height={56}
                      alt="Icon 01"
                    />
                    <div className="grow">
                      <div className="mb-1 text-lg font-bold">
                        Data visualization
                      </div>
                      <div className="mb-3 text-slate-400">
                        Interactive dashboards and reports to present the
                        performance data in a clear and meaningful way.
                      </div>
                    </div>
                    <div className="text-right">
                      <a
                        className="group inline-flex items-center text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
                        href="#0"
                      >
                        Learn More{" "}
                        <span className="ml-1 tracking-normal text-orange-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
              <HighlighterItem className="swiper-slide group/slide h-auto">
                <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
                  {/* Particles animation */}
                  <Particles
                    className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/slide:opacity-100 group-[.swiper-slide-active]/slide:opacity-100"
                    quantity={3}
                    refresh={swiperInitialized}
                  />
                  {/* Radial gradient */}
                  <div
                    className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/3 -translate-x-1/2 translate-y-1/2"
                    aria-hidden="true"
                  >
                    <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[60px] transition-colors duration-500 ease-in-out group-[.swiper-slide-active]/slide:bg-[#252673]" />
                  </div>
                  <div className="flex h-full flex-col p-6">
                    <Image
                      className="mb-3"
                      src="/carousel-icon-05.svg"
                      width={56}
                      height={56}
                      alt="Icon 05"
                    />
                    <div className="grow">
                      <div className="mb-1 text-lg font-bold">
                        Continuous improvement
                      </div>
                      <div className="mb-3 text-slate-400">
                        Continuously monitor and improve the performance of the
                        production line based on ongoing data analysis.
                      </div>
                    </div>
                    <div className="text-right">
                      <a
                        className="group inline-flex items-center text-sm font-medium text-slate-300 transition duration-150 ease-in-out hover:text-white"
                        href="#0"
                      >
                        Learn More{" "}
                        <span className="ml-1 tracking-normal text-orange-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </Highlighter>
          </div>
        </div>

        {/* Arrows */}
        <div className="mt-2 flex justify-center md:hidden">
          <button className="carousel-prev group relative z-20 flex h-8 w-12 items-center justify-center">
            <span className="sr-only">Previous</span>
            <svg
              className="h-4 w-4 fill-slate-500 transition duration-150 ease-in-out group-hover:fill-orange-500"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
            </svg>
          </button>
          <button className="carousel-next group relative z-20 flex h-8 w-12 items-center justify-center">
            <span className="sr-only">Next</span>
            <svg
              className="h-4 w-4 fill-slate-500 transition duration-150 ease-in-out group-hover:fill-orange-500"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
