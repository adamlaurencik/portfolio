import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faCopyright,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div className="w-full bg-spaceBlack text-white flex items-center justify-center flex-col py-4">
      <div className="flex items-center justify-center w-full my-1 text-4xl">
        <a
          className="mx-2 my-1"
          aria-label="LinkedIn of Adam Laurencik"
          rel="noopener"
          href="https://www.linkedin.com/in/adam-lauren%C4%8D%C3%ADk-93b02912b/"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="hover:text-purple-200 focus:text-purple-200"
          />
        </a>
        <a
          className="mx-2 my-1"
          href="mailto:laurencik.a@gmail.com"
          aria-label="Send email to Adam Laurencik"
          rel="noopener"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="hover:text-purple-200 focus:text-purple-200"
          />
        </a>
      </div>
      <div className="my-1 text-sm">
        Made with <FontAwesomeIcon icon={faHeart} className="text-red-800" /> by{" "}
        <span className="text-bold">Adam Laurencik</span>{" "}
      </div>
    </div>
  );
}
