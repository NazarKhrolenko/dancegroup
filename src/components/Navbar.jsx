import React from "react";
import { IoLogoSnapchat } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-gray-700 fixed flex justify-around items-center py-2 text-white w-full z-10">
        <div>
          <a href="#">
            <IoLogoSnapchat size={28} />
          </a>
        </div>
        <div>
          <ul className="flex gap-4 uppercase">
            <li>
              <a href="">Grafik</a>
            </li>
            <li>
              <a href="">Cennik</a>
            </li>
            <li>
              <a href="">Kontakt</a>
            </li>
            <li>
              <a href="">Galeria</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-red-700 py-1 px-9 rounded-full font-medium">
            Zapisy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
