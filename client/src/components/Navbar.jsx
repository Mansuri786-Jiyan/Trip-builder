import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,

} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Tours", to: "/tours" },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">

          {/* LEFT: LOGO (SAME AS FOOTER) */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-1 no-underline">
              <span className="text-2xl font-extrabold text-amber-500">
                TRAVEL
              </span>
              <span className="text-2xl font-extrabold text-slate-800">
                WORLD
              </span>
            </Link>
          </div>

          {/* CENTER: NAV LINKS */}
          <nav className="hidden md:flex justify-center py-4">
            <div className="flex items-center gap-12">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
        className={({ isActive }) =>
          `relative text-sm decoration-none font-medium uppercase tracking-widest transition-colors duration-300 ease-in-out
          ${isActive ? "text-amber-600" : "text-gray-500 hover:text-amber-600"}
          
          /* Animated Underline */
          after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:h-[1.5px] 
          after:bg-amber-600 after:transition-all after:duration-300 after:ease-out
          after:-translate-x-1/2
          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
          
          /* Subtle Lift Effect */
          hover:-translate-y-[1px] active:translate-y-0 transform`
        }
      >
        {link.label}
      </NavLink>
    ))}
  </div>
</nav>


          {/* RIGHT: ACTIONS */}
          <div className="flex justify-end items-center gap-3">

            {/* SEARCH
            <Link
              to="/search"
              className="hidden sm:inline-flex p-2 rounded-lg hover:bg-gray-100 text-gray-600"
              title="Search"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </Link> */}

            {/* LOGIN BUTTON */}
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-amber-400 hover:text-amber-500 transition no-underline"
            >
              <UserCircleIcon className="w-5 h-5" />
              <span className="font-medium">Login</span>
            </Link>

            {/* REGISTER BUTTON (PRIMARY) */}
            <Link
              to="/Register"
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-medium shadow-sm transition no-underline"
            >
              Register
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {open ? (
                <XMarkIcon className="w-6 h-6 text-gray-700" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-[max-height] duration-300 ease-out overflow-hidden ${open ? "max-h-64" : "max-h-0"
          }`}
      >
        <div className="px-4 pt-4 pb-5 bg-white border-t space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium transition ${isActive
                  ? "text-amber-500"
                  : "text-gray-700 hover:text-amber-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block mt-2 px-3 py-2 rounded-md border border-gray-300 text-gray-700 text-center no-underline"
          >
            Login
          </Link>

          <Link
            to="/Register"
            onClick={() => setOpen(false)}
            className="block mt-2 px-3 py-2 rounded-md bg-amber-500 text-white text-center font-medium no-underline"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
