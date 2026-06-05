import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    const {
        darkMode,
        setDarkMode
    } = useContext(ThemeContext);

    const [unreadCount, setUnreadCount] = useState(0);

    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {

        fetchUnreadCount();

    }, []);

    const fetchUnreadCount = async () => {

        try {

            const res = await axios.get(
                "https://pathprimeedu-backend.onrender.com/api/notices"
            );

            const lastVisit =
                localStorage.getItem(
                    "lastCommunityVisit"
                );

            if (!lastVisit) {

                setUnreadCount(
                    res.data.length
                );

                return;

            }

            const count =
                res.data.filter(
                    notice =>
                        new Date(
                            notice.createdAt
                        ) >
                        new Date(
                            lastVisit
                        )
                ).length;

            setUnreadCount(count);

        } catch (error) {

            console.log(error);

        }

    };

    const handleLogout = () => {

        localStorage.removeItem("user");
        localStorage.removeItem("token");

        window.location.href = "/";

    };

    return (

        <nav className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg sticky top-0 z-50">

            <div className="flex justify-between items-center px-4 py-4">

                <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">

                    🎓 PathPrimeEdu

                </h1>

                {/* Desktop Menu */}

                <div className="hidden md:flex gap-5 items-center font-medium">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/courses">
                        Courses
                    </Link>

                    <Link to="/notes">
                        Notes
                    </Link>

                    <Link to="/pyqs">
                        PYQs
                    </Link>

                    {!user && (
                        <>
                            <Link to="/login">
                                Login
                            </Link>

                            <Link to="/register">
                                Register
                            </Link>
                        </>
                    )}

                    {user && (

                        <div className="relative">

                            <button
                                onClick={() =>
                                    setShowProfileMenu(
                                        !showProfileMenu
                                    )
                                }
                                className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/20 transition"
                            >
                                👤 {user.name} ▼
                            </button>

                            {showProfileMenu && (

                                <div className="absolute right-0 mt-2 bg-white text-black rounded-xl shadow-xl w-56 overflow-hidden">

                                    <Link
                                        to="/dashboard"
                                        className="block px-4 py-3 hover:bg-gray-100"
                                    >
                                        🏠 Dashboard
                                    </Link>

                                    <Link
                                        to="/profile"
                                        className="block px-4 py-3 hover:bg-gray-100"
                                    >
                                        👤 Profile
                                    </Link>

                                    {user?.role === "admin" && (

                                        <Link
                                            to="/admin-dashboard"
                                            className="block px-4 py-3 hover:bg-gray-100"
                                        >
                                            ⚙️ Admin Panel
                                        </Link>

                                    )}

                                    {user?.approved && (

                                        <Link
                                            to="/notice-board"
                                            className="block px-4 py-3 hover:bg-gray-100"
                                        >
                                            📢 Community

                                            {unreadCount > 0 && (

                                                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">

                                                    {unreadCount}

                                                </span>

                                            )}

                                        </Link>

                                    )}
                                    <button
                                        onClick={() => setDarkMode(!darkMode)}
                                        className="w-full text-left px-4 py-3 hover:bg-gray-100"
                                    >
                                        {darkMode
                                            ? "☀️ Light Mode"
                                            : "🌙 Dark Mode"}
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-3 hover:bg-red-50 text-red-600"
                                    >
                                        🚪 Logout
                                    </button>

                                </div>

                            )}

                        </div>

                    )}

                </div>

                {/* Mobile Hamburger */}

                <button
                    onClick={() =>
                        setMobileMenu(
                            !mobileMenu
                        )
                    }
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>

            </div>

            {/* Mobile Menu */}

            {mobileMenu && (

                <div className="md:hidden bg-indigo-800 px-4 pb-4 space-y-3">

                    <Link
                        to="/"
                        className="block"
                    >
                        Home
                    </Link>

                    <Link
                        to="/courses"
                        className="block"
                    >
                        Courses
                    </Link>

                    <Link
                        to="/notes"
                        className="block"
                    >
                        Notes
                    </Link>

                    <Link
                        to="/pyqs"
                        className="block"
                    >
                        PYQs
                    </Link>

                    {!user && (
                        <>
                            <Link
                                to="/login"
                                className="block"
                            >
                                Login
                            </Link>

                            <Link
                                to="/register"
                                className="block"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    <button
                        onClick={() =>
                            setDarkMode(!darkMode)
                        }
                        className="block text-left"
                    >
                        {darkMode
                            ? "☀️ Light Mode"
                            : "🌙 Dark Mode"}
                    </button>

                    {user && (

                        <>
                            <Link
                                to="/dashboard"
                                className="block"
                            >
                              🏠 Dashboard
                            </Link>

                            {user?.role === "admin" && (

                                <Link
                                    to="/admin-dashboard"
                                    className="block"
                                >
                                    ⚙️ Admin Panel
                                </Link>

                            )}

                            {user?.approved && (

                                <Link
                                    to="/notice-board"
                                    className="block"
                                >
                                   📢 Community

                                    {unreadCount > 0 && (

                                        <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">

                                            {unreadCount}

                                        </span>

                                    )}

                                </Link>

                            )}

                            <button
                                onClick={handleLogout}
                                className="block text-left"
                            >
                               🚪 Logout
                            </button>

                        </>
                    )}

                </div>

            )}

        </nav>

    );

};

export default Navbar;
