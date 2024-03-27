'use client';

import './Navbar.css'
import { useState } from "react";
import { ActiveLink } from "..";

const navItems = [
  { path: '/', text: "Home" },
  { path: '/prueba1', text: "Prueba 1" },
  { path: '/prueba2', text: "Prueba 2" },
  { path: '/prueba3', text: "Prueba 3" },
  { path: '/prueba4', text: "Prueba 4" }
];

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  function handlerToggleMenu() {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <nav className="flex justify-between bg-sky-700 text-white p-2 h-[41px]">
        <div>LOGO</div>
        <div onClick={handlerToggleMenu} className="min-[768px]:hidden">
          <div className="w-[25px] h-[3px] bg-white m-1"></div>
          <div className="w-[25px] h-[3px] bg-white m-1"></div>
          <div className="w-[25px] h-[3px] bg-white m-1"></div>
        </div>
        <ul className={`menu ${showMenu && "show"} flex gap-4 min-[768px]:flex-row max-[768px]:flex-col max-[768px]:gap-0 bg-sky-700`}>
          {
            navItems.map((item, index) => (
              <ActiveLink key={index} {...item} setShowMenu={setShowMenu} />
            ))
          }
        </ul>
      </nav>
      <div onClick={handlerToggleMenu} className={`${showMenu && "show"} layer`}></div>
    </>
  );
};
