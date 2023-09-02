import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import LanguageDropDown from "./LanguageDropDown";

function Header({index}: {index?: boolean}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isExpandedSm, setIsExpandedSm] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsExpandedSm(false);
      }
    }

    // Adiciona o event listener ao montar o componente
    document.addEventListener("click", handleClickOutside);

    // Remove o event listener ao desmontar o componente
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, setIsExpandedSm]);


  return (
    <div className="opacity-1 fixed left-0 top-0 z-30 w-full bg-gray-900 shadow">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-12">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/*Logo */}
            <Link className="flex" href="/" aria-label="Logo">
              <Image src="/logo-simple2.png" alt="Logo" width={30} height={30} className={`opacity-${index ? '50':'100'}`}/>
              <Image
                priority
                className={`opacity-${index ? '50':'100'} ml-5`}
                src="/name-horizontal-light.svg"
                alt="LogoName"
                height={24}
                width={100}
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="relative hidden sm:block">
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow flex-row flex-wrap items-center justify-end">
                {/*<li>*/}
                {/*  <Link*/}
                {/*    className="mt-4 flex items-center px-3 font-medium text-gray-400 transition duration-150 ease-in-out hover:text-orange-500 sm:mt-0 lg:px-5"*/}
                {/*    href="/auth/signin"*/}
                {/*  >*/}
                {/*    {t("sign_in")}*/}
                {/*  </Link>*/}
                {/*</li>*/}
                {/*<li className="ml-3">*/}
                {/*  <Link*/}
                {/*    className="btn-sm group max-h-8 w-full bg-gradient-to-t from-orange-800 to-orange-700 text-white shadow-lg hover:to-orange-500"*/}
                {/*    href="#0"*/}
                {/*  >*/}
                {/*    {t("get_started")}{" "}*/}
                {/*    <span className="ml-1 tracking-normal text-orange-200 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">*/}
                {/*      -&gt;*/}
                {/*    </span>*/}
                {/*  </Link>*/}
                {/*</li>*/}
                <li className="px-3">
                  <LanguageDropDown />
                </li>
              </ul>
            </nav>
          </div>

          <div className="relative sm:hidden" ref={ref}>
            <button
              className="inline-flex items-center rounded-lg bg-orange-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              type="button"
              onClick={() => setIsExpandedSm(true)}
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isExpandedSm && (
              <div className="absolute right-0 top-0 z-10 w-28 origin-top-right divide-y divide-gray-100 rounded-lg bg-white text-white shadow dark:bg-gray-700">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {/*<li className="pr-1">*/}
                  {/*  <Link*/}
                  {/*    href="/auth/signin"*/}
                  {/*    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"*/}
                  {/*  >*/}
                  {/*    sign in*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                  {/*<li className="pr-1">*/}
                  {/*  <Link*/}
                  {/*    href="#"*/}
                  {/*    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"*/}
                  {/*  >*/}
                  {/*    get started*/}
                  {/*  </Link>*/}
                  {/*</li>*/}
                  <li className="pl-1 pr-2">
                    <LanguageDropDown />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
