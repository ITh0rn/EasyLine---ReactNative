import { combineReducers } from 'redux';
import AuthenticationReducers from './AuthenticationReducer';

export default combineReducers({
   auth: AuthenticationReducers,
});
