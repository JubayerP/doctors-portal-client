import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit } = useForm();
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    const { data: specialties = [] } = useQuery({
        queryKey: ['appointmentSpecialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctor = data => {
        const img = data.img[0]
        const formData = new FormData();
        formData.append('image', img)
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    fetch('http://localhost:5000/doctors',{
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body:JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(postData => {
                            if (postData.acknowledged) {
                                toast.success(`${data.name}`)
                                navigate('/dashboard/managedoctors')
                            }
                    })
                }
            })
    }
    return (
        <div className='w-96 p-7'>
            <h3 className='text-4xl'>Add A Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty', { required: true })} className="select select-bordered w-full max-w-xs focus:outline-none">
                        {
                            specialties.map(specialty => <option value={specialty.name} key={specialty._id}>{specialty.name}</option>)
                        }
                    </select>
                </div>

                <input {...register('img', { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs my-3 text-accent" />
                <input className='btn btn-accent w-full' type="submit" value={'Add Doctor'} />
            </form>
        </div>
    );
};

export default AddDoctor;