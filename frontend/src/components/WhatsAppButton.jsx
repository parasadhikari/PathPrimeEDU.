import React from "react";

const WhatsAppButton = () => {

    const phoneNumber = "919667273657";

    const message =
        "Hello PathPrimeEdu Team, I want to know more about your courses.";

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (

        <a
            href={whatsappURL}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
        >

            <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                className="w-10 h-10"
            />

        </a>
    );
};

export default WhatsAppButton;