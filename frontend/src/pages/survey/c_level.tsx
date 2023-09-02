import React, { useEffect } from "react";
import AOS from "aos";
import Header from "../../components/content/Header";
import Footer from "../../components/content/Footer";
import "aos/dist/aos.css";

const MetricsWeek = () => {
  return (
    <div>
      <div className="mt-5">
        <p>Orci varius</p>
        <div className="mt-4 h-1.5 rounded-full bg-blue-500" style={{ width: '45%' }}></div>
      </div>
      <div className="mt-5">
        <p>Vivamus et blandit magna</p>
        <div className="mt-4 h-1.5 rounded-full bg-blue-500" style={{ width: '90%' }}></div>
      </div>
    </div>
  )
}

const MetricsMonth = () => {
  return (
    <div>
      <div className="mt-5">
        <p>Donec euismod</p>
        <div className="mt-4 h-1.5 rounded-full bg-blue-500" style={{ width: '10%' }}></div>
      </div>
      <div className="mt-5">
        <p>Curabitur</p>
        <div className="mt-4 h-1.5 rounded-full bg-blue-500" style={{ width: '60%' }}></div>
      </div>
    </div>
  )
}

export default function Blogs() {
  const [filter, setFilter] = React.useState("week");
  const status = true;

  const currentMonth = new Date().toLocaleString("en", { month: "long" });

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  });

  /*function sparrowLaunch(opts: { [key: string]: any }): void {
    const e = "ss-widget";
    const t = "script";
    const a = document;
    const r = window;
    const l = localStorage;
    let s, n, c;
    const rm = a.getElementById("SS_SCRIPT");

    r.SS_WIDGET_TOKEN = "tt-j3s8GtAx8DbMn6XSFN9pSW";
    r.SS_ACCOUNT = "tool-detective.surveysparrow.com";
    r.SS_SURVEY_NAME = "C-Level-Survey";

    if (
      !a.getElementById(e) &&
      !l.getItem("removed-ss-widget-tt-j3s8GtAx8DbMn6XSFN9pSW")
    ) {
      const S = function () {
        S.update(arguments);
      };
      S.args = [];
      S.update = function (e: any) {
        S.args.push(e);
      };
      r.SparrowLauncher = S;
      s = a.getElementsByTagName(t);
      c = s[s.length - 1];
      n = a.createElement(t);
      n.type = "text/javascript";
      n.async = true;
      n.id = e;
      n.src = [
        "https://",
        "tool-detective.surveysparrow.com/widget/",
        r.SS_WIDGET_TOKEN,
        "?",
        "customParams=",
        JSON.stringify(opts),
      ].join("");
      c.parentNode.insertBefore(n, c);
      r.SS_VARIABLES = opts;
      rm.parentNode.removeChild(rm);
    }
  }
  sparrowLaunch({/!* add custom params here *!/});*/

  return(
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
        <div className="w-full relative overflow-hidden">
          <div className="relative mx-auto max-w-6xl sm:px-6">
            <div className="pt-24 pb-12 py-8 flex flex-wrap ">
              <div className="md:text-left px-4" data-aos="zoom-out">

              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
