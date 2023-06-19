import React from 'react';

const SectionTitle = ({topH, head, topB}) => {
    return (
        <div>
            <h4 className='text-green-700 mb-10'>{topH}</h4>
            <h1 className='text-2xl text-black font-bold mb-10'>{head}</h1>
            <p className='text-sm text-gray-500'>{topB}</p>
        </div>
    );
};

export default SectionTitle;