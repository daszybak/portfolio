import React from 'react';
import {
  FiGithub,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
} from 'react-icons/fi';

import './SocialMedia.scss';

function SocialMedia() {
  return (
    <ul className="nav__social">
      <li>
        <a
          href="https://github.com/daszybak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className="nav__social-link" />
        </a>
      </li>
      <li>
        <a href="#home">
          <FiInstagram className="nav__social-link" />
        </a>
      </li>
      <li>
        <a href="#home">
          <FiTwitter className="nav__social-link" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/karlo-delmis-0715571b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiLinkedin className="nav__social-link" />
        </a>
      </li>
      <li>
        <a href="#home">
          <FiFacebook className="nav__social-link" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
