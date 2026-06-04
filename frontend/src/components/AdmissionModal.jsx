import React, { useState } from "react";
import axios from "axios";
const AdmissionModal = ({ course, closeModal }) => {

    const [name, setName] = useState("");
    const [parentName, setParentName] = useState("");

    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [courseType, setCourseType] = useState("");

const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const res = await axios.post(

            "https://pathprimeedu-backend.onrender.com/api/admission/create",

            {

                studentName: name,
                parentName,
                phone,
                email,
                selectedCourse: course,
                courseType

            }

        );

        alert(res.data.message);

        closeModal();

    } catch(error){

        console.log(error);

        alert("Submission Failed");
    }
};

    return (

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">

            <div className="bg-white rounded-2xl w-full max-w-md relative max-h-[90vh] overflow-y-auto shadow-2xl mx-2">

                {/* CLOSE BUTTON */}

                <button
                    onClick={closeModal}
                    className="absolute top-3 right-4 text-3xl text-gray-500 hover:text-red-500"
                >
                    ×
                </button>

                <div className="p-4 md:p-6">

                   <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-indigo-600">

                        Enrollment Form

                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >

                        {/* SELECTED COURSE */}

                        <div>

                            <label className="font-semibold text-gray-700">

                                Selected Course

                            </label>

                            <input
                                type="text"
                                value={course}
                                readOnly
                                className="w-full border p-3 rounded bg-gray-100 mt-1"
                            />

                        </div>


                        {/* STUDENT NAME */}

                        <input
                            type="text"
                            placeholder="Student Name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="w-full border p-3 rounded"
                            required
                        />


                        {/* PARENT NAME */}

                        <input
                            type="text"
                            placeholder="Parent Name"
                            value={parentName}
                            onChange={(e)=>setParentName(e.target.value)}
                            className="w-full border p-3 rounded"
                            required
                        />


                        {/* PHONE */}

                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            className="w-full border p-3 rounded"
                            required
                        />


                        {/* EMAIL */}

                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="w-full border p-3 rounded"
                            required
                        />


                        {/* COURSE TYPE */}

                        <select
                            value={courseType}
                            onChange={(e)=>setCourseType(e.target.value)}
                            className="w-full border p-3 rounded"
                            required
                        >

                            <option value="">
                                Select Course Type
                            </option>

                            <option value="Full Syllabus">
                                Full Syllabus
                            </option>

                            <option value="Crash Course">
                                Crash Course
                            </option>

                            <option value="PCM Combo">
                                PCM Combo
                            </option>

                            <option value="PYQ Batch">
                                PYQ Batch
                            </option>

                            <option value="Notes Access">
                                Notes Access
                            </option>

                        </select>


                        {/* SUBMIT BUTTON */}

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
                        >

                            Submit Admission

                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default AdmissionModal;