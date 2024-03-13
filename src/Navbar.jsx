import React, { useState } from "react";

import { FaBars } from "react-icons/fa";
import LinksList from "./LinksList";
import logo from "./logo.svg";
import { social } from "./data";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav >
      <div className="nav-section">
      <div className="nav-header">
        <img src={logo} />

  

        <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      
      <LinksList showLinks={showLinks} />

      <ul className="social-links">
        {social.map((ele) => {
          return (
            <li key={ele.id}>
              
              <a href={ele.url}>{ele.icon}</a>
            </li>
          );
        })}
      </ul>
      </div>
    </nav>
  
  );
}

export default Navbar;
