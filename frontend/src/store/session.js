import { startSession } from "../../../backend/models/User";
import jwtFetch from "./jwt";

const RECEIVE_CURRENT_USER = 'session/RECEIVE_CURRENT_USER';
const RECEIVE_SESSION_ERRORS = 'session/RECEIVE_SESSION_ERRORS';
const CLEAR_SESSION_ERRORS = 'session/CLEAR_SESSION_ERRORS';
export const RECEIVE_USER_LOGOUT = 'session/RECEIVE_USER_LOGOUT'

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const recieveErrors = errors => ({
    type: RECEIVE_CURRENT_USER,
    errors
})

const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const signup = user => startSession(user, 'api/users/register');
export const login = user => startSession(user, 'api/users/login');

