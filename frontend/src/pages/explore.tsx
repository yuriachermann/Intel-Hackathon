import React, { useEffect } from "react";
import Header from "../components/content/Header";
import Hero from "../components/content/Hero";
import Features from "../components/features01";
import Features2 from "../components/features02";
import Footer from "../components/content/Footer";
// import Testimonials from "../components/testimonials";
import Services from "../components/services";
import FeaturesCarousel from "../components/features-carousel";
import Features04 from "../components/features04";
import Head from "next/head";
import "aos/dist/aos.css";
import AOS from "aos";
import Video from "../components/content/Video";

function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  // const [scrollPosition, setScrollPosition] = useState(0);

  // const handleScroll = () => {
  //   const position = window.scrollY;
  //   setScrollPosition(position);
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPosition(window.scrollY);
  //     console.log(Math.round(scrollPosition / 20) / 100);
  //   };
  //   console.log("Component has been rendered");
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //
  //   const alpha = Math.min(0.5 + 0.4 * scrollPosition / 1800, 0.9);
  //   const channel = Math.round( Math.min(0.5 + 0.4 * scrollPosition / 1800, 0.9) * 255);
  //   console.log('background-color' + 'rgb(' + String(Math.round( Math.min(0.5 + 0.4 * scrollPosition / 1800, 0.9) * 255)) + ',' + String(Math.round( Math.min(0.5 + 0.4 * scrollPosition / 1800, 0.9) * 255)) + ',' + String(Math.round( Math.min(0.5 + 0.4 * scrollPosition / 1800, 0.9) * 255)) + ')')
  //
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPosition]);

  // state = {
  //   bgcolor: "black",
  //   color: "white",
  // };
  //
  // listenScrollEvent = (e) => {
  //   if (window.scrollY < 5300) {
  //     return this.setState({
  //       bgcolor: "black",
  //       color: "white",
  //       opacity: 1 - window.scrollY / 5300,
  //     });
  //   } else {
  //     return this.setState({ bgcolor: "white", color: "black", opacity: 0 });
  //   }
  // };
  //
  // componentDidMount(){
  //   window.addEventListener("scroll", this.listenScrollEvent);
  // }

  // 0 - 2000

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <div className={`z-0 bg-slate-900 bg-opacity-${100} bg-fixed`}>
        <Head>
          <title>DT WAY | Homepage</title>
        </Head>

        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="grow">
          {/*  Page sections */}
          {/*<div*/}
          {/*  className={`bg-[rgba(255,255,255,${Math.round(scrollPosition / 20) / 100})]`}*/}
          {/*>*/}
          <Hero />
          <Features />
          <Features2 />
          <FeaturesCarousel />
          <Features04 />

          <Video />
          {/*</div>*/}
          <div className="bg-orange-700">
            <div className="mx-auto my-40 max-w-7xl px-4 py-16 sm:px-6 md:mt-12 lg:px-8">
              <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-100">
                Trusted by forward-thinking companies
              </h2>
            </div>
          </div>
          <Services />
          <div className="mb-20"/>
          {/*<Testimonials />*/}
        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
