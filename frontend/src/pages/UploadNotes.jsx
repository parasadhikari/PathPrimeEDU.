import React, { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

const UploadNotes = () => {

    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [className, setClassName] = useState("");

    const [pdf, setPdf] = useState(null);
    const [type, setType] = useState("note");
    const handleUpload = async (e) => {

        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("title", title);
            formData.append("subject", subject);
            formData.append("className", className);
            formData.append("type", type);

            formData.append("pdf", pdf);

            const res = await axios.post(

                "https://pathprimeedu-backend.onrender.com/api/notes/upload",

                formData,

                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            alert(res.data.message);

        } catch (error) {

            console.log(error);

            alert("Upload Failed");
        }
    };

    return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <div className="flex justify-center items-center py-10">

                <form
                    onSubmit={handleUpload}
                    className="bg-white p-8 rounded-xl shadow-lg w-[400px]"
                >

                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
                        Upload Notes
                    </h2>

                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border p-3 rounded mb-4"
                    />

                    <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full border p-3 rounded mb-4"
                    >

                        <option value="">
                            Select Subject
                        </option>

                        <option value="Mathematics">
                            Mathematics
                        </option>

                        <option value="Science">
                            Science
                        </option>

                        <option value="Physics">
                            Physics
                        </option>

                        <option value="Chemistry">
                            Chemistry
                        </option>

                        <option value="Biology">
                            Biology
                        </option>

                        <option value="English">
                            English
                        </option>

                        <option value="SST">
                            SST
                        </option>

                        <option value="Computer">
                            Computer
                        </option>

                    </select>

                    <select
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                        className="w-full border p-3 rounded mb-4"
                    >

                        <option value="">
                            Select Class
                        </option>

                        <option value="Class 6">
                            Class 6
                        </option>

                        <option value="Class 7">
                            Class 7
                        </option>

                        <option value="Class 8">
                            Class 8
                        </option>

                        <option value="Class 9">
                            Class 9
                        </option>

                        <option value="Class 10">
                            Class 10
                        </option>

                        <option value="Class 11">
                            Class 11
                        </option>

                        <option value="Class 12">
                            Class 12
                        </option>

                    </select>

                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full border p-3 rounded mb-4"
                    >

                        <option value="note">
                            Notes
                        </option>

                        <option value="pyq">
                            PYQ
                        </option>

                    </select>

                    <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setPdf(e.target.files[0])}
                        className="w-full border p-3 rounded mb-4"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
                    >
                        Upload PDF
                    </button>

                </form>

            </div>

        </div>
    );
};

export default UploadNotes;