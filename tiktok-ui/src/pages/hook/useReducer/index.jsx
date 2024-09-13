import React, { useReducer, useRef } from 'react';

const initState = 0;
const initstateTodo = {
    job: '',
    jobs: []
};

const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';
const setJob = payload => ({
    type: SET_JOB,
    payload
});

const addJob = payload => ({
    type: ADD_JOB,
    payload
});
const deleteJob = payload => ({
    type: DELETE_JOB,
    payload
});


const reducer = (state, action) => {
    switch (action.type) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('invalid action');
    }
};

const reducerTodo = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, state.job],
                job: ''
            };
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            return {

                ...state,
                jobs: newJobs

            }
        default:
            throw new Error('invalid action');
    }
};

export default function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initState);
    const [statee, dispatchTodo] = useReducer(reducerTodo, initstateTodo);
    const { job, jobs } = statee;
    const inputRef = useRef()
    return (
        <div>
            <h1>{count}</h1>
            <button
                style={{ margin: 10 }}
                onClick={() => dispatch({ type: UP_ACTION })}
            >
                Up
            </button>
            <button
                onClick={() => dispatch({ type: DOWN_ACTION })}
            >
                Down
            </button>

            <h1 style={{ marginTop: 20 }}>Todo</h1>
            <input
                placeholder='Enter todo...'
                value={job}
                onChange={e => {
                    dispatchTodo(setJob(e.target.value))
                    inputRef.current.focus()
                }}
                ref={inputRef}
            />
            <button
                style={{ marginLeft: 10 }}
                onClick={() => dispatchTodo(addJob())}
            >
                Add
            </button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <span onClick={() => dispatchTodo(deleteJob(index))}>
                            &times;
                        </span></li>
                ))}
            </ul>
        </div>
    );
}
