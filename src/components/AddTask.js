import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';

const AddTask = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = d => {
        const supplierData = {
            name: `${user.displayName}`,
            email: `${user.email}`
        };
        const data = Object.assign(supplierData, d);

        const url = `https://damp-scrubland-55595.herokuapp.com/task`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged === true) {
                    toast('Your task is added..');
                    reset();
                }
            })
    };
    return (
        <section>

            <div className='flex h-3/4 justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-bold">Add Your Task</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    placeholder='name' value={user.displayName} readOnly disabled className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    placeholder='email' value={user.email} readOnly disabled className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Task Name</span>
                                </label>
                                <input
                                    {...register("Tname", { required: true, maxLength: 20 })} placeholder='Task Name' className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                            <div className="form-control w-full max-w-xs mb-4">
                                <label className="label">
                                    <span className="label-text">Task Description</span>
                                </label>
                                <textarea
                                    {...register("description")} placeholder='Task Description' className="input input-bordered w-full max-w-xs"
                                />
                            </div>
                            <input className='btn w-full max-w-xs' type="submit" value='Completed' />
                        </form>
                        
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default AddTask;