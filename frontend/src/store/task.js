import jwtFetch from "./jwt";
import * as sessionActions from '../store/session';

const RECEIVE_TASK = 'tasks/RECEIVE_TASK';
const REMOVE_TASK = 'tasks/REMOVE_TASK';
const ADD_TASK = 'tasks/ADD_TASK';
const UPDATE_TASK = 'tasks/UPDATE_TASK';


const getTask = task => ({
    type: RECEIVE_TASK,
    task
});

const removeTask = tasks => ({
    type: REMOVE_TASK,
    tasks
});

const addTask = task => ({
    type: ADD_TASK,
    task
})

const receiveTasks = tasks => ({
    type: UPDATE_TASK,
    tasks
})

export const getTasks = () => ({tasks}) => tasks ? Object.values(tasks) : null;

export const fetchTask = (task) => dispatch => {
    dispatch(getTask(task));
};

export const createTask = (task) => async dispatch => {
    const res = await jwtFetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify(task)
    });
    const data = await res.json();
    dispatch(addTask(data));
}

export const updateTask = (task, tasks) => async dispatch => {
    const res = await jwtFetch(`/api/tasks/${task._id}`, {
        method: 'PATCH',
        body: JSON.stringify(task)
    });
    const data =  await res.json();
    dispatch(receiveTasks(tasks));
}

export const fetchTasks = (userId) => async dispatch => {
    const res = await jwtFetch(`/api/tasks/user/${userId}`);
    const data = await res.json();
    dispatch(getTask(data));
    return data;
}

export const deleteTask = (taskId, tasks) => async dispatch => {
    await jwtFetch(`/api/tasks/${taskId}`, {
        method: 'DELETE'
    })
    dispatch(removeTask(tasks));
    dispatch(sessionActions.getCurrentUser());
};

const taskReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TASK:
            return [...action.task]
        case REMOVE_TASK:
            return action.tasks;
        case ADD_TASK:
            return [...state, action.task];
        case UPDATE_TASK:
            return action.tasks;
        default:
            return state;
    }
};

export default taskReducer;
