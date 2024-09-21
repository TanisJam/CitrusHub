import { Link } from 'wouter';

import { BellIcon } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="navbar bg-medium-blue px-6">
      <div className="flex-none "></div>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-accent grid place-content-center rounded-full mr-3"></div>
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
