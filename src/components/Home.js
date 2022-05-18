import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <section>
            <h1 className='text-3xl text-center text-primary font-bold py-4'>Welcome to Task Control!!!</h1>

            <p className='text-center text-2xl text-secondary'>Here, you can add and delete your task. To add your task or delete your task please Login or Sign Up</p>
            <div className='text-center py-8'>
                <Link className='text-2xl text-red-700 font-bold text-center' to='/addtask'><button className="btn btn-outline btn-primary">Add task</button>
                </Link>
            </div>
        </section>

    );
};

export default Login;