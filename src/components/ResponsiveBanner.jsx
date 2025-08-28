import React from "react";

const ResponsiveBanner = () => {
  return (
    <section className="bg-darkGreen text-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side: Text content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-tight mb-4">BALANCE</h1>
          <p className="text-xl mb-6">Lunch made lighter.</p>
          <p className="text-lg mb-8">
            small rice bowls. big flavour. <br />
            Try our new small rice bowls for the perfect lighter options. Choose
            your flavours and keep it fresh, filling, and from just 9.95.
          </p>
          <button className="bg-yellow-500 text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-600 transition-all">
            Order now
          </button>
        </div>
        {/* Right side: Image */}
        <div className="flex justify-center gap-6 lg:gap-12">
          <img
            src="/path/to/your/image1.jpg"
            alt="Rice bowl 1"
            className="w-full max-w-[300px] object-cover rounded-lg"
          />
          <img
            src="/path/to/your/image2.jpg"
            alt="Rice bowl 2"
            className="w-full max-w-[300px] object-cover rounded-lg"
          />
          <img
            src="/path/to/your/image3.jpg"
            alt="Rice bowl 3"
            className="w-full max-w-[300px] object-cover rounded-lg"
          />
          <img
            src="/path/to/your/image4.jpg"
            alt="Rice bowl 4"
            className="w-full max-w-[300px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ResponsiveBanner;
