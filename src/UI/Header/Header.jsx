import React from "react";
import { Link } from "react-router-dom";

const Header = ({ subPage }) => {
  return (
    <header>
      {subPage && window.innerWidth < 1000 ? (
        <Link to="/" className="backward-svg">
          <svg
            className="backward-svg-arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <title>4-Arrow Left</title>
            <g id="_4-Arrow_Left" data-name="4-Arrow Left">
              <path d="M32,15H3.41l8.29-8.29L10.29,5.29l-10,10a1,1,0,0,0,0,1.41l10,10,1.41-1.41L3.41,17H32Z" />
            </g>
          </svg>
        </Link>
      ) : (
        ""
      )}
      <nav>
        <Link to="/" className="name-container">
          <p className="kobi">
            {subPage && window.innerWidth < 1000 ? "Go back" : "Kobi Manuel"}
          </p>
        </Link>
        <div>
          {" "}
          <a
            href="https://twitter.com/KobiManuell"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-kobi-572b68180/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://docs.google.com/document/d/1NJ8nqD9KPumsMaPehvlMv-WAMziW7qhoPugzdUBL4L0/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="resume"
            style={{ textDecoration: "none" }}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  subPage: true,
};

export default Header;
