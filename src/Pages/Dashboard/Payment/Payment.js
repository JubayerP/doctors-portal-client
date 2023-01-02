import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';
import CheckOut from './CheckOut';

const Payment = () => {
    const { treatment, price, appointmentDate, slot, email, patient, _id } = useLoaderData();
    const stripePromise = loadStripe('pk_test_51MLXIvFH0UnQK3KS4CyoPj5YlxQHTUBf7Y0PrhfOomGN8SSQ1xsUA7MPceiVOlXUPvWkXF8JwYbvN9Ro58rREXOY00UuQ8PnqW');

    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <Loader />
    }

    return (
        <div>
            <h3 className="text-3xl">Payment for {treatment}</h3>
            <p className="text-xl">Please pay <span className='text-primary font-semibold'>${price}</span> for your appointment on <span className='text-primary font-semibold'>{appointmentDate}</span> at <span className='text-primary font-semibold'>{slot}</span>
            </p>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        price={price}
                        email={email}
                        patient={patient}
                        id={_id}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;