import React, { useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Testimonial = () => {

    const user =
        JSON.parse(localStorage.getItem("user"));

    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "https://pathprimeedu-backend.onrender.com/api/testimonial/create",
                {
                    name: user?.name,
                    email: user?.email,
                    rating,
                    review
                }
            );

            alert("Review Submitted Successfully");

            setReview("");

        } catch (error) {

            console.log(error);

            alert("Submission Failed");

        }

    };

    return (

        <div>

            <Navbar />

            <div className="min-h-screen bg-gray-100 p-8">

                <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">

                    <h1 className="text-3xl font-bold mb-6 text-center">

                        ⭐ Submit Testimonial

                    </h1>

                    <form onSubmit={handleSubmit}>

                        <label className="block mb-2">
                            Rating
                        </label>

                        <select
                            value={rating}
                            onChange={(e) =>
                                setRating(e.target.value)
                            }
                            className="w-full border p-3 rounded mb-4"
                        >
                            <option value="5">⭐⭐⭐⭐⭐</option>
                            <option value="4">⭐⭐⭐⭐</option>
                            <option value="3">⭐⭐⭐</option>
                            <option value="2">⭐⭐</option>
                            <option value="1">⭐</option>
                        </select>

                        <label className="block mb-2">
                            Your Review
                        </label>

                        <textarea
                            value={review}
                            onChange={(e) =>
                                setReview(e.target.value)
                            }
                            rows="5"
                            required
                            className="w-full border p-3 rounded mb-4"
                            placeholder="Share your experience..."
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                        >
                            Submit Review
                        </button>

                    </form>

                </div>

            </div>

            <Footer />

        </div>
    );
};

export default Testimonial;