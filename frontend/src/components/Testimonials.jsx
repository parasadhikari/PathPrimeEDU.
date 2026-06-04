import React, { useEffect, useState } from "react";
import axios from "axios";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {

        fetchReviews();

    }, []);

    const fetchReviews = async () => {

        try {

            const res = await axios.get(
                "https://pathprimeedu-backend.onrender.com/api/testimonial/all"
            );

            setReviews(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="bg-gray-100 py-16">

            <h2 className="text-4xl font-bold text-center mb-10">

                ⭐ Student Testimonials

            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

                {reviews.map((review) => (

                    <div
                        key={review._id}
                        className="bg-white p-6 rounded-xl shadow-lg"
                    >

                        <div className="text-yellow-500 mb-3">

                            {"⭐".repeat(review.rating)}

                        </div>

                        <p className="text-gray-700 mb-4">

                            "{review.review}"

                        </p>

                        <h3 className="font-bold">

                            {review.name}

                        </h3>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default Testimonials;