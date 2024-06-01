// components/Header.tsx

import React from "react";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header>
      <div>
        <image src="#" className="logo" alt="logo" />
        <h1>Jonathan Ashby</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
