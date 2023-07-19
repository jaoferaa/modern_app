import NavLinks from "../constants";
import close from "../assets/close.png";
import menu from "../assets/menu.png";
import logo from "../assets/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} className="w-[110px] h-auto" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {NavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins z-50 font-normal cursor-pointer text-[16px] ${
              index === NavLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {/* mobile navbar */}
      <div className="sm:hidden flex flex-1 justify-end items-center bg-transparent">
        <img
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {NavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins z-50 font-normal cursor-pointer text-[16px] ${
                  index === NavLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
