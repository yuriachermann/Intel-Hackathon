import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useTranslation } from 'react-i18next'
import React from 'react'

export default function ClaimForm() {
  const { t } = useTranslation();

  return (
    <div>
      <div id="contact-us" className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div className="px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-12 xl:pr-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-400 sm:text-5xl pt-12">
            Claim Forms
          </h1>
          <div className="sm:pt-8 mx-auto max-w-lg" data-aos="zoom-out" data-aos-delay="100">
            <h5 className="pb-4 text-justify text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus hendrerit, nulla et fringilla consequat, dolor erat
              hendrerit nibh, iaculis rhoncus nisl mauris non ante.
            </h5>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">{t('postal_adress')}</dt>
                <dd>
                  <p>{t('steinbachstrasse_17')}</p>
                  <p>{t('city')}</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">{t('phone_text')}</dt>
                <dd className="flex">
                  <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">{t('phone_number')}</span>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">{t('email_text')}</dt>
                <dd className="flex">
                  <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">{t('email')}</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className=" py-4 px-8 sm:px-6 lg:col-span-3 lg:py-12 lg:px-8 xl:pl-12">
          <div className="md:pt-12 mx-auto max-w-lg lg:max-w-none" data-aos="zoom-out" data-aos-delay="100">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">
                  {t('full_name')}
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  {t('message_tag')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  {t('phone_text')}
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  {t('message_tag')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  {t('submit_button')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}