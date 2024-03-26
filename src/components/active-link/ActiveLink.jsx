'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import './ActiveLink.css';


export const ActiveLink = ({ path, text, setShowMenu }) => {
  const currentPath = usePathname()

  function handleClick() {
    setShowMenu(false);
  }

  return (
    <li className="flex">
      <Link onClick={handleClick} className={`${currentPath === path && 'active-link'} text-right max-[768px]:p-2 max-[768px]:w-full`} href={ path }>
        { text }
      </Link>
    </li>
  );
};
