import React from 'react';
import Countdown from 'react-countdown';
const endingDate=new Date("2023-10-01")

const Contdown = () => {
    return (
        <Countdown className='font-bold text-4xl bg-blue-300 text-indigo-950 p-3' date={endingDate} />

    );
};

export default Contdown;