import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
    LOGIN_FAIL,
    LOGIN_FETCH,
    LOGIN_PARAM_CHANGE, LOGIN_SUCCESS, LOGOUT
} from '../constants';

const INITIAL_STATE = {
    login: {
        email: '',
        password: '',
        error: '',
        isLoading: false
    },
    user: null,
    currentDrawerPage: 'LoginScreen'
};

const AuthenticationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_PARAM_CHANGE:
            return {
                ...state,
                login: {
                    ...state.login,
                    [action.payload.key]: action.payload.value,
                }
            };
        case LOGIN_FETCH:
            return {
                ...state,
                login: {
                    ...state.login,
                    error: '',
                    isLoading: true
                }
            };
        case LOGIN_FAIL:
            return {
                ...state,
                login: {
                    ...state.login,
                    password: '',
                    error: action.payload.value,
                    isLoading: false
                }
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                login: {
                    ...state.login,
                    email: '',
                    password: '',
                    isLoading: false,
                },
                user:
                    state.login.email,
                currentDrawerPage: 'DrawerLog'
            };
        case LOGOUT:
            return {
                ...state,
                login: {
                    ...state.login,
                    email: '',
                    password: '',
                    isLoading: false,
                },
                user: null,
                currentDrawerPage: 'LoginScreen'
            };
            default:
                return state;
    }
};

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['user', 'currentDrawerPage']
};

export default persistReducer(persistConfig, AuthenticationReducer);

