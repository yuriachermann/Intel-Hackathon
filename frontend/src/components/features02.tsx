import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

export default function Features02() {
  return (
    <section className="relative">
      {/* Particles animation */}
      {/*<div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">*/}
      <Particles
        className="absolute inset-0 z-0"
        quantity={10}
        staticity={30}
      />
      {/*</div>*/}

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-16 md:pt-24">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center">
            <h2 className="h2 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
              Smarter. Better. Faster.
            </h2>
            <p className="text-lg text-slate-400">
              Providing strategic guidance, technical expertise, and continuous
              support to ensure your business stays ahead in an ever-evolving
              digital landscape.
            </p>
          </div>

          {/* Highlighted boxes */}
          <div className="relative pb-8">
            {/* Blurred shape */}
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 -mb-20 -translate-x-1/2 opacity-50 blur-2xl"
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#252673" />
                    <stop offset="100%" stopColor="#252673" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="group grid gap-6 md:grid-cols-12">
              {/* Box #1 */}
              <div className="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      {/* Blurred shape */}
                      <div
                        className="absolute right-0 top-0 blur-2xl"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="342"
                          height="393"
                        >
                          <defs>
                            <linearGradient
                              id="bs-a"
                              x1="19.609%"
                              x2="50%"
                              y1="14.544%"
                              y2="100%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#252673"
                                stopOpacity="0.25"
                              />
                              <stop
                                offset="100%"
                                stopColor="#252673"
                                stopOpacity="0.25"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#bs-a)"
                            fillRule="evenodd"
                            d="m104 .827 461 369-284 58z"
                            transform="translate(0 -112.827)"
                            opacity=".7"
                          />
                        </svg>
                      </div>
                      {/* Radial gradient */}
                      <div
                        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 flex aspect-square h-full -translate-x-1/2 translate-y-1/2 items-center justify-center"
                        aria-hidden="true"
                      >
                        <div className="translate-z-0 absolute inset-0 rounded-full bg-[#252673] opacity-30 blur-[120px]" />
                        <div className="translate-z-0 absolute h-1/4 w-1/4 rounded-full bg-[#252673] opacity-30 blur-[40px]" />
                      </div>
                      {/* Text */}
                      <div className="order-1 shrink-0 p-6 pt-0 md:order-none md:max-w-[480px] md:p-8 md:pr-0">
                        <div className="mb-5">
                          <div>
                            <h3 className="inline-flex bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-1 text-xl font-bold text-transparent">
                              Optimized for your needs
                            </h3>
                            <p className="text-slate-400">
                              Transforming the future, one step at a time, with
                              custom-built, precision-tailored cloud solutions
                              designed to adapt seamlessly to your specific
                              needs.
                            </p>
                          </div>
                        </div>
                        <div>
                          <a
                            className="btn-sm group relative text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/30 hover:text-white"
                            href="#0"
                          >
                            <span className="relative inline-flex items-center">
                              Learn more{" "}
                              <span className="ml-1 tracking-normal text-orange-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                                -&gt;
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative h-64 w-full overflow-hidden md:h-auto">
                        <Image
                          className="md:left-0{md}transla{}-x-0 absolute bottom-0 left-1/2 mx-auto max-w-none -translate-x-1/2 md:relative"
                          src="/feature-image-01.png"
                          width="504"
                          height="400"
                          alt="Feature 01"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #2 */}
              {/*<div className="md:col-span-7" data-aos="fade-down">*/}
              {/*  <HighlighterItem>*/}
              {/*    <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">*/}
              {/*      <div className="flex flex-col">*/}
              {/*        { /* Radial gradient *!/*/}
              {/*        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">*/}
              {/*          <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />*/}
              {/*        </div>*/}
              {/*        { /* Text *!/*/}
              {/*        <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">*/}
              {/*          <div>*/}
              {/*            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">Extensibility</h3>*/}
              {/*            <p className="text-slate-400">Your login box must find the right balance between user convenience, privacy and security.</p>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        { /* Image *!/*/}
              {/*        <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">*/}
              {/*          <Image className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src='/feature-image-02.png' width={460} height={1950} alt="Feature 02" />*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </HighlighterItem>*/}
              {/*</div>*/}
              {/*{ /* Box #3 *!/*/}
              {/*<div className="md:col-span-5" data-aos="fade-down">*/}
              {/*  <HighlighterItem>*/}
              {/*    <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">*/}
              {/*      <div className="flex flex-col">*/}
              {/*        { /* Radial gradient *!/*/}
              {/*        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">*/}
              {/*          <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />*/}
              {/*        </div>*/}
              {/*        { /* Text *!/*/}
              {/*        <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">*/}
              {/*          <div>*/}
              {/*            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">Infinite options</h3>*/}
              {/*            <p className="text-slate-400">Quickly apply filters to refine your issues lists and create custom views.</p>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*        { /* Image *!/*/}
              {/*        <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">*/}
              {/*          <Image className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src='/feature-image-03.png' width={230} height={230} alt="Feature 03" />*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </HighlighterItem>*/}
              {/*</div>*/}
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
}
