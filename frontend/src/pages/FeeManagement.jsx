import React, { useEffect, useState } from "react";
import axios from "axios";

const FeeManagement = () => {

    const [students, setStudents] = useState([]);

    const [form, setForm] = useState({
        studentName: "",
        className: "",
        phone: "",
        monthlyFee: "",
        joinDate: "",
        advanceMonths: 0
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

const updateMonth = async (
    id,
    month,
    currentStatus
) => {

    const nextStatus =
        currentStatus === "paid"
            ? "unpaid"
            : "paid";

    await axios.put(
        `https://pathprimeedu-backend.onrender.com/api/fees/month/${id}`,
        {
            month,
            status: nextStatus
        }
    );

    fetchStudents();
};

useEffect(() => {

    fetchStudents();

}, []);

    const handleAddStudent = async (e) => {

        e.preventDefault();
        console.log("Button clicked");
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

            console.log(error.response);

            alert(
                error.response?.data?.message ||
                "Failed to add student"
            );
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
                    <input
                        type="date"
                        value={form.joinDate}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                joinDate: e.target.value
                            })
                        }
                        className="border p-3 rounded"
                    />
                    <input
                        type="number"
                        placeholder="Advance Months"
                        value={form.advanceMonths}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                advanceMonths: e.target.value
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
                            <th className="p-3">Fee</th>
                            <th className="p-3">Apr</th>
                            <th className="p-3">May</th>
                            <th className="p-3">June</th>
                            <th className="p-3">July</th>
                            <th className="p-3">Aug</th>
                            <th className="p-3">Sep</th>
                            <th className="p-3">Oct</th>
                            <th className="p-3">Nov</th>
                            <th className="p-3">Dec</th>
                            <th className="p-3">Jan</th>
                            <th className="p-3">Feb</th>
                            <th className="p-3">Mar</th>

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
                ₹{student.monthlyFee}
            </td>

            <td className="p-3">
                <button
                    onClick={() =>
                        updateMonth(
                            student._id,
                            "Apr",
                            student.monthlyStatus?.Apr
                        )
                    }
                >
                    {
                        student.monthlyStatus?.Apr === "paid"
                            ? "✅"
                            : "❌"
                    }
                </button>
            </td>

            <td className="p-3">
                <button
                    onClick={() =>
                        updateMonth(
                            student._id,
                            "May",
                            student.monthlyStatus?.May
                        )
                    }
                >
                    {
                        student.monthlyStatus?.May === "paid"
                            ? "✅"
                            : "❌"
                    }
                </button>
            </td>

            <td className="p-3">
                <button
                    onClick={() =>
                        updateMonth(
                            student._id,
                            "Jun",
                            student.monthlyStatus?.Jun
                        )
                    }
                >
                    {
                        student.monthlyStatus?.Jun === "paid"
                            ? "✅"
                            : "❌"
                    }
                </button>
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