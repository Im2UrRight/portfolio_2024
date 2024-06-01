// Footer.tsx

import React from "react";
import { FaSquareGithub, FaSquareXTwitter, FaLinkedin, FaFilePdf, FaLocationDot } from "react-icons/fa6";
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="social">
        <a href="">GitHub <FaSquareGithub /></a>
        <a href="">LimkedIn <FaLinkedin /></a>
        <a href="">Twitter <FaSquareXTwitter /></a>
      </div>
      <div>
        <p><FaLocationDot /> Gonzales, LA</p>
        <a href="mailto:jashbydev@gmail.com">Email</a>
        <a href=""><FaFilePdf /> Resume</a>
      </div>
    </footer>
  );
};

export default Footer;