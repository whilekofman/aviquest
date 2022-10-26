import jwtFetch from "./jwt";

const RECEIVE_TASK = 'tasks/RECEIVE_TASK';
const REMOVE_TASK = 'tasks/REMOVE_TASK';
const ADD_TASK = 'tasks/ADD_TASK';

const getTask = task => ({
    type: RECEIVE_TASK,
    task
});

const removeTask = taskId => ({
    type: REMOVE_TASK,
    taskId
});

const addTask = task => ({
    type: ADD_TASK,
    task
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
    // console.log(data);
    dispatch(addTask(task));
}

export const fetchTasks = (userId) => async dispatch => {
    console.log(userId);
    const res = await jwtFetch(`/api/tasks/user/${userId}`);
    const data = await res.json();
    dispatch(getTask(data));
    return data;
}

export const deleteTask = (taskId) => dispatch => {
    dispatch(removeTask(taskId));
};

const taskReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TASK:
            return [...action.task]
        // case REMOVE_TASK:
        //     delete nextState[action.task];
        //     return nextState;
        case ADD_TASK:
            return [...state, action.task];
        default:
            return state;
    }
};

export default taskReducer;
