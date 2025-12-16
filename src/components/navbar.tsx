import { navLinks } from "../lib/constants/constants";

function Navbar() {
  return (
    <header>
      <nav role="navigation" aria-label="Main navigation">
        <a href="#">
          <img src="/logo.svg" alt="Apple Logo" />
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <button className="font-regular hidden cursor-pointer text-sm text-white opacity-75 transition-all duration-300 ease-in-out hover:opacity-100 sm:block">
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button aria-label="Search">
            <img src="/search.svg" alt="Search" />
          </button>
          <button aria-label="Cart">
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
