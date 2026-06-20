import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";



function AdminDashboard() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />

            <div className="min-h-screen bg-gray-100 p-10">

                <h1 className="text-4xl font-bold text-center mb-10">
                    Admin Dashboard
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <Link
                        to="/upload-notes"
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
                    >
                        <h2 className="text-2xl font-bold">📚 Upload Notes</h2>
                        <p className="mt-2 text-gray-600">
                            Upload Notes or Pyqs for quick learning.
                        </p>
                    </Link>




                    <Link
                        to="/create-notice"
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
                    >
                        <h2 className="text-2xl font-bold">📢 Create Notice</h2>
                        <p className="mt-2 text-gray-600">
                            Information Portal for any New update regarding batches
                        </p>
                    </Link>


                    <div
                        onClick={() =>
                            navigate("/student-of-month-admin")
                        }
                        className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg"
                    >

                        <h2 className="text-2xl font-bold">
                            🏆 Student Of The Month
                        </h2>

                        <p className="mt-2 text-gray-600">
                            Manage monthly achievers
                        </p>

                    </div>





                    <Link
                        to="/student-approvals"
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
                    >
                        <h2 className="text-2xl font-bold">
                            👥 Student Approvals
                        </h2>

                        <p className="mt-2 text-gray-600">
                            Approve new student registrations
                        </p>
                    </Link>




                    <Link
                        to="/admissions"
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
                    >
                        <h2 className="text-2xl font-bold">🎓 Admissions</h2>
                        <p className="mt-2 text-gray-600">
                            Number of admission through website.
                        </p>
                    </Link>




                    <Link
                        to="/testimonial-admin"
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
                    >
                        <h2 className="text-2xl font-bold">⭐ Manage Testimonials</h2>
                        <p className="mt-2 text-gray-600">
                            Manage submitted Reviews.
                        </p>
                    </Link>




                    <div
                        onClick={() => navigate("/fees")}
                        className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-xl transition"
                    >
                        <h2 className="text-3xl font-bold text-black-500">
                            💰Fee Record
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Fee Management
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;