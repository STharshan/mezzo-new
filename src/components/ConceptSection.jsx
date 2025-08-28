import React from 'react';

const ConceptSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:px-12 space-y-8 lg:space-y-0">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://via.placeholder.com/500" // Replace with your image URL
          alt="Concept"
          className="rounded-lg shadow-lg object-cover w-full h-full max-w-md"
        />
      </div>
      
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Concept</h2>
        <p className="text-lg text-gray-700 mb-6">
          We combine good ingredients, good recipes, and good chefs to dish up fresh and appetizing bowls of pure wholesomeness. With a result that is seriously good for you too!
        </p>
        
        <div className="text-left">
          <p className="font-semibold text-xl">Here's how it works:</p>
          <ol className="list-decimal pl-6 space-y-2 text-lg">
            <li>Find your store.</li>
            <li>Pick one of our signature dishes or create your own.</li>
            <li>Collect your bowl or have it delivered.</li>
          </ol>
        </div>
        
        <p className="mt-4 text-xl font-semibold">If you prefer, just come by one of our shops and order the old-fashioned way.</p>

        <div className="mt-6 text-xl font-extrabold text-pink-600">It’s simply Pokelicious!</div>
      </div>
    </section>
  );
};

export default ConceptSection;
