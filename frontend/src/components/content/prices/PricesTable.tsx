import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

const PricesTableMd = () => {
  return (
    <div className="relative overflow-x-auto rounded-lg">
      <table className="w-full text-left text-sm  text-gray-400 ">
        <thead className="bg-gray-700 text-xs  uppercase text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Plans
            </th>
            <th scope="col" className="px-6 py-3">
              Starter
            </th>
            <th scope="col" className="px-6 py-3">
              Business
            </th>
            <th scope="col" className="px-6 py-3">
              Enterprise
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-white"
            >
              Lorem ipsum dolor sit amet
            </th>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
          </tr>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium  text-white"
            >
              Nulla quis arcu
            </th>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
          </tr>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-white"
            >
              Lorem ipsum dolor sit amet
            </th>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
          </tr>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium  text-white"
            >
              Nulla quis arcu
            </th>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
          </tr>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-white"
            >
              Lorem ipsum dolor sit amet
            </th>
            <td className="px-6 py-4">
              {" "}
              <XMarkIcon
                className="ml-4 h-5 w-5 text-red-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
          </tr>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium  text-white"
            >
              Nulla quis arcu
            </th>
            <td className="px-6 py-4">
              {" "}
              <XMarkIcon
                className="ml-4 h-5 w-5 text-red-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
          </tr>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-white"
            >
              Lorem ipsum dolor sit amet
            </th>
            <td className="px-6 py-4">
              {" "}
              <XMarkIcon
                className="ml-4 h-5 w-5 text-red-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
          </tr>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium  text-white"
            >
              Nulla quis arcu
            </th>
            <td className="px-6 py-4">
              {" "}
              <XMarkIcon
                className="ml-4 h-5 w-5 text-red-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <XMarkIcon
                className="ml-4 h-5 w-5 text-red-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
          </tr>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium text-white"
            >
              Lorem ipsum dolor sit amet
            </th>
            <td className="px-6 py-4">
              {" "}
              <XMarkIcon
                className="ml-4 h-5 w-5 text-red-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <XMarkIcon
                className="ml-4 h-5 w-5 text-red-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
          </tr>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th
              scope="row"
              className="whitespace-nowrap px-6 py-4 font-medium  text-white"
            >
              Nulla quis arcu
            </th>
            <td className="px-6 py-4">
              {" "}
              <XMarkIcon
                className="ml-4 h-5 w-5 text-red-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <XMarkIcon
                className="ml-4 h-5 w-5 text-red-600"
                aria-hidden="true"
              />{" "}
            </td>
            <td className="px-6 py-4">
              {" "}
              <CheckIcon
                className="ml-4 h-4 w-4 text-green-600"
                aria-hidden="true"
              />{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const PricesTableSm = () => {
  return (
    <div className="relative overflow-x-auto rounded-lg sm:block">
      <div className="grid grid-cols-4 bg-gray-700 text-xs uppercase text-gray-400">
        <div className="px-4 py-3">Plans</div>
        <div className="px-4 py-3">Starter</div>
        <div className="px-4 py-3">Business</div>
        <div className="px-4 py-3">Enterprise</div>
      </div>
      <div className="grid grid-cols-4">
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4 font-medium text-white">
          Lorem ipsum dolor sit amet
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>{" "}
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4 font-medium text-white">
          Nulla quis arcu
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>{" "}
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="bg-gray-800 px-6 py-4 font-medium text-white">
          Proin
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>{" "}
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">
          Nulla quis arcu
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>{" "}
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">
          Nulla quis arcu
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <XMarkIcon className="ml-4 h-5 w-5 text-red-600" aria-hidden="true" />
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>{" "}
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">
          Nulla quis arcu
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <XMarkIcon className="ml-4 h-5 w-5 text-red-600" aria-hidden="true" />
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>{" "}
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">
          Nulla quis arcu
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <XMarkIcon className="ml-4 h-5 w-5 text-red-600" aria-hidden="true" />
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>{" "}
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">
          Nulla quis arcu
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <XMarkIcon className="ml-4 h-5 w-5 text-red-600" aria-hidden="true" />
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <XMarkIcon className="ml-4 h-5 w-5 text-red-600" aria-hidden="true" />
        </div>{" "}
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">
          Nulla quis arcu
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <XMarkIcon className="ml-4 h-5 w-5 text-red-600" aria-hidden="true" />
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <XMarkIcon className="ml-4 h-5 w-5 text-red-600" aria-hidden="true" />
        </div>{" "}
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">
          Nulla quis arcu
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <XMarkIcon className="ml-4 h-5 w-5 text-red-600" aria-hidden="true" />
        </div>
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <XMarkIcon className="ml-4 h-5 w-5 text-red-600" aria-hidden="true" />
        </div>{" "}
        <div className="grid content-center border-b border-gray-700 bg-gray-800 px-6 py-4">
          <CheckIcon
            className="ml-4 h-4 w-4 text-green-600"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

const PricesTable = () => {
  return (
    <div className="overflow-y-auto pb-4">
      <div className="p-4">
        <h2 className="mt-1 pb-3 text-xl  text-white md:text-2xl">
          Take a closer look at it
        </h2>
        <h3 className="pb-5 text-xl font-medium text-gray-500 dark:text-gray-400 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          arcu quis nibh fermentum vestibulum. Proin ac malesuada metus, vitae
          aliquet lacus. Nullam ac ipsum velit.{" "}
        </h3>
      </div>

      <div className="block p-4 sm:hidden">
        <PricesTableSm />
      </div>
      <div className="hidden p-4 sm:block">
        <PricesTableMd />
      </div>
    </div>
  );
};

export default PricesTable;
