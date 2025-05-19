import React from 'react';

const Hero = () => {
  return (
    <div className="bg-violet-100 py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-md">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-violet-800 mb-4">
            New Research from Harvard University and The National Library of Medicine Proves
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-black mb-4">
            You Can Boost Your Balance and Bulletproof Your Body from Devastating Falls with New Special Sequence.
          </h2>
          <h3 className="text-lg md:text-xl lg:text-2xl font-medium text-center text-black mb-8">
            The best part? It Only Takes Minutes!
          </h3>

          <div className="flex justify-center mb-8">
            <img
              src="https://ext.same-assets.com/4288299207/3024317051.png"
              alt="Fall Prevention"
              className="max-w-full h-auto rounded-md shadow-sm"
            />
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-violet-800 mb-6">
            Every Step You Take Each Day Puts You at Risk For a Life-Threatening Fall That Can Change Your Life Forever!
          </h2>

          <p className="text-md md:text-lg text-gray-700 mb-4 max-w-4xl mx-auto">
            Each year, approximately 684,000 people die from falls - and over 37 million falls are severe enough to require medical attention!
          </p>

          <p className="text-md md:text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
            The World Health Organization (WHO) reports that falls are currently the 2nd leading cause of unintentional injury deaths worldwide.
          </p>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-violet-800 mb-10">
            And you could be next!
          </h2>

          <div className="text-center">
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-md">
              Get My Fall-Proof Yoga Program Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
