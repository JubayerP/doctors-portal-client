import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='my-16'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="lg:w-1/2 -mt-36 hidden lg:block" alt='doctor' />
                    <div>
                        <h3 className='text-xl font-bold text-secondary uppercase '>Appointment</h3>
                        <h2 className='text-4xl text-base-100'>Make an Appointment Today</h2>
                        <p className="py-6 text-base-100 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;