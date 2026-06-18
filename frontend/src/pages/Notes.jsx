import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Notes = () => {

    const [notes, setNotes] = useState([]);

    const [selectedClass, setSelectedClass] =
        useState("Class 10");

    const [selectedSubject, setSelectedSubject] =
        useState("Mathematics");

    useEffect(() => {

        fetchNotes();

    }, []);

    const fetchNotes = async () => {

        try {

            const res = await axios.get(
                "https://pathprimeedu-backend.onrender.com/api/notes"
            );

            setNotes(
                res.data.filter(
                    item => item.type === "note"
                )
            );

        } catch (error) {

            console.log(error);

        }

    };

    const filteredNotes = notes.filter(

        (note) =>

            note.className === selectedClass &&

            note.subject === selectedSubject

    );

    const subjects =

        selectedClass === "Class 11" ||
            selectedClass === "Class 12"

            ? [
                "Physics",
                "Chemistry",
                "Mathematics",
                "Biology",
                "Computer",
                "English"
            ]

            : [
                "Mathematics",
                "Science",
                "SST",
                "English",
                "Hindi",
                "Sanskrit",
                "Computer"
            ];

    return (

        <div className="bg-gray-100 min-h-screen">

            <Navbar />

            <div className="p-6 md:p-10">

                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar */}

                    <div className="w-full md:w-64 bg-white rounded-2xl shadow-lg p-5 h-fit">

                        <h2 className="text-2xl font-bold text-blue-600 mb-6">

                            📚 Study Notes

                        </h2>

                        <div className="flex flex-col gap-3">

                            {[
                                "Class 6",
                                "Class 7",
                                "Class 8",
                                "Class 9",
                                "Class 10",
                                "Class 11",
                                "Class 12"
                            ].map((cls) => (

                                <button

                                    key={cls}

                                    onClick={() => {

                                        setSelectedClass(cls);

                                        if (
                                            cls === "Class 11" ||
                                            cls === "Class 12"
                                        ) {

                                            setSelectedSubject(
                                                "Physics"
                                            );

                                        } else {

                                            setSelectedSubject(
                                                "Mathematics"
                                            );

                                        }

                                    }}

                                    className={`text-left px-4 py-3 rounded-xl transition-all duration-300

                                    ${selectedClass === cls

                                            ? "bg-blue-600 text-white shadow-lg scale-105"

                                            : "bg-gray-50 text-gray-600 hover:bg-gray-100"

                                        }`}

                                >

                                    {selectedClass === cls
                                        ? "▶ "
                                        : ""}

                                    {cls}

                                </button>

                            ))}

                        </div>

                    </div>

                    {/* Main Content */}

                    <div className="flex-1">

                        <h1 className="text-4xl font-bold text-blue-600 mb-2">

                            {selectedClass}

                        </h1>

                        <p className="text-gray-500 mb-8">

                            Select a subject to access notes

                        </p>

                        {/* Subjects */}

                        <div className="flex flex-wrap gap-3 mb-8">

                            {subjects.map((subject) => (

                                <button

                                    key={subject}

                                    onClick={() =>
                                        setSelectedSubject(subject)
                                    }

                                    className={`px-5 py-2 rounded-full font-medium transition-all duration-300

                                    ${selectedSubject === subject

                                            ? "bg-blue-600 text-white shadow-md"

                                            : "bg-white border hover:bg-gray-50"

                                        }`}

                                >

                                    {subject}

                                </button>

                            ))}

                        </div>

                        {/* Notes Grid */}

                        {filteredNotes.length === 0 ? (

                            <div className="bg-white rounded-2xl shadow-md p-10 text-center">

                                <h2 className="text-2xl font-bold text-gray-600">

                                    📂 No Notes Available

                                </h2>

                                <p className="mt-3 text-gray-500">

                                    No notes found for

                                    {" "}
                                    {selectedSubject}

                                    {" "}
                                    in

                                    {" "}
                                    {selectedClass}

                                </p>

                            </div>

                        ) : (

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                {filteredNotes.map((note) => (

                                    <div

                                        key={note._id}

                                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"

                                    >

                                        <div className="text-4xl mb-3">

                                            📄

                                        </div>

                                        <h3 className="text-xl font-bold text-blue-600">

                                            {note.title}

                                        </h3>

                                        <p className="mt-3 text-gray-600">

                                            Subject: {note.subject}

                                        </p>

                                        <div className="mt-5 flex gap-2">

                                            <Link
                                                to={`/pdf-viewer?url=${encodeURIComponent(note.pdf)}`}
                                                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                                            >
                                                View Notes
                                            </Link>

            
                                            <a
                                                href={note.pdf}
                                                download={`${note.title}.pdf`}
                                                className="inline-block mt-2 bg-green-600 text-white px-5 py-2 rounded-lg"
                                            >
                                                Download PDF
                                            </a>
                                        </div>

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Notes;