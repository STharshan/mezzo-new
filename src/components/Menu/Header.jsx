import React from "react";

const PokeBowlSection = () => {
    return (
        <section className="bg-pink-100 px-4 py-8 md:px-8 lg:px-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side: Text */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-blue-600 mb-4">POKE BOWLS</h1>
                    <p className="text-lg text-gray-700 mb-4">
                        At Honi Poke, we put a lot of pride in our bowls and we're passionate about using the best quality, most wholesome, mindful, and uncompromising ingredients we can get a hold of. We only use sustainable, sashimi-grade raw fish, premium Japanese rice, and the very best quality fruit and veg.
                    </p>
                </div>

                {/* Right Side: Image */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <img src="/poke-bowl.jpg" alt="Poke Bowl" className="w-full h-auto object-cover rounded-lg" />
                </div>
            </div>

            {/* Menu Categories
            <div className="mt-8 text-center">
                <div className="flex justify-center gap-6">
                    <button className="text-white bg-blue-600 px-4 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                        POKE BOWLS
                    </button>
                    <button className="text-white bg-pink-600 px-4 py-2 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300">
                        WARM BOWLS
                    </button>
                    <button className="text-white bg-green-600 px-4 py-2 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
                        POKE BURRITOS
                    </button>
                    <button className="text-white bg-yellow-600 px-4 py-2 rounded-full text-lg font-semibold hover:bg-yellow-700 transition duration-300">
                        SUSHI GRAB&GO
                    </button>
                    <button className="text-white bg-purple-600 px-4 py-2 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
                        BUBBLE TEA
                    </button>
                </div>
            </div> */}
        </section>
    );
};

export default PokeBowlSection;
