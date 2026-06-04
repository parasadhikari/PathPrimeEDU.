import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AdminDashboard() {
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
          </Link>

          <Link
            to="/create-notice"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold">📢 Create Notice</h2>
          </Link>

          <Link
            to="/testimonial-admin"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold">⭐ Manage Testimonials</h2>
          </Link>

          <Link
            to="/admissions"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl"
          >
            <h2 className="text-2xl font-bold">🎓 Admissions</h2>
          </Link>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;