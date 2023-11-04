"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "./ui/button";
import navLinks from "../constants";
import { menu, close } from "../public/assets";

export const NavBar = () => {
  const { isSignedIn, signOut } = useAuth();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <div className="mx-9">
        <Link href="/">
          <div className="relative h-24 w-24 mx-5">
            <Image
              fill
              src="/assets/logo.png"
              alt="Logo"
            />
          </div>
        </Link>
      </div>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-[#B5CC22]" : "text-[#677510]"
                } hover:text-[#B5CC22] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="list-none hidden sm:flex flex-row gap-10">
          <Link href={isSignedIn ? "/" : "/sign-in"}>
            <Button
              variant="outline"
              className="rounded-full bg-[#B5CC22] px-7 text-white"
              onClick={() => isSignedIn && signOut()}
            >
              <p className="text-lg">{isSignedIn ? '登出' : '登入'}</p>
            </Button>
          </Link>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient bg-[#B5CC22] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-[#B5CC22]" : "text-[#677510]"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="cursor-pointer text-[16px]">
                <Link href={isSignedIn ? "/" : "/sign-in"}>
                  <Button variant="default" className="rounded-full bg-[#ffffff] text-[#B5CC22]">
                    登入
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};