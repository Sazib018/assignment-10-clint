import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => {
                navigate("/");
            })
            .catch((error) => console.log(error));
    };

    return (
        <nav className="bg-gray-800 rounded-lg text-white shadow">
            <div className="max-w-[1450px] mx-auto px-5 pt-5 flex justify-between md:justify-around items-center relative pb-4">
                <div className="font-bold text-xl">EquiSports</div>

                <button onClick={() => setOpen(!open)} className="md:hidden focus:outline-none text-white">
                    {open ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
                </button>

                <div className="hidden md:flex space-x-6">
                    <Link className="hover:text-orange-700" to="/">Home</Link>
                    <Link className="hover:text-orange-700" to="/all-sports-equipment">All Sports Equipment</Link>
                    <Link className="hover:text-orange-700" to="/add-equipment">Add Equipment</Link>
                    <Link className="hover:text-orange-700" to="/my-equipment-list">My Equipment List</Link>
                </div>


                <div className="hidden md:flex items-center space-x-4">
                    {user ? (
                        <>
                            <div className="relative group">
                                <img
                                    src={user.image}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                                />
                                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full bg-gray-700 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                                    {user.displayName}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="rounded-xl p-3 bg-red-600 hover:bg-white hover:text-black"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="rounded-xl p-3 bg-orange-700 hover:bg-white hover:text-black" to="/login">Login</Link>
                            <Link className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" to="/register">Register</Link>
                        </>
                    )}
                </div>
            </div>
            {open && (
                <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center py-5 space-y-4 md:hidden">
                    <Link className="hover:text-orange-700" to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link className="hover:text-orange-700" to="/all-sports-equipment" onClick={() => setOpen(false)}>All Sports Equipment</Link>
                    <Link className="hover:text-orange-700" to="/add-equipment" onClick={() => setOpen(false)}>Add Equipment</Link>
                    <Link className="hover:text-orange-700" to="/my-equipment-list" onClick={() => setOpen(false)}>My Equipment List</Link>

                    {user ? (
                        <>
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-14 h-14 rounded-full border-2 border-white"
                            />
                            <p className="text-white">{user.displayName}</p>
                            <button
                                onClick={handleLogout}
                                className="rounded-xl p-3 bg-red-600 hover:bg-white hover:text-red-600"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="rounded-xl p-3 bg-orange-700 hover:bg-white hover:text-black" to="/login" onClick={() => setOpen(false)}>Login</Link>
                            <Link className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black" to="/register" onClick={() => setOpen(false)}>Register</Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
