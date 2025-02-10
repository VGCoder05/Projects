import React, { useState } from 'react';

const Multiple_options_option = ({ chooices }) => {

    return (
        <div className='option'>
            {Object.keys(chooices).map((chooice) => (
                <Options_of_prod chooices={chooices} chooice={chooice} />
            ))}

        </div>
    );
};

export default Multiple_options_option;

const Options_of_prod = ({ chooices, chooice }) => {
    const [option, setoption] = useState(chooices[chooice][0]);

    return (
        <div className='chooice'>
            <h2 className="heading">{chooice}: <span>{option} </span> </h2>
            <div className='chooices'>
                {
                    chooices[chooice].map((val) => (
                        <button onClick={() => setoption(val)}>{val}</button>
                    ))
                }
            </div>
        </div>
    )
}