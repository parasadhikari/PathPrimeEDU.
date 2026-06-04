import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HallOfFame from "../components/HallOfFame";

const Dashboard = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [admissionCount, setAdmissionCount] = useState(0);
    const [latestNotice, setLatestNotice] = useState(null);
    useEffect(() => {

        fetchAdmissionCount();
        fetchLatestNotice();

    }, []);

    const fetchAdmissionCount = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/admission/count"
            );

            setAdmissionCount(res.data.count);

        } catch (error) {

            console.log(error);

        }

    };

    const fetchLatestNotice = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/notices"
            );

            if (res.data.length > 0) {

                setLatestNotice(res.data[0]);

            }

        } catch (error) {

            console.log(error);

        }

    };

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");

    };

    return (

        <div>

            <Navbar />

            <div className="p-10 bg-gray-100 min-h-screen">

                <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-8 rounded-2xl shadow-lg mb-8">

                    <h1 className="text-4xl font-bold">
                        Welcome Back, {user?.name} 👋
                    </h1>

                    <p className="mt-2 text-indigo-100">

                        Continue your learning journey with PathPrimeEdu.

                    </p>

                    <p className="mt-1 text-sm text-indigo-200">

                        {user?.email}

                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div
                        onClick={() => navigate("/courses")}
                        className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition"
                    >
                        <h2 className="text-3xl font-bold text-blue-600">
                            📚
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Courses
                        </p>
                    </div>

                    <div
                        onClick={() => navigate("/notes")}
                        className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition"
                    >
                        <h2 className="text-3xl font-bold text-green-600">
                            📝
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Notes
                        </p>
                    </div>

                    <div
                        onClick={() => navigate("/pyqs")}
                        className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition"
                    >
                        <h2 className="text-3xl font-bold text-purple-600">
                            📄
                        </h2>

                        <p className="text-gray-600 mt-2">
                            PYQs
                        </p>
                    </div>

                    <div
                        onClick={() => navigate("/admissions")}
                        className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition"
                    >
                        <h2 className="text-3xl font-bold text-red-600">
                            {admissionCount}
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Admissions
                        </p>
                    </div>

                    <div
                        onClick={() => navigate("/testimonial")}
                        className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition"
                    >
                        <h2 className="text-3xl font-bold text-yellow-500">
                            ⭐
                        </h2>

                        <h3 className="font-semibold mt-2">
                            Submit Review
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            Share your learning experience
                        </p>
                    </div>

                </div>
                {latestNotice && (

                    <div className="bg-white p-6 rounded-2xl shadow-md mt-8 border-l-4 border-indigo-600">

                        <h2 className="text-2xl font-bold text-indigo-700 mb-3">

                            📢 Latest Announcement

                        </h2>

                        <h3 className="font-semibold text-lg">

                            {latestNotice.title}

                        </h3>

                        <p className="text-gray-600 mt-2">

                            {latestNotice.message}

                        </p>

                    </div>

                )}
                <button
                    onClick={handleLogout}
                    className="mt-10 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
                >
                    Logout
                </button>

            </div>

            <HallOfFame />

            <Footer />

        </div>

    );
};

export default Dashboard;