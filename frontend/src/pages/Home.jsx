import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HallOfFame from "../components/HallOfFame";
import Testimonials from "../components/Testimonials";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";




const Home = () => {

    const [latestNotice, setLatestNotice] = useState(null);
    const [student, setStudent] = useState(null);
    useEffect(() => {

        const fetchStudent = async () => {

            try {

                const res = await axios.get(
                    "https://pathprimeedu-backend.onrender.com/api/student-of-month"
                );

                if (res.data.length > 0) {

                    setStudent(res.data[0]);

                }

            } catch (error) {

                console.log(error);

            }

        };

        fetchStudent();

    }, []);
    useEffect(() => {

        fetchLatestNotice();

    }, []);

    const fetchLatestNotice = async () => {

        try {

            const res = await axios.get(
                "https://pathprimeedu-backend.onrender.com/api/notices"
            );

            if (res.data.length > 0) {

                setLatestNotice(res.data[0]);

            }

        } catch (error) {

            console.log(error);

        }

    };
    const navigate = useNavigate();

    const [stats, setStats] = useState({
        students: 0,
        notes: 0,
        pyqs: 0,
        reviews: 0
    });

    useEffect(() => {

        const fetchStats = async () => {

            try {

                const res = await axios.get(
                    "https://pathprimeedu-backend.onrender.com/api/stats"
                );

                setStats(res.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchStats();

    }, []);

    return (

        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white">

            <Navbar />

            {/* HERO SECTION */}

            <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-16 md:py-24 px-4 md:px-8">

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    <div>

                        <h1 className="text-4xl md:text-4xl font-extrabold leading-tight">

                            CBSE Success

                            <span className="block text-yellow-300">

                                Starts Here

                            </span>

                        </h1>

                        <p className="mt-6 text-lg text-gray-200">

                            Quality notes, PYQs, courses, and smart learning
                            for students from Class 6 to 12.

                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">

                            <button
                                onClick={() => navigate("/courses")}
                                className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Explore Courses
                            </button>

                            <button
                                onClick={() => navigate("/register")}
                                className="bg-white dark:bg-gray-800 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Get Started
                            </button>

                        </div>

                    </div>

                    <div className="relative flex justify-center">

                        <div className="absolute top-5 left-0 bg-white dark:bg-gray-800 text-indigo-700 px-4 py-2 rounded-xl shadow-lg animate-bounce">

                            📚 CBSE Focused

                        </div>

                        <div
                            className="absolute bottom-5 right-0 bg-white dark:bg-gray-800 text-green-700 px-4 py-2 rounded-xl shadow-lg animate-bounce"
                            style={{ animationDelay: "1s" }}
                        >

                            ⭐ 500+ Students

                        </div>
                        <img
                            src="https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg"
                            alt="Education"
                            className="w-full max-w-md rounded-2xl shadow-2xl"
                        />

                    </div>

                </div>

            </section>


            {/* STATS SECTION */}

            <section className="py-16 px-8 bg-white dark:bg-gray-800">

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

                    <div>

                        <h2 className="text-4xl font-bold text-blue-600">

                            <CountUp
                                end={stats.students}
                                duration={3}
                            />+

                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-300">

                            Students

                        </p>

                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-green-600">

                            <CountUp
                                end={stats.notes}
                                duration={3}
                            />+

                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-300">

                            Notes

                        </p>

                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-red-600">

                            <CountUp
                                end={stats.pyqs}
                                duration={3}
                            />+

                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-300">

                            PYQs

                        </p>

                    </div>

                    <div>

                        <h2 className="text-4xl font-bold text-purple-600">

                            <CountUp
                                end={stats.reviews}
                                duration={3}
                            />+

                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-300">

                            Approved Reviews

                        </p>

                    </div>

                </div>

            </section>



            <section className="py-16 bg-white dark:bg-gray-800">

                <div className="max-w-6xl mx-auto px-4">

                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">

                        🔥 Most Popular Courses

                    </h2>

                    <p className="text-center text-gray-500 mb-10">

                        Trusted by students from Class 6 to 12

                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg">

                            <h3 className="text-2xl font-bold">

                                Class 10 Board Prep

                            </h3>

                            <p className="mt-3">

                                Complete board preparation with notes, PYQs and tests.

                            </p>

                        </div>

                        <div className="bg-white dark:bg-gray-800 border-2 border-indigo-200 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                            <h3 className="text-2xl font-bold text-indigo-700">

                                Class 11 PCM

                            </h3>

                            <p className="mt-3 text-gray-600 dark:text-gray-300">

                                Physics, Chemistry and Mathematics foundation program.

                            </p>

                        </div>

                        <div className="bg-white dark:bg-gray-800 border-2 border-indigo-200 p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                            <h3 className="text-2xl font-bold text-indigo-700">

                                Class 12 PCM

                            </h3>

                            <p className="mt-3 text-gray-600 dark:text-gray-300">

                                Board + Competitive preparation for higher studies.

                            </p>

                        </div>

                    </div>

                </div>

            </section>


            <section className="py-16 bg-gray-50">

                <div className="max-w-4xl mx-auto px-4">

                    <h2 className="text-3xl font-bold text-center mb-8">

                        📢 Latest Announcement

                    </h2>

                    {latestNotice && (

                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-l-4 border-indigo-600">

                            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">

                                🏷️ {latestNotice.category}

                            </span>

                            <h3 className="text-2xl font-bold mt-4">

                                {latestNotice.title}

                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mt-3">

                                {latestNotice.message}

                            </p>

                        </div>

                    )}

                </div>

            </section>




            {/* STUDENT OF THE MONTH */}

            <section className="py-20 bg-white dark:bg-gray-800">

                <div className="max-w-6xl mx-auto px-4">

                    <h2 className="text-4xl font-bold text-center mb-3">

                        🏆 Student Of The Month

                    </h2>

                    <p className="text-center text-gray-500 mb-12">

                        Celebrating outstanding performance and dedication

                    </p>

                    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl shadow-2xl overflow-hidden">

                        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

                            <div className="p-10 text-center">

                                <img
                                    src={student?.image}
                                    alt="Student"
                                    className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-xl"
                                />

                            </div>

                            <div className="p-10 text-white">

                                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">

                                    ⭐ Top Performer

                                </span>

                                <h3 className="text-4xl font-bold mt-6">

                                   {student?.name}

                                </h3>

                                <p className="mt-3 text-indigo-100 text-xl">

                                    Class {student?.className}

                                </p>

                                <div className="mt-6">

                                    <h4 className="text-4xl font-extrabold text-yellow-300">

                                        {student?.percentage}%

                                    </h4>

                                    <p className="mt-2 text-lg">

                                        {student?.achievement}
                                    </p>

                                </div>

                                <blockquote className="mt-8 italic text-indigo-100">

                                    {student?.quote}

                                </blockquote>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* FEATURES */}

            <section className="py-20 px-8">

                <h1 className="text-3xl md:text-4xl font-bold text-center mb-14">

                    Why Choose PathPrimeEdu?

                </h1>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">

                        <h2 className="text-2xl font-bold text-blue-600">

                            Expert Notes

                        </h2>

                        <p className="mt-4 text-gray-600 dark:text-gray-300">

                            High quality chapter-wise notes for better understanding.

                        </p>

                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">

                        <h2 className="text-2xl font-bold text-green-600">

                            PYQ Collection

                        </h2>

                        <p className="mt-4 text-gray-600 dark:text-gray-300">

                            Previous year questions for excellent exam preparation.

                        </p>

                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">

                        <h2 className="text-2xl font-bold text-purple-600">

                            Smart Learning

                        </h2>

                        <p className="mt-4 text-gray-600 dark:text-gray-300">

                            Learn efficiently with modern digital education tools.

                        </p>

                    </div>

                </div>

            </section>

            <HallOfFame />

            <Testimonials />

            <section className="py-20">

                <div className="max-w-5xl mx-auto px-4">

                    <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl">

                        <h2 className="text-3xl md:text-5xl font-bold">

                            Ready To Start Learning?

                        </h2>

                        <p className="mt-4 text-indigo-100 text-lg">

                            Join 500+ students already learning with PathPrimeEdu.

                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                            <button
                                onClick={() => navigate("/courses")}
                                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-300 transition"
                            >
                                📚 Explore Courses
                            </button>

                            <button
                                onClick={() => navigate("/register")}
                                className="bg-white dark:bg-gray-800 text-indigo-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
                            >
                                🚀 Join Now
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </div>

    );


};

export default Home;
