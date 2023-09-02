import React from "react";
import Image from "next/image";
import Link from 'next/link'

function TimelineAbout() {

  return (
    <div className="pt-10 pb-10 pl-2 pr-4 text-justify">
      <ol className="relative border-l border-gray-200 pl-2 dark:border-gray-700">
        <li className="mb-10 ml-4" data-aos="zoom-out">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 pl-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2021
          </time>
          <div className="flex flex-col pt-2 pb-2 md:flex-row">
            <div className="block p-3 md:hidden">
              <Image
                className="block h-full w-full rounded-lg  object-cover sm:w-32 md:hidden"
                src="/fraunhofer.jpg"
                alt="Fraunhofer Institute"
                width={192}
                height={192}
              />
            </div>
            <Image
              className="hidden h-full w-full rounded-lg object-cover sm:w-32 md:block md:h-auto md:w-48"
              src="/fraunhofer.jpg"
              alt="Fraunhofer Institute"
              width={192}
              height={192}
            />
            <div className="pl-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Fraunhofer IPT
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                est dolor, pharetra sit amet porttitor porta, porttitor accumsan
                ex. Suspendisse libero ligula, elementum in lectus id, ultricies
                laoreet dui. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus est dolor, pharetra sit amet porttitor porta,
                porttitor accumsan ex. Suspendisse libero ligula, elementum in
                lectus id, ultricies laoreet dui.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                est dolor, pharetra sit amet porttitor porta, porttitor accumsan
                ex. Suspendisse libero ligula, elementum in lectus id, ultricies
                laoreet dui.
              </p>
              <Link
                href="https://www.ipt.fraunhofer.de/"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                See more
                <svg
                  className="ml-2 h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </li>

        <li className="mb-10 ml-4" data-aos="zoom-out" data-aos-delay="300">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 pl-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2021
          </time>
          <div className="flex flex-col pt-2 pb-2 md:flex-row">
            <div className="block p-3 md:hidden">
              <Image
                className="block h-full w-full rounded-lg  object-cover sm:w-32 md:hidden"
                src="/collective.jpg"
                alt="Collective Incubator"
                width={192}
                height={192}
              />
            </div>
            <Image
              className="hidden h-full w-full rounded-lg object-cover sm:w-32 md:block md:h-auto md:w-48"
              src="/collective.jpg"
              alt="Collective Incubator"
              width={192}
              height={192}
            />
            <div className="pl-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Collective Incubator
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                est dolor, pharetra sit amet porttitor porta, porttitor accumsan
                ex. Suspendisse libero ligula, elementum in lectus id, ultricies
                laoreet dui. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus est dolor, pharetra sit amet porttitor porta,
                porttitor accumsan ex. Suspendisse libero ligula, elementum in
                lectus id, ultricies laoreet dui.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                est dolor, pharetra sit amet porttitor porta, porttitor accumsan
                ex. Suspendisse libero ligula, elementum in lectus id, ultricies
                laoreet dui.
              </p>
              <Link
                href="https://www.collective-incubator.de/"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                See more
                <svg
                  className="ml-2 h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </li>

        <li className="mb-10 ml-4" data-aos="zoom-out" data-aos-delay="300">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 pl-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2022
          </time>
          <div className="flex flex-col pt-2 pb-2 md:flex-row">
            <div className="block p-3 md:hidden">
              <Image
                className="block h-full w-full rounded-lg  object-cover sm:w-32 md:hidden"
                src="/innovation.jpg"
                alt="Innovation Institute"
                width={192}
                height={192}
              />
            </div>
            <Image
              className="hidden h-full w-full rounded-lg object-cover sm:w-32 md:block md:h-auto md:w-48"
              src="/innovation.jpg"
              alt="Innovation Incubator"
              width={192}
              height={192}
            />
            <div className="pl-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Innovation Incubator
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                est dolor, pharetra sit amet porttitor porta, porttitor accumsan
                ex. Suspendisse libero ligula, elementum in lectus id, ultricies
                laoreet dui. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus est dolor, pharetra sit amet porttitor porta,
                porttitor accumsan ex. Suspendisse libero ligula, elementum in
                lectus id, ultricies laoreet dui.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                est dolor, pharetra sit amet porttitor porta, porttitor accumsan
                ex. Suspendisse libero ligula, elementum in lectus id, ultricies
                laoreet dui.
              </p>
              <Link
                href="https://www.rwth-innovation.de/en/for-start-ups-investors/offerings-founders/ideation-program"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                See more
                <svg
                  className="ml-2 h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </li>

        <li className="mb-10 ml-4" data-aos="zoom-out" data-aos-delay="300">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 pl-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            October 2022
          </time>
          <div className="flex flex-col pt-2 pb-2 md:flex-row">
            <div className="block p-3 md:hidden">
              <Image
                className="block h-full w-full rounded-lg  object-cover sm:w-32 md:hidden"
                src="/ahead.jpg"
                alt="Ahead Incubator"
                width={192}
                height={192}
              />
            </div>
            <Image
              className="hidden h-full w-full rounded-lg object-cover sm:w-32 md:block md:h-auto md:w-48"
              src="/ahead.jpg"
              alt="Ahead Incubator"
              width={192}
              height={192}
            />
            <div className="pl-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Ahead Incubator
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                est dolor, pharetra sit amet porttitor porta, porttitor accumsan
                ex. Suspendisse libero ligula, elementum in lectus id, ultricies
                laoreet dui. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus est dolor, pharetra sit amet porttitor porta,
                porttitor accumsan ex. Suspendisse libero ligula, elementum in
                lectus id, ultricies laoreet dui.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                est dolor, pharetra sit amet porttitor porta, porttitor accumsan
                ex. Suspendisse libero ligula, elementum in lectus id, ultricies
                laoreet dui.
              </p>
              <Link
                href="https://www.ahead.fraunhofer.de/en.html"
                className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                See more
                <svg
                  className="ml-2 h-3 w-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default TimelineAbout;
