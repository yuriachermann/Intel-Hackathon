import React from 'react';
import Link from "next/link";


function ApplicationCard() {

  return (
    <div className="relative rounded flex flex-col h-full p-6 bg-gray-800"
         style={{ maxWidth: '420px', width: '100%' }}
         data-aos="zoom-out" data-aos-delay="100">
      <div className="">
        <div className="text-lg font-semibold mb-1">About the stacks</div>
        <div className="font-uncut-sans inline-flex items-baseline mb-2">
        </div>
        <div className="text-gray-400 mb-6 break-words">
          We use a combination of AI, computer vision and feedback control theory to measure
          the wear on cutting tools that are inside your CNC machine while they are cutting and
          send you the data via a cloud based platform.
        </div>
      </div>
      <ul className="text-gray-400 space-y-3 grow">
        <li className="flex items-center">
          <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Consectetur adipiscing elit</span>
        </li>
        <li className="flex items-center">
          <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Consectetur adipiscing elit</span>
        </li>
        <li className="flex items-center">
          <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Excepteur sint occaecat cupidatat</span>
        </li>
        <li className="flex items-center">
          <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Officia deserunt mollit anim</span>
        </li>
        <li className="flex items-center">
          <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Excepteur sint occaecat cupidatat</span>
        </li>
        <li className="flex items-center">
          <svg className="w-3 h-3 fill-current text-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
          </svg>
          <span>Officia deserunt mollit anim</span>
        </li>
      </ul>
      <div className="p-3">
        <Link className="btn-sm text-white bg-gradient-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group" href="#">
          See the organization on github
        </Link>
      </div>
    </div>
  )
}

export default ApplicationCard;
