import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

const LanguageDropDown = () => {
  const { i18n } = useTranslation();

  return (
    <div className="relative">
      <select
        id="language"
        name="language"
        className="block w-full appearance-none rounded-md border border-transparent bg-gray-800 bg-none pl-3 pr-8 text-base text-white focus:border-white focus:outline-none focus:ring-white sm:text-sm"
        defaultValue="english"
        onChange={(event) => {
          void i18n.changeLanguage(event.target.value)
          console.log(event.target.value)
        }}
      >
        <option value="en">🇺🇸</option>
        <option value="de">🇩🇪</option>
        <option value="es">🇪🇸</option>
        <option value="pt">🇧🇷</option>
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 z-10">
        <ChevronDownIcon
          className="h-4 w-4 text-white"
          aria-hidden="true"
        />
      </div>
    </div>

  )
}
export default LanguageDropDown