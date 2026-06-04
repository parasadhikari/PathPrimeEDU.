import React from "react";

const achievements = [


{
    id: 1,
    title: "Academic Excellence",
    score: "98.6%",
    icon: "🏆",
    description: "Outstanding Board Performance"
},

{
    id: 2,
    title: "Consistency Award",
    score: "97.2%",
    icon: "⭐",
    description: "Excellent Academic Growth"
},

{
    id: 3,
    title: "Mathematics Star",
    score: "96.8%",
    icon: "📐",
    description: "Exceptional Problem Solving"
},

{
    id: 4,
    title: "Science Champion",
    score: "99.1%",
    icon: "🔬",
    description: "Top Science Performer"
}


];

const HallOfFame = () => {


return (

    <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-4">

            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">

                🏆 Success Stories

            </h1>

            <p className="text-center text-gray-600 mb-14">

                Celebrating academic excellence and student achievements

            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {achievements.map((item) => (

                    <div
                        key={item.id}
                        className="bg-gradient-to-br from-white to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
                    >

                        <div className="text-6xl mb-5">

                            {item.icon}

                        </div>

                        <h2 className="text-2xl font-bold text-gray-800">

                            {item.title}

                        </h2>

                        <h3 className="text-5xl font-extrabold text-indigo-600 mt-5">

                            {item.score}

                        </h3>

                        <p className="text-gray-600 mt-4">

                            {item.description}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    </section>

);


};

export default HallOfFame;
