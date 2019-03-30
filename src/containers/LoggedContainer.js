import { getUserLog } from '../selectors';
import { connect } from 'react-redux';
import LoggedScreen from '../Screen/LoggedScreen';
import { login, loginFetch, loginParamChange, logout } from "../actions";

const mapStateToProps = (state) => {
    const user = getUserLog(state);
    return {
        user
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeInput: (key, value) => {
        dispatch(loginParamChange(key, value));
        console.log('hey');
    },
    loginPress: () => {
        dispatch(login());
        dispatch(loginFetch());
    },
    logout: () =>
        dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoggedScreen);
