import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div id="footer">
      <ul>
        <li>
          <a href="https://github.com/ruldiaz" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-2x"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rauldf/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fa-2x"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/rulhdiaz" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              className="fa-2x"
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
