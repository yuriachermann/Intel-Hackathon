import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

interface JobCardProps {
  title: string;
  location: string;
  requirements: string;
  description: string;
  date: string;
  new_tag: boolean;
}

const JobCard = ({
  title,
  location,
  requirements,
  description,
  date,
  new_tag,
}: JobCardProps) => {
  const [hovered, setHovered] = useState(false);

  const scale = useSpring({
    transform: hovered ? "scale(1.02)" : "scale(1)",
  });

  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-aos="zoom-in"
      style={scale}
      className="flex flex-row rounded-lg bg-slate-800 shadow-md"
    >
      <div className="overflow-hidden rounded-lg bg-slate-800 shadow-md cursor-pointer" style={{ maxHeight: "400px" }}>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">{title}</h3>
            <span className={`inline-flex rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 ${new_tag ? '' : 'hidden'}`}>
              New
            </span>
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500">Location: {location}</p>
          </div>
          <div className="mt-3">
            <p className="text-sm text-gray-300">{description}</p>
          </div>

          <div className="mt-3">
            <p className="text-sm text-gray-300">{requirements}</p>
          </div>

          <div className="mt-3">
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default JobCard;
