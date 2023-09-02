import React, { useEffect } from "react";
import AOS from "aos";
import Header from "../../components/content/Header";
import Footer from "../../components/content/Footer";
import "aos/dist/aos.css";
import ContactForm from "../../components/content/ContactForm";
import Head from 'next/head'
export default function Contact() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  return(
    <div className="flex flex-col min-h-screen overflow-hidden bg-slate-900">
      <Head>
        <title>Tool Detective | Contact</title>
      </Head>
      <Header />
      <main className="grow">
        <div className="w-full relative overflow-hidden">
          <div className="relative mx-auto max-w-6xl sm:px-6">
            <div className="py-8 flex flex-wrap ">
              <ContactForm />
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
