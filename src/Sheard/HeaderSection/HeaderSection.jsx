import React from 'react';

const HeaderSection = ({name}) => {
    return (
        <div>
            <h1 className="text-center font-bold font-roboto text-xl sm:text-5xl md:text-3xl lg:text-6xl text-green-500 mt-20">
                {name}
            </h1>
            {/* Stylish HR Line */}
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-400 mx-auto mt-4 rounded-full shadow-lg animate-pulse"></div>
        </div>
    );
};

export default HeaderSection;