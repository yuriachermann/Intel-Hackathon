import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next'
import Link from "next/link";

function Cta() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
        {/* CTA box */}
        <div className="relative bg-gradient-to-tr from-blue-600 to-green-700 rounded py-10 px-8 md:py-16 md:px-12 overflow-hidden" data-aos="zoom-out">
          {/* Bg illustration */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 mt-4 -z-10" aria-hidden="true">
            <Image src='/cta-illustration.svg' className="max-w-none" width="582" height="662" alt="Illustration" />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <h3 className="text-4xl font-bold font-uncut-sans mb-2">{t('get_started_with_tool_detective')}</h3>
              <p className="text-blue-200">{t('it_only_takes_a_few_minutes_to_start_with_tool_detective')}</p>
            </div>
            {/* CTA button */}
            <div className="shrink-0">
              <Link className="btn-sm text-white bg-gradient-to-t from-blue-900 to-blue-700 hover:to-blue-800 w-full group shadow-lg" href="#">
                {t('start_free_trial')} <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Cta;
