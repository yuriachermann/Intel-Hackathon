import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

export default function Features04() {
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
        <div className="">
          {/* Highlighted boxes */}
          <div className="relative pb-12 md:pb-20">
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

              {/* Box #2 */}
              <div className="md:col-span-7" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                        aria-hidden="true"
                      >
                        <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="order-1 shrink-0 px-6 pt-0 md:order-none md:max-w-[480px] md:px-8 md:pr-0 md:pt-8">
                        <div>
                          <h3 className="inline-flex bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-1 text-xl font-bold text-transparent">
                            Extensibility
                          </h3>
                          <p className="text-slate-400">
                            Your login box must find the right balance between
                            user convenience, privacy and security.
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative h-64 w-full overflow-hidden md:h-auto md:pb-8">
                        <Image
                          className="absolute bottom-0 left-1/2 mx-auto max-w-none -translate-x-1/2 md:relative md:left-0 md:max-w-full md:translate-x-0"
                          src="/feature-image-02.png"
                          width={400}
                          height={200}
                          alt="Feature 02"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #3 */}
              <div className="md:col-span-5" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-slate-900">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-square w-1/2 -translate-x-1/2 translate-y-1/2"
                        aria-hidden="true"
                      >
                        <div className="translate-z-0 absolute inset-0 rounded-full bg-slate-800 blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="order-1 shrink-0 px-6 pt-0 md:order-none md:max-w-[480px] md:px-8 md:pr-0 md:pt-8">
                        <div>
                          <h3 className="inline-flex bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-1 text-xl font-bold text-transparent">
                            Infinite options
                          </h3>
                          <p className="text-slate-400">
                            Quickly apply filters to refine your issues lists
                            and create custom views.
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative h-64 w-full overflow-hidden md:h-auto">
                        <Image
                          className="absolute bottom-0 left-1/2 mx-auto max-w-none -translate-x-1/2 md:relative md:left-0 md:max-w-full md:translate-x-0"
                          src="/feature-image-03.png"
                          width={290}
                          height={290}
                          alt="Feature 03"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            </Highlighter>
          </div>
        </div>
      </div>
    </section>
  );
}
