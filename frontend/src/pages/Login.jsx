import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
    useNavigate,
    Link
} from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "https://pathprimeedu-backend.onrender.com/api/auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem("token", res.data.token);

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            alert(error.response.data.message);

        }
    };

    return (

        <div className="flex justify-center items-center h-screen bg-gray-100">

            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-xl shadow-lg w-[350px]"
            >

                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
                    PathPrimeEdu Login
                </h2>

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />

                <div className="relative">
                    <input
                        placeholder="Enter Password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border p-3 pr-10 rounded"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
                >
                    Login
                </button>

                <p className="mt-4 text-center">
                    Don't have an account?
                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold"
                    >
                        {" "}Register
                    </Link>
                </p>

            </form>

        </div>
    );
};

export default Login;