"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { title: "Home", path: "/" },
    { title: "Contact", path: "/Contact" },
    { title: "About", path: "/About" },
    { title: "Posts", path: "/Posts" },
    { title: "Album", path: "/Album" },
  ];

  const isAdminPath =
    pathName.includes("Dashboard") || pathName.includes("ManageUser");
  const currentLinks = isAdminPath ? adminLinks : links;

  const handleNavigation = () => router.push("/Login");

  return (
    <div className={`w-full py-3 ${isAdminPath ? "bg-blue-500" : "bg-red-500"} `}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-12 px-4">
        {/* Start */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <ul className="absolute left-0 top-12 bg-white shadow-lg w-52 rounded-md py-2">
                {currentLinks.map((link) => (
                  <li key={link.title} className="border-b last:border-none">
                    <Link
                      href={link.path}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link className="font-bold text-xl text-white" href="/">
            Next Hero
          </Link>
        </div>

        {/* Center */}
        <div className="hidden lg:flex space-x-5 font-bold text-white">
          {currentLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className={`px-2 py-1 ${
                pathName === link.path
                  ? "text-red-400 border-b-2 border-red-400"
                  : "hover:text-red-400"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* End */}
        <button
          onClick={handleNavigation}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 font-bold text-white rounded"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Navbar;
