import React from "react";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from 'next/link'
function FoundersCard() {

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 pt-16 text-justify sm:px-6">
        <div className="mx-auto grid max-w-sm items-start gap-8 p-2 md:max-w-none md:grid-cols-2 lg:gap-12">
          <Link
            href="#"
            data-aos="zoom-out"
            className="rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="flex items-center justify-center pt-2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Yuri Winche Achermann
              </h5>
            </div>
            <div className="flex-cols flex items-start">
              <div className="p-2">
                <Image
                  className="h-40 w-full rounded-lg object-cover"
                  src="/Yuri.png"
                  alt="Yuri"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex-1 overflow-hidden p-2">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus est dolor, pharetra sit amet porttitor porta,
                  porttitor accumsan ex. Suspendisse libero ligula ivamus est
                  dolor, pharetra sit amet porttitor porta, porttitor accumsan
                  ex. Suspendisse libero
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FoundersCard;
