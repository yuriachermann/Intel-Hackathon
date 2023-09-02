import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";
import "../styles/global.css";
import "../i18n/index";
import { Analytics } from '@vercel/analytics/react'
// import { Inter } from 'next/font/google'
//
// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap'
// })

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div
        className={`select-none font-inter tracking-tight text-slate-100 antialiased`}
      >
        <Component {...pageProps} />
        <Analytics />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
