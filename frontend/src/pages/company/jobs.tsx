import React, { useEffect } from "react";
import AOS from "aos";
import Header from "../../components/content/Header";
import Footer from "../../components/content/Footer";
import "aos/dist/aos.css";
import JobCard from "../../components/content/jobs/JobCard";
import { useTranslation } from "react-i18next";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";

const jobs = [
  {
    title: "Frontend Developer",
    location: "Remote",
    description: "We are looking for an experienced frontend developer...",
    requirements: "Strong knowledge of HTML, CSS, JavaScript, React...",
    date: "Posted 2 days ago",
    new_tag: true,
  },
  {
    title: "Backend Developer",
    location: "Remote",
    description: "We are seeking a skilled backend developer...",
    requirements: "Strong knowledge of Node.js, MongoDB, REST APIs...",
    date: "Posted 5 days ago",
    new_tag: true,
  },
  {
    title: "Chat GPT Expert",
    location: "Remote",
    description:
      "We are looking for a chatgpt expert to be able tto use the tool at the limit...",
    requirements: "Strong knowledge writing...",
    date: "Posted 1 week ago",
    new_tag: false,
  },
  {
    title: "Full Stack Developer 2",
    location: "Remote",
    description: "We are looking for a full stack developer...",
    requirements:
      "Strong knowledge of HTML, CSS, JavaScript, Node.js, React...",
    date: "Posted 1 week ago",
    new_tag: false,
  },
  {
    title: "Brasilianisch Hiwi",
    location: "Remote",
    description:
      "for a person who does everything without fear of new challenges and likes to work overtime...",
    requirements: "Strong knowledge of CAD, Python, Handmade projects...",
    date: "Posted 1 week ago",
    new_tag: false,
  },
  {
    title: "Human Resources",
    location: "Remote",
    description:
      "for a person who enjoys dealing with large and diverse groups...",
    requirements: "Strong knowledge HR concepts and be beautiful...",
    date: "Posted 1 week ago",
    new_tag: false,
  },
];

export default function Jobs() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-slate-900">
      <Head>
        <title>Tool Detective | Jobs</title>
      </Head>
      <Header />
      <main className="grow">
        <div className="relative w-full overflow-hidden">
          <div className="relative mx-auto max-w-6xl sm:px-6">
            <div className="flex flex-wrap py-8 pb-12 pt-24 ">
              <div className="px-4 md:text-left" data-aos="zoom-out">
                <div className="flex flex-row items-center gap-6">
                  <h1 className="text-4xl font-bold text-white md:text-5xl">
                    Jobs at
                  </h1>
                  <Image
                    src={"/name-horizontal-light.svg"}
                    alt="LogoName"
                    height={50}
                    width={200}
                  />
                </div>
                <h3 className="mt-2 text-xl font-medium text-gray-500 dark:text-gray-400 md:text-2xl">
                  We are looking for new partners
                </h3>
                <br />
                <h5>
                  At our company, we&apos;re constantly on the lookout for fresh
                  talent, innovative thinkers, and dedicated individuals who are
                  as passionate about technology as we are. We&apos;re excited to
                  announce that we currently have several job openings across
                  different roles and teams.
                  <br />
                  Our team is made up of a diverse group of professionals who
                  strive to create cutting-edge solutions and drive impactful
                  changes in our industry. We are committed to fostering a
                  nurturing, inclusive environment where everyone feels valued
                  and has the opportunity to grow professionally.
                  <br />
                  <br />
                  We invite you to explore the opportunities available at our
                  company. If you&apos;re ready to take on the challenge and be part
                  of an organization that values innovation, collaboration, and
                  performance, then we want to hear from you.
                </h5>

                <div className="mt-10 flex items-center gap-8">
                  <h3 className="mt-2 text-xl font-medium text-gray-500 dark:text-gray-400 md:text-2xl">
                    Contact us via email
                  </h3>
                  <dt className="sr-only">{t("email_text")}</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">{t("email")}</span>
                  </dd>
                </div>

                <div
                  className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                  data-aos="zoom-out"
                >
                  {jobs.map((job) => (
                    <JobCard
                      key={job.title}
                      title={job.title}
                      location={job.location}
                      requirements={job.requirements}
                      description={job.description}
                      date={job.date}
                      new_tag={job.new_tag}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
