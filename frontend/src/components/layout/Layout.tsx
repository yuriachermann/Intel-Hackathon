import * as React from "react";
import { useState } from "react";

import Header from "~/components/layout/header/Header";
import Sidebar from "~/components/layout/Sidebar";
import { PreloadProvider } from "~/context/PreloadContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="-z-60 relative flex flex-1 select-none flex-col overflow-y-auto overflow-x-hidden min-h-screen bg-[#fff]">
        <div className="-z-50 fixed top-0 left-0 right-0 bottom-0 blobs" role="presentation">
          <div className="blob-rotate">
            <div className="blob-move">
              <div className="blob"/>
            </div>
          </div>
          <div className="blob-rotate">
            <div className="blob-move">
              <div className="blob"/>
            </div>
          </div>
          <div className="blob-rotate">
            <div className="blob-move">
              <div className="blob"/>
            </div>
          </div>
        </div>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <PreloadProvider>
          <div id="skip-nav" >{children}</div>
        </PreloadProvider>
        <span className="m-2 absolute bottom-0 h-4 self-center text-gray-200/30">
          © Yuri Achermann {new Date().getFullYear()}
        </span>
      </div>
    </>
  );
}
