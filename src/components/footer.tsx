import { footerLinks } from "../lib/constants/constants";

function Footer() {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop:{" "}
          <a
            href="#"
            className="text-primary cursor-pointer transition-all duration-300 ease-in-out hover:text-white"
          >
            Find an Apple Store
          </a>{" "}
          or other retailer near you. Or call{" "}
          <a
            href="#"
            className="text-primary cursor-pointer transition-all duration-300 ease-in-out hover:text-white"
          >
            000800 040 1966
          </a>
          .
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <p>Copyright © 2026 Apple Inc. All rights reserved.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label} className="w-fit">
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
