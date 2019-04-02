import firebase from 'firebase';
import {
    LOGIN_PARAM_CHANGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_FETCH,
    LOGOUT,
    SETTED_PROVIDER, SETTED_COURSE
} from '../constants';
import { getLoginFS } from "../selectors";

const loginParamChange = (key, value) => ({
    type: LOGIN_PARAM_CHANGE,
    payload: {
        key,
        value
    },
});

const login = () => ({
   type: LOGIN_FETCH
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

const loginerror = (key, value) => ({
    type: LOGIN_FAIL,
    payload: {
        key,
        value
}
});


const loginFetch = () => (dispatch, getState) => {
    const {
        email,
        password
    } = getLoginFS(getState());

    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) =>
            dispatch(loginSuccess()),
        )
        .catch(({ code, message }) => {
            console.log(code, message);
            dispatch(loginerror('error', message));
        });
};

const logout = () => ({
    type: LOGOUT
});

const setProvider = (value) => ({
    type: SETTED_PROVIDER,
    payload: {
        value
    }
});

const setCourse = (value) => ({
    type: SETTED_COURSE,
    payload: {
        value
    }
});


export { loginParamChange, loginFetch, login, logout, setProvider, setCourse };
