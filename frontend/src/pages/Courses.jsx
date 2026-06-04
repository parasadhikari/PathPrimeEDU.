import React, { useState } from "react";

import Navbar from "../components/Navbar";
import AdmissionModal from "../components/AdmissionModal";
import Footer from "../components/Footer";

const courses = [

    {
        id: 1,
        icon: "📘",
        title: "Foundation Program (Class 6-8)",
        badge: "⭐ BEST FOR BASICS",
        oldPrice: "₹2000",
        price: "₹1500",
        students: "150+",
        description: "Strong foundation in Maths, Science and CBSE concepts.",
        features: [
            "Full Syllabus",
            "Notes Included",
            "Doubt Support"
        ]
    },

    {
        id: 2,
        icon: "📗",
        title: "Board Preparation (Class 9-10)",
        badge: "🔥 MOST POPULAR",
        oldPrice: "₹2500",
        price: "₹2000",
        students: "200+",
        description: "Complete board preparation with PYQs and tests.",
        features: [
            "Full Syllabus",
            "PYQs Included",
            "Weekly Tests"
        ]
    },

    {
        id: 3,
        icon: "⚛️",
        title: "Class 11 PCM",
        badge: "⭐ FOUNDATION FOR JEE",
        oldPrice: "₹5500",
        price: "₹4500",
        students: "100+",
        description: "Physics, Chemistry and Mathematics with numericals.",
        features: [
            "Physics",
            "Chemistry",
            "Mathematics"
        ]
    },

    {
        id: 4,
        icon: "🚀",
        title: "Class 12 PCM",
        badge: "⭐ BOARD + COMPETITIVE",
        oldPrice: "₹5500",
        price: "₹4500",
        students: "120+",
        description: "Board-focused PCM preparation with advanced concepts.",
        features: [
            "Board Preparation",
            "PYQs",
            "Doubt Sessions"
        ]
    },

    {
        id: 5,
        icon: "💎",
        title: "PCM Master Combo",
        badge: "🔥 BEST VALUE",
        oldPrice: "₹10000",
        price: "₹8500",
        students: "250+",
        description: "Complete Class 11 + 12 PCM package.",
        features: [
            "11th PCM",
            "12th PCM",
            "Priority Support"
        ]
    }

];

const Courses = () => {

    const [selectedCourse, setSelectedCourse] = useState(null);

    return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />
            <div className="p-10">


                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-10 mb-10 shadow-xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-3">

                        📚 Explore Our Courses

                    </h1>

                    <p className="text-base md:text-lg text-blue-100/90 max-w-2xl">

                        Learn smarter with PathPrimeEdu. Comprehensive CBSE preparation,
                        expert guidance, PYQs, doubt support and structured learning paths.

                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center backdrop-blur-sm">

                            <h3 className="text-xl font-semibold">
                                500+
                            </h3>

                            <p>
                                Students
                            </p>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center backdrop-blur-sm">

                            <h3 className="text-xl font-semibold">
                                5
                            </h3>

                            <p>
                                Premium Programs
                            </p>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center backdrop-blur-sm">

                            <h3 className="text-xl font-semibold">
                                4.8★
                            </h3>

                            <p>
                                Student Rating
                            </p>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center backdrop-blur-sm">

                            <h3 className="text-xl font-semibold">
                                CBSE
                            </h3>

                            <p>
                                Focused
                            </p>

                        </div>

                    </div>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {courses.map((course) => (


                        <div
                            key={course.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                        >


                            <div className="p-6">

                                <div className="flex justify-between items-start">

                                    <h2 className="text-2xl font-bold text-blue-600">

                                        {course.icon} {course.title}

                                    </h2>

                                </div>

                                <span className="inline-block mt-3 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold">

                                    {course.badge}

                                </span>

                                <p className="text-gray-600 mt-4">

                                    {course.description}

                                </p>

                                <div className="mt-4 text-sm text-gray-500">

                                    👨‍🎓 {course.students} Students

                                </div>

                                <div className="mt-4 space-y-2">

                                    {course.features.map((feature, index) => (

                                        <p
                                            key={index}
                                            className="text-sm text-gray-700"
                                        >
                                            ✅ {feature}
                                        </p>

                                    ))}

                                </div>

                                <div className="mt-5">

                                    <span className="text-gray-400 line-through mr-2">

                                        {course.oldPrice}

                                    </span>

                                    <span className="text-2xl font-bold text-green-600">

                                        {course.price}

                                    </span>

                                </div>

                                <button
                                    onClick={() => setSelectedCourse(course.title)}
                                    className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition font-semibold"
                                >

                                    🚀 Enroll Now

                                </button>

                            </div>


                        </div>


                    ))}

                </div>

            </div>

            {/* ADMISSION MODAL */}

            {
                selectedCourse && (

                    <AdmissionModal
                        course={selectedCourse}
                        closeModal={() => setSelectedCourse(null)}
                    />

                )
            }

            <Footer />

        </div>
    );
};

export default Courses;