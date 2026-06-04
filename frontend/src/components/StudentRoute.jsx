import React from "react";
import { Navigate } from "react-router-dom";

const StudentRoute = ({ children }) => {

    const token = localStorage.getItem("token");

    const user = JSON.parse(
        localStorage.getItem("user")
    );

    if (!token) {

        return <Navigate to="/" />;

    }

    if (!user?.approved) {

        return (

            <div className="min-h-screen flex items-center justify-center bg-gray-100">

                <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">

                    <h1 className="text-3xl font-bold text-red-600 mb-4">

                        🔒 Access Restricted

                    </h1>

                    <p className="text-gray-600 mb-4">

                        Community and student resources are available only to enrolled PathPrimeEdu students.

                    </p>

                    <p className="text-blue-600 font-semibold">

                        Please contact PathPrimeEdu for enrollment approval.

                    </p>

                </div>

            </div>

        );

    }

    return children;
};

export default StudentRoute;