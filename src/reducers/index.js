import { combineReducers } from 'redux';
import AuthenticationReducers from './AuthenticationReducer';
import ServiceReducer from './ServiceReducer';

export default combineReducers({
   auth: AuthenticationReducers,
   serv: ServiceReducer
});
