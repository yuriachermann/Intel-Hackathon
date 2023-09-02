import { useState } from "react";

type AccordionProps = {
  title: string;
};

const Accordion = ({ title }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pt-2">
      <div
        className="flex justify-between items-center py-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <svg
          className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          />
        </svg>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="py-4 text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id elementum lacus. Etiam id sapien eget diam
          posuere aliquet a quis purus. Maecenas et velit sit amet leo tempor auctor. Donec in ex ante. Ut ac mi porta turpis
          auctor dictum. Suspendisse maximus odio at neque pretium, sit amet laoreet tellus finibus. In ornare ante sed massa
          maximus, et sodales neque rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis risus eget
          orci rhoncus tincidunt. Proin venenatis ipsum id viverra bibendum. Vivamus rhoncus a urna in gravida. Sed eu dolor orci.
          Nulla eget condimentum libero. Nunc fringilla sodales massa. Nullam eget nisl ipsum. Duis efficitur porta erat ac placerat.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
