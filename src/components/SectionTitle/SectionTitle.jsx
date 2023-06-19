import React from 'react';

const SectionTitle = ({topH, head, topB}) => {
    return (
        <div className='text-center'>
            <h4 className='text-green-700 mb-3'>{topH}</h4>
            <h1 className='text-4xl text-black font-bold mb-4'>{head}</h1>
            <p className='text-sm text-gray-500'>{topB}</p>
        </div>
    );
};

export default SectionTitle;