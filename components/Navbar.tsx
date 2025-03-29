import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <span className="hover:text-blue-400 transition">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="hover:text-blue-400 transition">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-blue-400 transition">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
