import React from 'react';

const ResponsiveForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold mb-6 text-gray-800">
          Stay up to date with our news and offers
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email address *</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="e.g. johnsmith@hotmail.com"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700">Your Name *</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-300 rounded-lg mt-2"
              placeholder="e.g. John"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600">View our privacy policy</a>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveForm;
