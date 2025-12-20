import { NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    `m-1 cursor-pointer transition font-medium rounded-full px-6 py-2 ${
      isActive
        ? "text-black bg-white"
        : "text-white hover:text-gray-200"
    }`;

  return (
    <nav className="w-full max-w-[900px] bg-[#032f30] rounded-2xl sm:rounded-full py-2 px-4">
      <div className="flex flex-wrap justify-center gap-2 items-center">
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={navClass}>
          About
        </NavLink>

        <NavLink to="/resume" className={navClass}>
          Resume
        </NavLink>

        <NavLink to="/projects" className={navClass}>
          Projects
        </NavLink>

        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;
