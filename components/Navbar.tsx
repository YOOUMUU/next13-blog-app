import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className=" bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="container mx-auto flex flex-col justify-between sm:flex-row">
        <Link
          href="/"
          className="text-white/90 hover:text-white mx-auto sm:mx-0"
        >
          Ervin Yo
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
