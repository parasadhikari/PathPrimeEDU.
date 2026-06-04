import React from "react";

import { Link } from "react-router-dom";

import {


FaWhatsapp,
FaInstagram,
FaLinkedin,
FaGithub,
FaYoutube


} from "react-icons/fa";

const Footer = () => {


return (

    <footer className="bg-gray-950 text-white mt-16">

        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* PATHPRIMEEDU */}

            <div>

                <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
                    PathPrimeEdu
                </h2>

                <p className="mt-4 text-gray-400">
                    Learn Smart. Score Better.
                </p>

                <div className="mt-6 space-y-2 text-gray-400">

                    <p>
                        📧 supportpathprimeedu@gmail.com
                    </p>

                    <p>
                        📞 +91 9667273657
                    </p>

                    <p>
                        📍 Mashigarh, Delhi-110025, India
                    </p>

                </div>

            </div>


            {/* QUICK LINKS */}

            <div>

                <h3 className="text-2xl font-semibold mb-5">
                    Quick Links
                </h3>

                <ul className="space-y-3 text-gray-400">

                    <li>
                        <Link
                            to="/"
                            className="hover:text-blue-400 transition"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/courses"
                            className="hover:text-blue-400 transition"
                        >
                            Courses
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/notes"
                            className="hover:text-blue-400 transition"
                        >
                            Notes
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/pyqs"
                            className="hover:text-blue-400 transition"
                        >
                            PYQs
                        </Link>
                    </li>

                </ul>

            </div>


            {/* STUDENT ZONE */}

            <div>

                <h3 className="text-2xl font-semibold mb-5">
                    Student Zone
                </h3>

                <ul className="space-y-3 text-gray-400">

                    <li>
                        <Link
                            to="/dashboard"
                            className="hover:text-blue-400 transition"
                        >
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="/testimonial"
                            className="hover:text-blue-400 transition"
                        >
                            Submit Review
                        </Link>
                    </li>

                    <li>
                        Hall Of Fame
                    </li>

                    <li>
                        Student Testimonials
                    </li>

                </ul>

            </div>


            {/* FOLLOW US */}

            <div>

                <h3 className="text-2xl font-semibold mb-5">
                    Follow Us
                </h3>

                <div className="flex flex-wrap gap-5 text-3xl">

                    <a
                        href="https://wa.me/919667273657"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green-500 hover:scale-110 transition"
                    >
                        <FaWhatsapp />
                    </a>

                    <a
                        href="https://www.instagram.com/parasadhikari17/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-pink-500 hover:scale-110 transition"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/paras-adhikari-a10151247/"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-500 hover:scale-110 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/parasadhikari"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-300 hover:scale-110 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.youtube.com/@PathPrimeEDU"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-red-500 hover:scale-110 transition"
                    >
                        <FaYoutube />
                    </a>

                </div>

            </div>

        </div>


        {/* COPYRIGHT */}

        <div className="border-t border-gray-800 py-5 text-center text-gray-500">

            © 2026 PathPrimeEdu | Built by Paras Adhikari

        </div>

    </footer>

);


};

export default Footer;
