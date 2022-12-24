import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);

    const handleSignUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        .catch(err => console.log(err))
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-xl text-center">Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register('name')} type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email')} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register('password')} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value={'Login'} />
                </form>
                <p>Already have an account? <Link className='text-secondary' to='/login'>Log In</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;