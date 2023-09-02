import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <div>
      <div id="contact-us" className="relative mx-auto md:flex">
        <div className=" px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <h1
            className="pt-12 text-2xl font-bold tracking-tight text-gray-400 sm:text-3xl"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            {t("we_would_love_to_hear_from_you")} <br /> {t("get_in_touch")} 👋
          </h1>
          <div
            className="mx-auto max-w-lg sm:pt-8"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <p className="mt-3 text-lg leading-6 text-gray-500">
              {t("contact_info")}
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="flex gap-3">
                <MapPinIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <dt className="sr-only">{t("postal_adress")}</dt>
                <dd>
                  {/*<p>{t('steinbachstrasse_17')}</p>*/}
                  <p>{t("city")}</p>
                </dd>
              </div>
              <div className="mt-3">
                <dd className="flex">
                  <PhoneIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{t("phone_number")}</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">{t("email_text")}</dt>
                <dd className="flex">
                  <EnvelopeIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">{t("email")}</span>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              {t("looking_for_careers")}{" "}
              <Link
                href="/company/jobs"
                className="font-medium text-gray-700 underline"
              >
                {t("view_all_job_openings")}
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
          <h3
            className="font text-lg tracking-tight text-gray-400 sm:pt-24 sm:text-lg"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            Specify your personal information and the message:
          </h3>
          <div
            className="mx-auto max-w-lg pt-12 lg:max-w-none"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  {t("full_name")}
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  {t("message_tag")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  {t("phone_text")}
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  {t("message_tag")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn group w-full bg-gradient-to-t from-orange-800 to-orange-700 text-white shadow-lg hover:to-orange-500"
                >
                  {t("submit_button")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
