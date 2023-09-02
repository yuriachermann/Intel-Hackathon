import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TroubleshootOutlinedIcon from "@mui/icons-material/TroubleshootOutlined";

import SidebarLinkGroup from "./SidebarLinkGroup";

function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}) {
  const location = useRouter();
  const { pathname } = location;

  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const storedSidebarExpanded =
    typeof window !== "undefined"
      ? localStorage.getItem("sidebar-expanded")
      : false;
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as HTMLInputElement;
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", String(sidebarExpanded));
    if (sidebarExpanded && document.querySelector("body")) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 z-40 bg-slate-700 bg-opacity-30 transition-opacity duration-200 lg:z-auto lg:hidden ${
          sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`no-scrollbar lg:sidebar-expanded:!w-52 absolute left-0 top-0 z-40 flex h-screen w-64 shrink-0 flex-col overflow-y-scroll border-r border-slate-800 bg-slate-800 p-4 shadow-md shadow-black transition-all duration-200 ease-in-out lg:left-auto lg:top-auto lg:hidden lg:w-20 lg:translate-x-0 lg:overflow-y-auto 2xl:!w-64 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="mb-4 flex justify-between pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="text-slate-500 hover:text-slate-400 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Link href="/" className="block">
            <Image src="/logo.png" width={30} height={30} alt="FT WAY" />
          </Link>
        </div>

        {/* Expand / collapse button */}
        <div className="hidden justify-end border-b border-slate-600 lg:inline-flex 2xl:hidden">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="sidebar-expanded:rotate-180 h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="pl-3 text-xs font-semibold uppercase text-slate-500">
              <span
                className="lg:sidebar-expanded:hidden mt-2 hidden w-6 text-center lg:block 2xl:hidden"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:sidebar-expanded:block pt-2 lg:hidden 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-2">
              {/* Builds */}
              <SidebarLinkGroup activecondition={pathname.includes("builds")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                          pathname === "/" || pathname.includes("builds")
                            ? "hover:text-slate-200"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <HomeOutlinedIcon />
                            <span className="lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                              Builds
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="ml-2 flex shrink-0">
                            <svg
                              className={`ml-1 h-3 w-3 shrink-0 fill-current text-slate-400 ${
                                open ? "" : "rotate-90"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:sidebar-expanded:block lg:hidden 2xl:block">
                        <ul className={`mt-1 pl-9 ${!open ? "hidden" : ""}`}>
                          <li className="mb-1 last:mb-0">
                            <Link
                              href="/builds"
                              className={
                                "block truncate text-slate-400 transition duration-150 hover:text-slate-200 " +
                                (pathname === "/" || pathname.includes("builds")
                                  ? "!text-indigo-500"
                                  : "")
                              }
                            >
                              <span className="lg:sidebar-expanded:opacity-100 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                                Main
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Inventory */}
              <SidebarLinkGroup
                activecondition={pathname.includes("inventory")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                          pathname === "/detect" || pathname.includes("detect")
                            ? "hover:text-slate-200"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <TroubleshootOutlinedIcon />
                            <span className="lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                              Inventory
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="ml-2 flex shrink-0">
                            <svg
                              className={`ml-1 h-3 w-3 shrink-0 fill-current text-slate-400 ${
                                open ? "" : "rotate-90"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:sidebar-expanded:block lg:hidden 2xl:block">
                        <ul className={`mt-1 pl-9 ${!open ? "hidden" : ""}`}>
                          <li className="mb-1 last:mb-0">
                            <Link
                              href="/detect"
                              className={
                                "block truncate text-slate-400 transition duration-150 hover:text-slate-200 " +
                                (pathname === "/detect" ||
                                pathname.includes("detect")
                                  ? "!text-indigo-500"
                                  : "")
                              }
                            >
                              <span className="lg:sidebar-expanded:opacity-100 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                                Detect
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Dashboard */}
              <SidebarLinkGroup
                activecondition={
                  pathname === "/dashboard" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                          pathname === "/dashboard" ||
                          pathname.includes("dashboard")
                            ? "hover:text-slate-200"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="h-6 w-6 shrink-0"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname === "/dashboard" ||
                                  pathname.includes("dashboard")
                                    ? "!text-indigo-500"
                                    : ""
                                }`}
                                d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                              />
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname === "/dashboard" ||
                                  pathname.includes("dashboard")
                                    ? "text-indigo-600"
                                    : ""
                                }`}
                                d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                              />
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname === "/dashboard" ||
                                  pathname.includes("dashboard")
                                    ? "text-indigo-200"
                                    : ""
                                }`}
                                d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                              />
                            </svg>
                            <span className="lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                              Dashboard
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="ml-2 flex shrink-0">
                            <svg
                              className={`ml-1 h-3 w-3 shrink-0 fill-current text-slate-400 ${
                                open ? "" : "rotate-90"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:sidebar-expanded:block lg:hidden 2xl:block">
                        <ul className={`mt-1 pl-9 ${!open ? "hidden" : ""}`}>
                          <li className="mb-1 last:mb-0">
                            <Link
                              href="/dashboard"
                              className={
                                "block truncate text-slate-400 transition duration-150 hover:text-slate-200 " +
                                (pathname === "/dashboard/main" ||
                                pathname.includes("dashboard")
                                  ? "!text-indigo-500"
                                  : "")
                              }
                            >
                              <span className="lg:sidebar-expanded:opacity-100 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                                Main
                              </span>
                            </Link>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <Link
                              href="/dashboard/analytics"
                              className={
                                "block truncate text-slate-400 transition duration-150 hover:text-slate-200 " +
                                (pathname === "/dashboard/analytics" ||
                                pathname.includes("dashboard/analytics")
                                  ? "!text-indigo-500"
                                  : "")
                              }
                            >
                              <span className="lg:sidebar-expanded:opacity-100 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                                Analytics
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* E-Commerce */}
              <SidebarLinkGroup
                activecondition={pathname.includes("resources")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                          pathname.includes("resources")
                            ? "hover:text-slate-200"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="h-6 w-6 shrink-0"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes("resources")
                                    ? "text-indigo-300"
                                    : ""
                                }`}
                                d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                              />
                              <path
                                className={`fill-current text-slate-700 ${
                                  pathname.includes("resources")
                                    ? "!text-indigo-600"
                                    : ""
                                }`}
                                d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                              />
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes("resources")
                                    ? "text-indigo-500"
                                    : ""
                                }`}
                                d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                              />
                            </svg>
                            <span className="lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                              Resources
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="ml-2 flex shrink-0">
                            <svg
                              className={`ml-1 h-3 w-3 shrink-0 fill-current text-slate-400 ${
                                open ? "" : "rotate-90"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:sidebar-expanded:block lg:hidden 2xl:block">
                        <ul className={`mt-1 pl-9 ${!open ? "hidden" : ""}`}>
                          <li className="mb-1 last:mb-0">
                            <Link
                              href="/resources/customers"
                              className={
                                "block truncate text-slate-400 transition duration-150 hover:text-slate-200 " +
                                (pathname.includes("resources")
                                  ? "!text-indigo-500"
                                  : "")
                              }
                            >
                              <span className="lg:sidebar-expanded:opacity-100 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                                Customers
                              </span>
                            </Link>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <Link
                              href="/resources/orders"
                              className={
                                "block truncate text-slate-400 transition duration-150 hover:text-slate-200 " +
                                (pathname.includes("resources")
                                  ? "!text-indigo-500"
                                  : "")
                              }
                            >
                              <span className="lg:sidebar-expanded:opacity-100 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                                Orders
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* Team */}
              <SidebarLinkGroup activecondition={pathname.includes("team")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block truncate text-slate-200 transition duration-150 hover:text-white ${
                          pathname.includes("team")
                            ? "hover:text-slate-200"
                            : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="h-6 w-6 shrink-0"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes("team")
                                    ? "text-indigo-500"
                                    : ""
                                }`}
                                d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                              />
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes("team")
                                    ? "text-indigo-300"
                                    : ""
                                }`}
                                d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                              />
                            </svg>
                            <span className="lg:sidebar-expanded:opacity-100 ml-3 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                              Team
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="ml-2 flex shrink-0">
                            <svg
                              className={`ml-1 h-3 w-3 shrink-0 fill-current text-slate-400 ${
                                open ? "" : "rotate-90"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:sidebar-expanded:block lg:hidden 2xl:block">
                        <ul className={`mt-1 pl-9 ${!open ? "hidden" : ""}`}>
                          <li className="mb-1 last:mb-0">
                            <Link
                              href="/team/users-tabs"
                              className={
                                "block truncate text-slate-400 transition duration-150 hover:text-slate-200 " +
                                (pathname.includes("team")
                                  ? "!text-indigo-500"
                                  : "")
                              }
                            >
                              <span className="lg:sidebar-expanded:opacity-100 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                                Users - Tabs
                              </span>
                            </Link>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <Link
                              href="/team/users-tiles"
                              className={
                                "block truncate text-slate-400 transition duration-150 hover:text-slate-200 " +
                                (pathname.includes("team")
                                  ? "!text-indigo-500"
                                  : "")
                              }
                            >
                              <span className="lg:sidebar-expanded:opacity-100 text-sm font-medium duration-200 lg:opacity-0 2xl:opacity-100">
                                Users - Tiles
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
