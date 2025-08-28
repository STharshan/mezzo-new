import React from "react";

function HomeHeader() {
    return (
        <div className="bg-pink-50 p-8 md:p-16">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold text-blue-600 mb-4">Honi Poke</h1>
                        <p className="text-xl text-gray-800 mb-8">Catch the wave & enjoy the summer</p>
                        <button className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;
