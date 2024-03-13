import React, { useRef } from "react";
import { links } from "./data";

function LinksList({ showLinks }) {
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);
  console.log(showLinks);
  return (
    <div
      className="links-container"
      ref={linkContainerRef}
      style={{
        height: showLinks
          ? `${linkRef.current.getBoundingClientRect().height}px`
          : "0px",
      }}
    >
      <ul className="links" ref={linkRef}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LinksList;
