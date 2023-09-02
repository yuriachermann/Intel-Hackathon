import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function DropdownProfile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(event.target as Node) ||
        trigger.current?.contains(event.target as Node)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            ref={trigger}
            className="group inline-flex items-center justify-center"
            aria-haspopup="true"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
          >
            <Image
              className="h-6 w-6 rounded-full"
              src="/user-avatar-32.png"
              width="32"
              height="32"
              alt="User"
            />
            <div className="flex items-center truncate">
              <span className="mx-2 truncate text-sm font-medium text-[#606060] group-hover:text-[#CC5500]">
              {/* TODO: Place username from route or "Username"*/}
                Username
              </span>
              <svg
                className="ml-1 h-3 w-3 shrink-0 fill-current text-[#606060]"
                viewBox="0 0 12 12"
              >
                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
              </svg>
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="z-30 mt-1 min-w-[140px] rounded-b-lg bg-[#3f3f3f] p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            <div className="mb-1 border-b border-slate-200 px-3 pb-2 pt-0.5">
              <div className="font-medium text-slate-200">[Team Placeholder]</div>
              <div className="text-xs italic text-slate-300">Administrator</div>
            </div>
            <ul>
              <li>
                <Link
                  className="flex items-center px-3 py-1 text-sm font-medium text-[#FF8C00] hover:text-[#CC5500]"
                  href="/profile"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-3 py-1 text-sm font-medium text-[#FF8C00] hover:text-[#CC5500]"
                  href="/settings"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center px-3 py-1 text-sm font-medium text-[#FF8C00] hover:text-[#CC5500]"
                  href="/signin"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Sign Out
                </Link>
              </li>
            </ul>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default DropdownProfile;
