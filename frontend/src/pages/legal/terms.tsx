import React, { useEffect } from "react";
import AOS from "aos";
import Header from "../../components/content/Header";
import Footer from "../../components/content/Footer";
import "aos/dist/aos.css";
import AccordionPolicy from "../../components/content/AccordionPolicy";
import Head from 'next/head'
export default function Terms() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  const currentMonth = new Date().toLocaleString("en", { month: "long" });

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Head>
        <title>Tool Detective | Terms</title>
      </Head>
      <Header />
      <main className="grow">
        <div className="relative w-full overflow-hidden">
          <div className="relative mx-auto max-w-6xl sm:px-6">
            <div className="flex flex-wrap py-8 pt-24 pb-12 ">
              <div className="md:text-left px-4" data-aos="zoom-out">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
                  Tool Detective General Terms of Use
                </h1>
                <h5 className="mt-2 text-xl font-medium text-gray-500 dark:text-gray-400 md:text-2xl">
                  Situation:  {currentMonth}, 2023
                </h5>

                <AccordionPolicy title="1. Introduction, Accessing Tool Detective Services" />
                <AccordionPolicy title="2. Amendments to the Contract" />
                <AccordionPolicy title="3. The Tool Detective services offered" />
                <AccordionPolicy title="4. Billing, Price Changes, Right of Withdrawal, Extension and Termination of Paid Subscriptions" />
                <AccordionPolicy title="5. Rights we give youl" />
                <AccordionPolicy title="6. User Policy" />
                <AccordionPolicy title="7. Customer Service, Information, Questions and Complaints" />
                <AccordionPolicy title="8. Term and Termination" />
                <AccordionPolicy title="9. Guarantee" />
                <AccordionPolicy title="10. Limitation of Liability" />
                <AccordionPolicy title="11. Severability, Renunciation and Interpretation" />
                <AccordionPolicy title="12. Attribution" />

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
