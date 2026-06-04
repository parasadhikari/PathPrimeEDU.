import React, { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Admissions = () => {

    const [admissions, setAdmissions] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        fetchAdmissions();

    }, []);

    const fetchAdmissions = async () => {

        try {

            const res = await axios.get(
                "https://pathprimeedu-backend.onrender.com/api/admission/all"
            );

            setAdmissions(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    const filteredAdmissions = admissions.filter((item) =>
        item.studentName
            .toLowerCase()
            .includes(search.toLowerCase())
    );


    return (

        <div>

            <Navbar />

            <div className="p-8">

                <h1 className="text-4xl font-bold mb-8">

                    Admission Requests

                </h1>
                <p className="text-gray-600 mb-4">
                    Total Admissions: {filteredAdmissions.length}
                </p>

                <div className="mb-6">

                    <input
                        type="text"
                        placeholder="Search student..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border p-3 rounded-lg w-full md:w-96"
                    />

                </div>

                <div className="overflow-x-auto">

                    <table className="w-full border shadow-lg bg-white rounded-lg overflow-hidden">

                        <thead>

                            <tr className="bg-blue-600 text-white">

                                <th className="p-3">Student</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Course</th>
                                <th className="p-3">Type</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Date</th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredAdmissions.map((item) => (

                                <tr
                                    key={item._id}
                                    className="border-b text-center hover:bg-gray-50"
                                >

                                    <td className="p-3">
                                        {item.studentName}
                                    </td>

                                    <td className="p-3">
                                        {item.phone}
                                    </td>

                                    <td className="p-3">
                                        {item.email}
                                    </td>

                                    <td className="p-3">
                                        {item.selectedCourse}
                                    </td>

                                    <td className="p-3">
                                        {item.courseType}
                                    </td>

                                    <td className="p-3">

                                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

                                            Pending

                                        </span>

                                    </td>

                                    <td className="p-3">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

            <Footer />

        </div>
    );
};

export default Admissions;