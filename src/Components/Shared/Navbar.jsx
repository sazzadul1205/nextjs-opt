"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

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
    <div className={`navbar ${isAdminPath ? "bg-blue-500" : "bg-red-500"}`}>
      <div className="navbar max-w-[1200px] mx-auto items-center h-12 flex justify-between">
        {/* Start */}
        <div className="flex items-center space-x-4">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {currentLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link className="font-bold text-xl" href="/">
            Next Hero
          </Link>
        </div>

        {/* Center */}
        <div className="hidden lg:flex space-x-5 font-bold px-1 text-[16px]">
          {currentLinks.map((link) => (
            <Link
              key={link.title}
              href={link.path}
              className={
                pathName === link.path ? "text-red-400" : "hover:text-red-400"
              }
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* End */}
        <button
          onClick={handleNavigation}
          className="px-7 py-3 bg-blue-500 hover:bg-blue-400 font-bold text-black"
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Navbar;
