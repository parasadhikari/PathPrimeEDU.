import React, { useState } from "react";
import axios from "axios";

const StudentOfMonthAdmin = () => {

    const [form, setForm] = useState({

        name: "",
        className: "",
        percentage: "",
        achievement: "",
        quote: "",
        month: "",
        image: ""

    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("name", form.name);
            formData.append("className", form.className);
            formData.append("percentage", form.percentage);
            formData.append("achievement", form.achievement);
            formData.append("quote", form.quote);
            formData.append("month", form.month);

            formData.append(
                "image",
                form.image
            );

            await axios.post(
                "https://pathprimeedu-backend.onrender.com/api/student-of-month",
                formData
            );

            alert(
                "Student Of Month Added"
            );

        } catch (error) {

            console.log(error);

            console.log(error.response);

            alert(
                error.response?.data?.message ||
                error.message
            );

        }

    };

    return (

        <div className="p-8">

            <h1 className="text-4xl font-bold mb-8">

                🏆 Student Of The Month

            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-xl shadow"
            >

                <div className="grid md:grid-cols-2 gap-4">

                    <input
                        placeholder="Student Name"
                        className="border p-3 rounded"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                name: e.target.value
                            })
                        }
                    />

                    <input
                        placeholder="Class"
                        className="border p-3 rounded"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                className: e.target.value
                            })
                        }
                    />

                    <input
                        placeholder="Percentage"
                        className="border p-3 rounded"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                percentage: e.target.value
                            })
                        }
                    />

                    <input
                        placeholder="Month"
                        className="border p-3 rounded"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                month: e.target.value
                            })
                        }
                    />

                    <input
                        placeholder="Achievement"
                        className="border p-3 rounded"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                achievement: e.target.value
                            })
                        }
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                image: e.target.files[0]
                            })
                        }
                    />

                </div>

                <textarea
                    placeholder="Quote"
                    className="border p-3 rounded w-full mt-4"
                    rows="4"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            quote: e.target.value
                        })
                    }
                />

                <button
                    className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded"
                >
                    Save Student
                </button>

            </form>

        </div>

    );

};

export default StudentOfMonthAdmin;