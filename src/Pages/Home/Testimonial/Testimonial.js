import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            location: 'California',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        }
    ]
    return (
        <section>
            <div>
                <div className='flex justify-between items-center'>
                    <div>
                    <h3 className='text-xl font-bold text-secondary uppercase '>Testimonial</h3>
                    <h2 className='text-4xl text-accent'>What Our Patients Says</h2>
                </div>
                    
                    <figure>
                        <img src={quote} alt="" className='lg:w-48 w-24'/>
                    </figure>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-10'>
                    {
                        reviews.map(r => <Review key={r._id} r={r} />)
                    }
                </div>
            </div>

            <div>

            </div>
        </section>
    );
};

export default Testimonial;