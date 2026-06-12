import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";
import Courses from "./pages/Courses";
import Notes from "./pages/Notes";
import UploadNotes from "./pages/UploadNotes";
import PYQ from "./pages/PYQ";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import Testimonial from "./pages/Testimonial";
import TestimonialAdmin from "./pages/TestimonialAdmin";
import CreateNotice from "./pages/CreateNotice";
import NoticeBoard from "./pages/NoticeBoard";
import StudentRoute from "./components/StudentRoute";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import StudentApprovals from "./pages/StudentApprovals";
import FeeManagement from "./pages/FeeManagement";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard />
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/notes"
          element={<Notes />}
        />

        <Route
          path="/pyqs"
          element={<PYQ />}
        />

        <Route
          path="/upload-notes"
          element={
            <ProtectedRoute>
              <UploadNotes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admissions"
          element={
            <ProtectedRoute>
              <Admissions />
            </ProtectedRoute>
          }
        />


        <Route
          path="/testimonial"
          element={
            <ProtectedRoute>
              <Testimonial />
            </ProtectedRoute>
          }
        />


        <Route
          path="/testimonial-admin"
          element={
            <ProtectedRoute>
              <TestimonialAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-notice"
          element={
            <ProtectedRoute>
              <CreateNotice />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notice-board"
          element={
            <StudentRoute>
              <NoticeBoard />
            </StudentRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />
        <Route
          path="/student-approvals"
          element={<StudentApprovals />}
        />

        <Route
          path="/fees"
          element={<FeeManagement />}
        />



      </Routes>

      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;