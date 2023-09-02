import React, { useEffect } from "react";
import Header from "../../components/content/Header";
import Footer from "../../components/content/Footer";

import "aos/dist/aos.css";

import AOS from "aos";
import TimelineAbout from "../../components/content/TimelineAbout";
import FoundersCard from "../../components/content/FoundersCard";
import Head from 'next/head'

function About() {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden text-justify bg-slate-900">
      <Head>
        <title>Tool Detective | About</title>
      </Head>
      <Header />
      <main className="grow">
        <div className="w-full relative overflow-hidden">
          <div className="relative mx-auto max-w-6xl sm:px-6">
            <div className="pt-24  py-8">
              <div className="md:text-left px-4" data-aos="zoom-out">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
                  About us
                </h1>
                <h3 className="mt-2 text-xl font-medium text-gray-500 dark:text-gray-400 md:text-2xl">
                  Taking science from the lab to the world
                </h3>
                <br />
              </div>

              <TimelineAbout />

              <div className="md:text-left px-4" data-aos="zoom-out">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
                  Our team
                </h1>
                <h3 className="mt-2 text-xl font-medium text-gray-500 dark:text-gray-400 md:text-2xl">
                  Diverse perspectives, but one goal
                </h3>
                <br />
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus hendrerit, nulla et fringilla consequat, dolor
                  erat hendrerit nibh, iaculis rhoncus nisl mauris non ante.
                  Pellentesque vestibulum orci ut fermentum lacinia.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Fusce suscipit laoreet
                  erat, eu porta mauris imperdiet eget. Maecenas eu egestas
                  est. Fusce ornare malesuada lectus.
                </h5>
              </div>

              <FoundersCard />

            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
