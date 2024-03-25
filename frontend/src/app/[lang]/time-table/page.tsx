// Import React and any components
import React from 'react';
import SVGComponent from '../components/SVGComponent'; // Adjust this import path as necessary

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24">
      {/* Title and introduction text */}
      <div className="text-center mb-5 px-4">
        <h1 className="text-2xl mb-4">eBaTT Shefford Table Tennis Club</h1>
        <p className="text-lg">
          Welcome to the eBaTT Shefford Table Tennis Club. We offer a range of coaching and play packages for all ages and skill levels. Explore our offerings and join our community to experience the best of table tennis coaching and play.
        </p>
      </div>
      
      {/* Container for the interactive table/SVGComponent */}
      <div className="w-full overflow-x-auto px-4">
        <div className="max-w-[700px] min-w-[320px] mx-auto">
          <SVGComponent className="w-full min-w-full" />
        </div>
      </div>
      
      {/* Additional content below the table */}
      <div className="mt-5 text-center px-4">
        <p className="text-lg">
          For more details on our packages, please see the options below.
        </p>
        {/* Additional dynamic content can go here */}
      </div>
    </div>
  );
};

export default Page;
