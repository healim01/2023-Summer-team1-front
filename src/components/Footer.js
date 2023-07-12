import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className="company-info">
          <p>Company Name</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={24} />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <GitHubIcon size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
