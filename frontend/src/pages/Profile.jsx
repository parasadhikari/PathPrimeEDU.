import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <div className="max-w-4xl mx-auto p-4 md:p-8">

                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <div className="text-center">

                        <div className="text-7xl mb-4">
                            👤
                        </div>

                        <h1 className="text-3xl font-bold text-indigo-700">

                            Student Profile

                        </h1>

                        <p className="text-gray-500 mt-2">

                            PathPrimeEdu Learning Portal

                        </p>

                    </div>

                    <div className="mt-8 space-y-5">

                        <div className="border rounded-xl p-4">

                            <h3 className="text-gray-500 text-sm">

                                Full Name

                            </h3>

                            <p className="font-semibold text-lg">

                                {user?.name}

                            </p>

                        </div>

                        <div className="border rounded-xl p-4">

                            <h3 className="text-gray-500 text-sm">

                                Email Address

                            </h3>

                            <p className="font-semibold text-lg">

                                {user?.email}

                            </p>

                        </div>

                        <div className="border rounded-xl p-4">

                            <h3 className="text-gray-500 text-sm">

                                Role

                            </h3>

                            <p className="font-semibold text-lg capitalize">

                                {user?.role}

                            </p>

                        </div>

                        <div className="border rounded-xl p-4">

                            <h3 className="text-gray-500 text-sm">

                                Community Access

                            </h3>

                            <p className="font-semibold text-lg">

                                {user?.approved
                                    ? "✅ Approved Student"
                                    : "⏳ Pending Approval"}

                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>

    );

};

export default Profile;