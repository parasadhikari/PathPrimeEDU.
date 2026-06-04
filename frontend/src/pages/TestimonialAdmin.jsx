import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TestimonialAdmin = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetchReviews();

    }, []);

    const fetchReviews = async () => {

        const res = await axios.get(
            "https://pathprimeedu-backend.onrender.com/api/testimonial/admin"
        );

        setReviews(res.data);

    };

    const updateStatus = async (
        id,
        status
    ) => {

        await axios.put(

            `https://pathprimeedu-backend.onrender.com/api/testimonial/status/${id}`,

            { status }

        );

        fetchReviews();

    };

    return (

        <div>

            <Navbar />

            <div className="p-8">

                <h1 className="text-4xl font-bold mb-8">

                    Testimonial Approval

                </h1>

                {reviews.map((review) => (

                    <div
                        key={review._id}
                        className="bg-white p-5 shadow rounded-lg mb-5"
                    >

                        <h3 className="font-bold">

                            {review.name}

                        </h3>

                        <p>

                            {review.review}

                        </p>

                        <p className="mt-2">

                            Status:
                            {" "}
                            {review.status}

                        </p>

                        <div className="mt-4 flex gap-3">

                            <button

                                onClick={() =>
                                    updateStatus(
                                        review._id,
                                        "Approved"
                                    )
                                }

                                className="bg-green-600 text-white px-4 py-2 rounded"
                            >

                                Approve

                            </button>

                            <button

                                onClick={() =>
                                    updateStatus(
                                        review._id,
                                        "Rejected"
                                    )
                                }

                                className="bg-red-600 text-white px-4 py-2 rounded"
                            >

                                Reject

                            </button>

                        </div>

                    </div>

                ))}

            </div>

            <Footer />

        </div>
    );
};

export default TestimonialAdmin;