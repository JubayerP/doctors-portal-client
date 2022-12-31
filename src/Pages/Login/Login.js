import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { useToken } from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [show, setShow] = useState(false);
    const [loginEmail, setLoginEmail] = useState('')
    const { signIn, providerLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [token]= useToken(loginEmail)

    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();

    if (token) {
        navigate(from, {replace: true})
    }

    const handleLogin = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginEmail(data.email)
            })
        .catch(err => console.log(err))
    }

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
            })
        .catch(err => console.log(err))
    }
    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className="text-xl text-center">Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register('email', {required: 'Email Address is Required'})} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input onClick={() => setShow(!show)} {...register('password', {required: true})} type={show ? 'text' : 'password'} placeholder="Password" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value={'Login'} />
                </form>
                <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create an Accout</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full' onClick={handleGoogleLogin}>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;