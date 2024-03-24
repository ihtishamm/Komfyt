"use client";

import React, { useState, useEffect } from "react";
import { Heart, XIcon, ShoppingBag, Menu } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        <div className="h-[60px] flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={40}
              height={40}
              className="w-[40px] md:w-[60px]"
            />
          </Link>

          <div className="flex-grow"></div>

          <div className="hidden md:flex items-center gap-8 font-medium text-black">
            <Link href="/">New & Featured</Link>
            <Link href="/">Men</Link>
            <Link href="/">Women</Link>
            <Link href="/">Kids</Link>
          </div>

          <div className="flex items-center gap-2 text-black">
            {/* Icon start */}
            <Link href="/">
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                <Heart size="24" />
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[14px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  51
                </div>
              </div>
            </Link>
            {/* Icon end */}

            {/* Icon start */}
            <Link href="/">
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                <ShoppingBag size="20" />
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[14px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  0
                </div>
              </div>
            </Link>
            {/* Icon end */}

            {/* Mobile icon start */}
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
              {mobileMenu ? (
                <XIcon size="16" onClick={() => setMobileMenu(false)} />
              ) : (
                <Menu size="20" onClick={() => setMobileMenu(true)} />
              )}
            </div>
            {/* Mobile icon end */}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black transition-transform duration-300 overflow-y-auto ${
            mobileMenu
              ? "transform translate-y-0"
              : "transform -translate-y-full"
          }`}
        >
          <div className="flex flex-col gap-4 py-4 px-6">
            <Link href="/" onClick={() => setMobileMenu(false)}>
              New & Featured
            </Link>
            <Link href="/" onClick={() => setMobileMenu(false)}>
              Men
            </Link>
            <Link href="/" onClick={() => setMobileMenu(false)}>
              Women
            </Link>
            <Link href="/" onClick={() => setMobileMenu(false)}>
              Kids
            </Link>
          </div>
        </div>
        {/* Mobile menu end */}
      </div>
    </header>
  );
};

export default Header;
