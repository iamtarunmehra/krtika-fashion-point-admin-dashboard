"use client";

import React from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import SideBar from "./SideBar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  const path = usePathname();

  const hideHeader = path === "/" || path === "/verify-otp";

  return (
    <Provider store={store}>
      {hideHeader ? (
        children
      ) : (
        <>
          <Header />

          <div
            className="
              grid
              lg:grid-cols-[15%_auto]
              sm:grid-cols-[10%_auto]
              
            "
          >
            <SideBar />

            <div className="min-h-screen">{children}</div>
          </div>

          {/* <Footer /> */}
        </>
      )}
    </Provider>
  );
}
