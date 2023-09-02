import React, { useEffect } from "react";
import Header from "../components/content/Header";
import Footer from "../components/content/Footer";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from "aos";
import Image from "next/image";
import Logo from "../components/3dLogo";
import Particles from "../components/particles";
import Link from "next/link";

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <div className={`z-0 bg-slate-900 bg-opacity-${100} bg-fixed`}>
        <Head>
          <title>DT WAY | Homepage</title>
        </Head>

        {/*  Site header */}
        <Header index={true} />

        <Particles
          quantity={70}
          staticity={40}
          ease={40}
          refresh={true}
          className="absolute inset-0 z-0"
        />

        {/*  Page content */}
        <main className="grow">
          {/*  Page sections */}
          <div
            aria-hidden="true"
            className="hidden flex-col items-center lg:block"
          >
            <div className="z-10 -mt-10 flex min-h-screen flex-row justify-center">
              <Image
                src="/DT.png"
                alt="DT"
                width={400}
                height={400}
                quality={100}
                priority={true}
                className="z-0 -mr-16 self-center"
                data-aos="zoom-in"
                data-aos-delay="600"
              />
              <div
                className="z-10 h-96 w-96 self-center"
                // data-aos="zoom-in"
                // data-aos-duration="1000"
                // data-aos-delay="1000"
              >
                <Logo fov={45} />
              </div>
              <Image
                src="/WAY.png"
                alt="WAY"
                width={400}
                height={400}
                quality={100}
                priority={true}
                className="z-0 -ml-16 self-center"
                data-aos="zoom-in"
                data-aos-delay="600"
              />
            </div>
            {/*Button white arrow with orange border, to automatically scrolldown to next page*/}
            <div
              className="z-10 -mt-40 mb-40 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="1500"
            >
              <Link className="button-home" href="/src/pages/ordering">
                <span className="label">Explore</span>
                <span className="icon">
                  <span></span>
                </span>
              </Link>
            </div>
          </div>
          <div aria-hidden="true" className="lg:hidden">
            <div className="z-10 mt-24 flex min-h-screen flex-col items-stretch justify-center bg-slate-900 bg-opacity-100 bg-fixed">
              <Image
                src="/DT.png"
                alt="DT"
                width={300}
                height={300}
                quality={100}
                priority={true}
                className="z-0 mx-12 mb-8 self-center"
                data-aos="zoom-in"
                data-aos-delay="500"
              />
              <div
                className="z-10 my-12 h-40 w-64 self-center"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <Logo fov={30} />
              </div>
              <Image
                src="/WAY.png"
                alt="WAY"
                width={300}
                height={300}
                quality={100}
                priority={true}
                className="z-0 mx-12 mt-8 self-center"
                data-aos="zoom-in"
                data-aos-delay="500"
              />
              <div className="z-10 my-20 flex items-center justify-center">
                <div
                  className="button-home"
                  data-aos="fade-up"
                  data-aos-delay="1500"
                  onClick={() => {
                    setTimeout(() => {
                      window.location.href = "/place-order";
                    }, 500); // 500 ms delay
                  }}
                >
                  <span className="label">Explore</span>
                  <span className="icon">
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
