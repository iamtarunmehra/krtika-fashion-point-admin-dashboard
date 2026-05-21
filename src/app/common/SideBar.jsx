"use client";
import React from "react";
import { HeaderData } from "../api_data/Headermenu";
import Link from "next/link";

export default function SideBar() {
  return (
    <div>
      {/* Sidebar */}
      <div
        className="
      min-h-screen
      bg-[#0b0b0b]
      border-r border-[#1f1f1f]
      px-3 py-5
    "
      >
        <ul className="flex flex-col gap-2">
          {HeaderData?.map((item, index) => (
            <Link key={index} href={item.slug}>
              <li
                className="
              group
              flex items-center gap-4
              lg:px-4 py-4
              rounded-2xl
              text-[#cfcfcf]
              hover:bg-linear-to-r
              hover:from-[#1a1a1a]
              hover:to-[#111111]
              hover:text-[#f5d36b]
              border border-transparent
              hover:border-[#2d2410]
              duration-300
              cursor-pointer
              font-medium
              tracking-wide
            "
              >
                {/* Icon */}
                <span
                  className="
                text-2xl
                group-hover:scale-110
                duration-300
              "
                >
                  {item.icon}
                </span>

                {/* Title */}
                <span className="text-md xl:block hidden capitalize font-bold">
                  {item.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
