import React, { useState } from "react";
import axios from "axios";

import {
    Link,
    useNavigate
} from "react-router-dom";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleRegister = async (e) => {


        e.preventDefault();

        try {

            const res = await axios.post(

                "http://localhost:5000/api/auth/register",

                {
                    name,
                    email,
                    password
                }

            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(res.data.user)
            );

            alert("Welcome to PathPrimeEdu 🎉");

            navigate("/dashboard");

        } catch (error) {

            alert(error.response.data.message);

        }


    };

    return (

        <div className="flex justify-center items-center h-screen bg-gray-100">

            <form
                onSubmit={handleRegister}
                className="bg-white p-8 rounded-xl shadow-lg w-[350px]"
            >

                <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
                    PathPrimeEdu Register
                </h2>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border p-3 rounded mb-4"
                />

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
                >
                    Register
                </button>

                <p className="mt-4 text-center">
                    Already have an account?

                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold"
                    >
                        {" "}Login
                    </Link>
                </p>

            </form>

        </div>
    );
};

export default Register;