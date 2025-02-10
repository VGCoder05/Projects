import React from 'react';

const Fixed_detail = ({ fixed_detail }) => {
    return (
        <div className="fixed_detail">
            {
                Object.keys(fixed_detail).map((details) => (
                    <div className='detail'>
                        <h2>{details}:</h2>
                        <p>{fixed_detail[details]}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Fixed_detail;