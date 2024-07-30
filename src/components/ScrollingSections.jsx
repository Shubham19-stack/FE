import React from 'react';

const ScrollingSections = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="flex space-x-4">
          {[1, 2, 3, 4, 5,6,7,8].map((avatar, index) => (
            <div key={index} className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              {`Avatar ${avatar}`}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 overflow-y-scroll h-64 scrollbar-hide">
        {[1, 2, 3, 4, 5].map((image, index) => (
          <div key={index} className="w-full h-64 bg-gray-200 flex items-center justify-center mb-4">
            {`Image ${image}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingSections;
