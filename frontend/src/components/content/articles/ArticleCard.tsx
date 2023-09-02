import React, { useState } from "react";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
import Link from 'next/link'
interface ArticleCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  link: string;
}

const ArticleCard = ({
  id,
  title,
  excerpt,
  image,
  date,
  category,
  link,
}: ArticleCardProps) => {
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
      <div className="overflow-hidden rounded-lg bg-slate-800 shadow-md" data-aos="zoom-out">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Image
            className="w-full"
            src={image}
            alt={title}
            width={800}
            height={500}
          />
        </Link>
        <div className="p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-600">
            {category}
          </div>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <h2 className="mt-2 text-xl font-semibold">{title}</h2>
          </Link>
          <p className="mt-2 text-gray-600">{excerpt}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                className="mr-4 h-10 w-10 rounded-full"
                src={`https://picsum.photos/id/${id}/40`}
                alt={title}
                width={40}
                height={40}
              />
              <div className="text-sm">
                <p className="leading-none text-gray-900">{`Sydnei GPT`}</p>
                <p className="text-gray-600">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default ArticleCard;
