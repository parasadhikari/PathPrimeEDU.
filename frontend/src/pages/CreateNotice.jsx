import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const CreateNotice = () => {

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [pinned, setPinned] = useState(false);
    const [category, setCategory] = useState("General");
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:5000/api/notices",
                {
                    title,
                    message,
                    pinned,
                    category
                }
            );

            alert("Notice Posted Successfully 🎉");

            setTitle("");
            setMessage("");
            setPinned(false);
            setCategory("General");

        } catch (error) {

            console.log(error);

            alert("Failed to post notice");

        }

    };

    return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <div className="max-w-3xl mx-auto py-10">

                <div className="bg-white p-8 rounded-2xl shadow-xl">

                    <h1 className="text-4xl font-bold text-blue-600 mb-6">

                        📢 Create Notice

                    </h1>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Notice Title"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                            className="w-full border p-3 rounded-lg mb-4"
                            required
                        />

                        <textarea
                            placeholder="Write your announcement..."
                            value={message}
                            onChange={(e) =>
                                setMessage(e.target.value)
                            }
                            rows="6"
                            className="w-full border p-3 rounded-lg mb-4"
                            required
                        />

                        <select
                            value={category}
                            onChange={(e) =>
                                setCategory(e.target.value)
                            }
                            className="w-full border p-3 rounded-lg mb-4"
                        >

                            <option value="General">
                                General
                            </option>

                            <option value="Exam">
                                Exam
                            </option>

                            <option value="Assignment">
                                Assignment
                            </option>

                            <option value="Holiday">
                                Holiday
                            </option>

                            <option value="Important">
                                Important
                            </option>

                            <option value="Notes">
                                Notes
                            </option>

                        </select>


                        <label className="flex items-center gap-2 mb-5">

                            <input
                                type="checkbox"
                                checked={pinned}
                                onChange={(e) =>
                                    setPinned(e.target.checked)
                                }
                            />

                            📌 Pin this notice

                        </label>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                        >
                            🚀 Publish Notice
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

};

export default CreateNotice;