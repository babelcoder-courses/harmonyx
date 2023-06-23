"use client";

import Link from "next/link";
import { useAppStore } from "../store";

const Header = () => {
  const { profile } = useAppStore((state) => state.auth);

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <ul className="font-medium flex p-4 md:p-0 rounded-lg w-full mt-0">
          <li>
            <Link href="/" className="block py-2 pr-4">
              Home
            </Link>
          </li>
          <li>
            <Link href="/golds" className="block py-2 pl-3 pr-4">
              Gold Trader
            </Link>
          </li>
          <li>
            <Link href="/articles" className="block py-2 pl-3 pr-4">
              Articles
            </Link>
          </li>
          <li className="ml-auto">
            {profile ? (
              <span className="block py-2 pl-3 pr-4">{profile.name}</span>
            ) : (
              <Link href="/auth/sign-up" className="block py-2 pl-3 pr-4">
                Sign Up
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
