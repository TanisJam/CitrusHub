import { Link } from 'wouter';

import { BellIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 px-6">
      <div className="flex-none "></div>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-orange-500 grid place-content-center rounded-full mr-3">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <Link href="/">
          <h1 className="text-xl font-bold">CitrusHub</h1>
        </Link>
      </div>

      <button className="p-2 rounded-full bg-gray-800 ml-auto ">
        <BellIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
