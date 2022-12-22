import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import bg from '../../../assets/images/bg.png';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
        <header>
            <div className="h-screen" style={{background: `url(${bg})`}}>
                <div className="hero-content flex-col lg:flex-row-reverse flex justify-evenly items-center h-full">
                    <img src={chair} className="max-w-md rounded-lg" alt='chair'/>
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;