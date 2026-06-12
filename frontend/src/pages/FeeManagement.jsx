import React, { useEffect, useState } from "react";
import axios from "axios";

const FeeManagement = () => {

    const [students, setStudents] = useState([]);

    const [form, setForm] = useState({
        studentName: "",
        className: "",
        phone: "",
        monthlyFee: ""
    });

    const fetchStudents = async () => {

        try {

            const res = await axios.get(
                "https://pathprimeedu-backend.onrender.com/api/fees"
            );

            setStudents(res.data);

        } catch (error) {

            console.log(error);

        }
    };

    useEffect(() => {

        fetchStudents();

    }, []);

    const handleAddStudent = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "https://pathprimeedu-backend.onrender.com/api/fees/add",
                form
            );

            alert("Student Added");

            setForm({
                studentName: "",
                className: "",
                phone: "",
                monthlyFee: ""
            });

            fetchStudents();

        } catch (error) {

            console.log(error);

        }
    };

    return (

        <div className="p-8 bg-gray-100 min-h-screen">

            <h1 className="text-4xl font-bold mb-6 text-center">
                💰 Fee Management
            </h1>

            <form
                onSubmit={handleAddStudent}
                className="bg-white p-6 rounded-xl shadow mb-8"
            >

                <div className="grid md:grid-cols-4 gap-4">

                    <input
                        type="text"
                        placeholder="Student Name"
                        value={form.studentName}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                studentName: e.target.value
                            })
                        }
                        className="border p-3 rounded"
                    />

                    <input
                        type="text"
                        placeholder="Class"
                        value={form.className}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                className: e.target.value
                            })
                        }
                        className="border p-3 rounded"
                    />

                    <input
                        type="text"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                phone: e.target.value
                            })
                        }
                        className="border p-3 rounded"
                    />

                    <input
                        type="number"
                        placeholder="Monthly Fee"
                        value={form.monthlyFee}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                monthlyFee: e.target.value
                            })
                        }
                        className="border p-3 rounded"
                    />

                </div>

                <button
                    className="mt-4 bg-green-600 text-white px-6 py-3 rounded"
                >
                    Add Student
                </button>

            </form>

            <div className="bg-white rounded-xl shadow overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="bg-gray-200">

                            <th className="p-3">Name</th>
                            <th className="p-3">Class</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Fee</th>
                            <th className="p-3">Paid</th>
                            <th className="p-3">Pending</th>
                            <th className="p-3">Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {students.map((student) => (

                            <tr
                                key={student._id}
                                className="border-t text-center"
                            >

                                <td className="p-3">
                                    {student.studentName}
                                </td>

                                <td className="p-3">
                                    {student.className}
                                </td>

                                <td className="p-3">
                                    {student.phone}
                                </td>

                                <td className="p-3">
                                    ₹{student.monthlyFee}
                                </td>

                                <td className="p-3">
                                    ₹{student.totalPaid}
                                </td>

                                <td className="p-3">
                                    ₹{student.pendingAmount}
                                </td>

                                <td className="p-3">

                                    <span
                                        className={`px-3 py-1 rounded text-white ${
                                            student.status === "Paid"
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                        }`}
                                    >
                                        {student.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default FeeManagement;