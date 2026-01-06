// src/components/Footer.jsx
import React from "react";
import { MapPin, Mail, Phone } from "lucide-react"; // lucide-react icons (you installed earlier)

const Footer = () => {
  const year = new Date().getFullYear();

  const LinkItem = ({ children, href = "#" }) => (
    <li className="mb-3">
      <a href={href} className="text-gray-600 hover:text-gray-900 transition-colors">
        {children}
      </a>
    </li>
  );

  return (
    <footer className="bg-[#fbfbfb] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* LEFT: logo + short desc + social */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-extrabold text-amber-500">TRAVEL</div>
              <div className="text-2xl font-extrabold text-slate-800">WORLD</div>
            </div>

            <p className="text-gray-600 mb-4 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              enim. Short description about the travel brand, mission or notes.
            </p>

            <div className="flex items-center gap-3">
              {/* simple social icons using emoji to avoid extra deps — replace with svg or lucide icons if you want */}
              <a aria-label="YouTube" href="#" className="text-gray-600 hover:text-gray-900 text-lg">📺</a>
              <a aria-label="GitHub" href="#" className="text-gray-600 hover:text-gray-900 text-lg">🐙</a>
              <a aria-label="Facebook" href="#" className="text-gray-600 hover:text-gray-900 text-lg">📘</a>
              <a aria-label="Instagram" href="#" className="text-gray-600 hover:text-gray-900 text-lg">📸</a>
            </div>
          </div>

          {/* DISCOVER */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Discover</h4>
            <ul className="text-sm">
              <LinkItem href="#">Home</LinkItem>
              <LinkItem href="#">About</LinkItem>
              <LinkItem href="#">Tours</LinkItem>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="text-sm">
              <LinkItem href="#">Gallery</LinkItem>
              <LinkItem href="#">Login</LinkItem>
              <LinkItem href="#">Register</LinkItem>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-4">Contact</h4>

            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <div className="text-sm text-gray-500">Address:</div>
                <div className="text-sm text-gray-800">Ahmedabad, India</div>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <Mail className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <div className="text-sm text-gray-500">Email:</div>
                <div className="text-sm text-gray-800">dev.example@gmail.com</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-amber-500 mt-1" />
              <div>
                <div className="text-sm text-gray-500">Phone:</div>
                <div className="text-sm text-gray-800">+91 9408111252</div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom copyright */}
        <div className="mt-10 border-t border-gray-100 pt-6">
          <p className="text-center text-sm text-gray-500">
            Copyright {year}, design and develop by Mansuri Ziyan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
