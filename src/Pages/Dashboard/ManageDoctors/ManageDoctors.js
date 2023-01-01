import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../Shared/CofirmationModal/CofirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const closeModal = () => {
        setDeletingDoctor(null);
    }
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data)
                    refetch()
                    toast.success(`${doctor.name} deleted successfully!`)
                }
            })
    }
    return (
        <div>
            <h3 className='text-4xl mb-5'>Manage Doctors</h3>

            <div className="overflow-x-auto">
                <table className="table table-normal w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, idx) => <tr key={doctor._id}>
                                <th>{idx + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={doctor.image} alt='doctor' />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td><label onClick={() => setDeletingDoctor(doctor)} htmlFor='confirmation-modal' className='btn btn-sm btn-error'>Delete</label></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal title={'Are you sure you want to delete?'} message={`If you delete ${deletingDoctor.name}. It cannot be undone!`} closeModal={closeModal} successAction={handleDeleteDoctor} modalData={deletingDoctor} />
            }
        </div>
    );
};

export default ManageDoctors;