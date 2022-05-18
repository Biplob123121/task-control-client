import React, { useEffect, useState } from 'react';

const DelTask = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [])

    const deleteTask = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/task/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = tasks.filter(p => p._id !== id);
                        setTasks(remaining);
                    }

                })
        }

    }
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Delete Your Task</h2>
            <div className='lg:w-1/2 mx-auto text-center  my-12'>
                {
                    tasks.map(task => <div key={task._id}>
                        <div className='border-4 border-primary-600 rounded-lg p-8 my-4'>
                            <h3 className='text-2xl font-bold my-4'>Task Name :{task.Tname} </h3>
                            <p className='text-xl mb-4'>Description : {task.description}</p>
                            <button onClick={() => deleteTask(task._id)} className="btn w-full max-w-xs">Delete</button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default DelTask;