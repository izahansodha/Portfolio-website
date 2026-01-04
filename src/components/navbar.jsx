import { NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    `m-1 cursor-pointer transition font-medium rounded-full px-6 py-2 ${
      isActive ? "text-black bg-white" : "text-white hover:text-gray-200"
    }`;

  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 flex justify-center items-center w-[50%] px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl text-white" >
      <div className="w-full flex flex-wrap justify-between gap-2">
        <div className={navClass}>
          <a href="#Home">Home</a>
        </div>
        <div className={navClass}>
          <a href="#About">About</a>
        </div>
        <div className={navClass}>
          <a href="#Resume">Resume</a>
        </div>
        <div className={navClass}>
          <a href="#Projects">Project</a>
        </div>
        <div className={navClass}>
          <a href="#Contact">Contact</a>
        </div>
       
      </div>
    </nav>
  );
}

export default Navbar;
