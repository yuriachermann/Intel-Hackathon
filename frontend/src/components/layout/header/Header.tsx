import * as HoverCard from "@radix-ui/react-hover-card";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Notifications from "~/components/layout/header/DropdownNotifications";
import UserMenu from "~/components/layout/header/DropdownProfile";

function Header({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const location = useRouter();
  const { pathname } = location;

  return (
    <header className="sticky top-0 z-10 bg-gradient-to-b from-[#fff] from-55% to-transparent">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex h-10 items-center justify-between">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
            <Link href="/" className="flex flex-row items-center gap-4">
              <Image
                src="/logo/logo.png"
                alt="logo"
                className="h-6 w-auto"
                width={10}
                height={10}
              />
              <Image
                src="/logo/name_horizontal.svg"
                alt="name"
                className="h-3.5 w-auto"
                width={10}
                height={10}
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex flex-row items-center justify-center gap-8">
              <Link href="/builds">
                <span
                  className={clsx(
                    "text-[#606060] hover:text-[#EEEEEE]",
                    pathname.includes("builds") && "!text-[#CC5500]",
                  )}
                >
                  Builds
                </span>
              </Link>
              <Link href="/inventory">
                <span
                  className={clsx(
                    "text-[#606060] hover:text-[#EEEEEE]",
                    pathname.includes("inventory") && "!text-[#CC5500]",
                  )}
                >
                  Inventory
                </span>
              </Link>
              <HoverCard.Root>
                <HoverCard.Trigger asChild>
                  <span
                    className={clsx(
                      "text-[#606060] hover:text-[#EEEEEE]",
                      pathname.includes("community") && "!text-[#CC5500]",
                    )}
                  >
                    Community
                  </span>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <HoverCard.Content
                    className="rounded-md bg-gray-700 p-3 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade data-[state=open]:transition-all"
                    sideOffset={1}
                  >
                    <div className="flex flex-col gap-[7px]">
                      Coming soon...
                    </div>

                    <HoverCard.Arrow className="fill-gray-700" />
                  </HoverCard.Content>
                </HoverCard.Portal>
              </HoverCard.Root>
            </div>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:block">
              <button
                className={`flex h-6 w-6 items-center justify-center rounded-full bg-[#606060] transition duration-150 hover:bg-[#505050] ${
                  searchModalOpen ? "bg-[#606060]" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                aria-controls="search-modal"
              >
                <span className="sr-only">Search</span>
                <svg
                  className="h-3 w-3"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-slate-300"
                    d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                  />
                  <path
                    className="fill-current text-slate-400"
                    d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                  />
                </svg>
              </button>
            </div>
            <Notifications />
            <hr className="hidden lg:block mx-2 h-6 w-px bg-slate-200" />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
