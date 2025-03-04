import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-5 pt-5 flex justify-between md:justify-around items-center relative shadow pb-4 bg-gray-800 text-white">

   <div className="font-bold">EquiSports</div>

      <button onClick={() => setOpen(!open)} className="md:hidden focus:outline-none text-white">
        {open ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
      </button>
      <div className="hidden md:flex space-x-6">
        <Link className="hover:text-orange-700" to="/">Home</Link>
        <Link className="hover:text-orange-700" to="/">All Sports Equipment</Link>
        <Link className="hover:text-orange-700" to="/">Add Equipment</Link>
        <Link className="hover:text-orange-700" to="/">My Equipment List</Link>
      </div>

      <div className="hidden md:flex space-x-4">
        <Link className="rounded-xl p-3 bg-orange-700 hover:bg-white hover:text-black" to="/">Login</Link>
        <Link className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" to="/">Register</Link>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-5 space-y-4 md:hidden">
          <Link className="hover:text-orange-700" to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link className="hover:text-orange-700" to="/" onClick={() => setOpen(false)}>All Sports Equipment </Link>
          <Link className="hover:text-orange-700" to="/" onClick={() => setOpen(false)}>Add Equipment </Link>
          <Link className="hover:text-orange-700" to="/" onClick={() => setOpen(false)}>My Equipment List</Link>
          <Link className="rounded-xl p-3 bg-teal-500 hover:bg-white hover:text-teal-500" to="/" onClick={() => setOpen(false)}>Login</Link>
          <Link className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" to="/" onClick={() => setOpen(false)}>Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
