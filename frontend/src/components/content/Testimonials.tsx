import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

function Testimonials() {
  return (
    <section className="relative">
      {/* Bg gradient: top */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10" aria-hidden="true" />
      {/* Bg gradient: bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-[15rem] pointer-events-none z-10" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans">Sound too good ? Hear what our customers have to say</h2>
          </div>
          {/* Testimonials container */}
          <div className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start"
               data-aos-id-testimonials="100">
            {/* 1st Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src='/testimonial-01.jpg' width="48" height="48" alt="Testimonial 01" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">Compared to other offerings, Neon always has a head start and introduces bleeding edge features first.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Mark Luiss</span> - <Link className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Apprenda</Link>
              </footer>
            </article>
            {/* 2nd Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="100">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src='/testimonial-02.jpg' width="48" height="48" alt="Testimonial 02" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">Neon has made a huge impact on compliance, while helping us become more transparent.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Patrick Mills</span> - <Link className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">AppDonkey</Link>
              </footer>
            </article>
            {/* 3rd Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="200">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src='/testimonial-03.jpg' width="48" height="48" alt="Testimonial 03" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">GitHub provides tools that are, in a sense, invisible. You don’t have to waste time trying to get them to work.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">David Collison</span> - <Link className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">BrainTwo</Link>
              </footer>
            </article>
            {/* 4th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="300">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src='/testimonial-04.jpg' width="48" height="48" alt="Testimonial 04" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">Neon is the tool devs. The more you can make work feel native for a developer, the more cool their experience.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Licia McFarland</span> - <Link className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Paytable</Link>
              </footer>
            </article>
            {/* 5th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="400">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src='/testimonial-05.jpg' width="48" height="48" alt="Testimonial 05" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">Neon comes into play during the entire software life cycle. It’s the de facto tool for anything related to our software.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Rossana Alecu</span> - <Link className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Bolt Money</Link>
              </footer>
            </article>
            {/* 6th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="500">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src='/testimonial-06.jpg' width="48" height="48" alt="Testimonial 06" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">I have no tech skills and with Neon I can actually make good looking apps with ease.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Max Corsano</span> - <Link className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">MixTech</Link>
              </footer>
            </article>
            {/* 7th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="600">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src='/testimonial-07.jpg' width="48" height="48" alt="Testimonial 07" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">It&apos;s not just easier to get in touch with developers, it’s also easier to bring in other team members.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Anna Pratt</span> - <Link className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Cloud Inc</Link>
              </footer>
            </article>
            {/* 8th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="700">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src='/testimonial-08.jpg' width="48" height="48" alt="Testimonial 08" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">Tools like Neon Advanced Security help keep our team lean. It makes us much more efficient.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Veerle Larson</span> - <Link className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Prinso</Link>
              </footer>
            </article>
            {/* 9th Testimonial */}
            <article className="h-full flex flex-col bg-gray-800 p-6" data-aos="fade" data-aos-anchor="[data-aos-id-testimonials]" data-aos-delay="800">
              <header className="mb-4">
                <Image className="rounded-full shrink-0" src='/testimonial-09.jpg' width="48" height="48" alt="Testimonial 09" />
              </header>
              <div className="grow mb-3">
                <p className="text-gray-400">Neon enables speed and scale. We can work on bigger projects and finish them faster.</p>
              </div>
              <footer className="text-sm text-gray-400">
                <span className="text-gray-300">Ana Kennedy</span> - <Link className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out" href="#0">Syntax Inc</Link>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
