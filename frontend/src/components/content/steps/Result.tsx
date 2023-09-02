import React from "react";

const ResultsMd = () => {
  return (
    <div className="relative overflow-x-auto rounded-lg">
      <table className="w-full text-left text-sm  text-gray-400 ">
        <thead className="text-xs uppercase  bg-gray-700 text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Solutions
          </th>
          <th scope="col" className="px-6 py-3">
            IA
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
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
          <td className="px-6 py-4">Donec </td>
          <td className="px-6 py-4">Maecenas </td>
          <td className="px-6 py-4">$2999</td>
        </tr>
        <tr className="border-b border-gray-700 bg-gray-800">
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium  text-white"
          >
            Nulla quis arcu
          </th>
          <td className="px-6 py-4">Vivamus </td>
          <td className="px-6 py-4">Phasellus</td>
          <td className="px-6 py-4">$1999</td>
        </tr>
        <tr className="bg-gray-800">
          <th
            scope="row"
            className="whitespace-nowrap px-6 py-4 font-medium text-white"
          >
            Proin
          </th>
          <td className="px-6 py-4">Adipiscing</td>
          <td className="px-6 py-4">Consequat </td>
          <td className="px-6 py-4">$99</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

const ResultsSm = () => {
  return (
    <div className="relative overflow-x-auto rounded-lg sm:block">
      <div className="grid grid-cols-4 text-xs uppercase bg-gray-700 text-gray-400">
        <div className="px-6 py-3">Solutions</div>
        <div className="px-6 py-3">IA</div>
        <div className="px-6 py-3">Category</div>
        <div className="px-6 py-3">Price</div>
      </div>
      <div className="grid grid-cols-4">
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4 font-medium text-white">Lorem ipsum dolor sit amet</div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">Donec</div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">Maecenas</div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">$2999</div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4 font-medium text-white">Nulla quis arcu</div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">Vivamus</div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">Phasellus</div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">$1999</div>
        <div className="bg-gray-800 px-6 py-4 font-medium text-white">Proin</div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">Adipiscing</div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">Consequat</div>
        <div className="border-b border-gray-700 bg-gray-800 px-6 py-4">$99</div>
      </div>
    </div>
  )
}

const Result = () => {
  const isMobile = window.innerWidth < 640;

  return (
    <div className="overflow-y-auto">
      <div>
        <h2 className="mt-1 pb-3 text-xl  text-white md:text-2xl">
          Your Results
        </h2>
        <h3 className="pb-5 text-xl font-medium text-gray-500 dark:text-gray-400 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis arcu
          quis nibh fermentum vestibulum. Proin ac malesuada metus, vitae aliquet
          lacus. Nullam ac ipsum velit.{" "}
        </h3>
      </div>

      {isMobile ? (<ResultsSm />) : (<ResultsMd />)}

    </div>
  );
}

export default Result;
