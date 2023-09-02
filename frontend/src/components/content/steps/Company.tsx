import React from "react";

const InputsLeft = () => {
  return (
    <div className="pt-4 flex flex-col md:flex-row md:justify-between">
      <div className="mb-4 md:mb-0 md:mr-4">
        <label
          htmlFor="quantity"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Select the number of machines
        </label>
        <select
          id="quantity"
          className="blue-500 w-full md:w-48 rounded-lg border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        >
          <option>1-3</option>
          <option>3-5</option>
          <option>5-10</option>
          <option>10+</option>
        </select>
      </div>
      <div className="mb-4 md:mb-0 md:mr-4">
        <label
          htmlFor="quantity"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Select the number of machines
        </label>
        <select
          id="quantity"
          className="blue-500 w-full md:w-48 rounded-lg border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        >
          <option>1-3</option>
          <option>3-5</option>
          <option>5-10</option>
          <option>10+</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="quantity"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Select the number of machines
        </label>
        <select
          id="quantity"
          className="blue-500 w-full md:w-48 rounded-lg border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
        >
          <option>1-3</option>
          <option>3-5</option>
          <option>5-10</option>
          <option>10+</option>
        </select>
      </div>
    </div>
  );
};
function Company() {
  return (
    <div>
      <h2 className="mt-1 pb-3 text-xl  text-white md:text-2xl">
        Company Information
      </h2>
      <h3 className="pb-5 text-xl font-medium text-gray-500 dark:text-gray-400 md:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis arcu
        quis nibh fermentum vestibulum. Proin ac malesuada metus, vitae aliquet
        lacus. Nullam ac ipsum velit.{" "}
      </h3>

      <div className="flex flex-col">
        <div className=" w-full">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Describe your company
          </label>
          <textarea
            id="description"
            rows={6}
            className="block w-full rounded-lg border border-gray-300 border-gray-600 bg-gray-700  p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
          <InputsLeft />
        </div>
      </div>
    </div>
  );
}

export default Company;
