// pages/BookingComponent.tsx or components/BookingComponent.tsx

import React from 'react';

const BookingComponent: React.FC = () => {
  const handleAreaClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="wp-block-group is-layout-constrained wp-block-group-is-layout-constrained">
      <div className="wp-block-group__inner-container">
        {/* Spacer Div */}
        <div style={{ height: '0px' }} aria-hidden="true" className="wp-block-spacer"></div>
        
        {/* Separator */}
        <hr className="wp-block-separator has-alpha-channel-opacity" />
        
        <h3 className="wp-block-heading" id="h-to-book-a-single-session-please-use-our-interactive-timetable-below">
          To book a single session, please use our interactive timetable below:
        </h3>
        
        {/* Meta Tags - Typically, these would be in the <Head> of your Next.js document */}
        
        {/* Image Container */}
        <div className="image-container">
          <img
            className="lazyloaded"
            decoding="async"
            src="https://ebatt.co.uk/wp-content/uploads/2024/03/eBaTT_498x697.webp"
            alt="Interactive Image"
            style={{ width: '100%' }}
          />
          
          {/* Clickable Areas */}
          <div
            className="clickable-area"
            style={{ top: '33%', left: '1%', width: '48%', height: '15%' }}
            onClick={() => handleAreaClick('https://ebattbooking.simplybook.it/v2/#book/category/43/service/105/count/1/')}
          ></div>
          {/* More clickable areas would follow similarly */}
        </div>
        
        {/* Button */}
        <button
          id="bookingButton"
          style={{
            padding: '10px 20px',
            backgroundColor: 'rgb(0, 123, 255)',
            color: 'white',
            border: '2px solid transparent',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            outline: 'none',
            transition: 'background-color 0.3s ease 0s, color 0.3s ease 0s, border-color 0.3s ease 0s',
          }}
          onMouseOver={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = '#0056b3';
            target.style.color = '#ffa500';
            target.style.borderColor = '#ffa500';
          }}
          onMouseOut={(e) => {
            const target = e.currentTarget;
            target.style.backgroundColor = '#007bff';
            target.style.color = 'white';
            target.style.borderColor = 'transparent';
          }}
          onFocus={(e) => {
            const target = e.currentTarget;
            target.style.borderColor = '#ffa500';
          }}
          onBlur={(e) => {
            const target = e.currentTarget;
            target.style.borderColor = 'transparent';
          }}
          onClick={() => handleAreaClick('https://ebattbooking.simplybook.it/v2/#packages')}
        >
          Packages
        </button>
        
        {/* Further content would continue here, following the same pattern */}
      </div>
    </div>
  );
};

export default BookingComponent;
