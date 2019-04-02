import { getLoginFS, getDrawerPg, getUserLog } from '../selectors';
import { login, loginFetch, loginParamChange } from '../actions';
import { connect } from 'react-redux';
import LoginScreen from '../screen/LoginScreen';

const mapStateToProps = (state) => {
    const {
        email,
        password,
        error,
        isLoading,
    } = getLoginFS(state);
    const currentDrawerPage = getDrawerPg(state);
    const user = getUserLog(state);
    return {
        email,
        password,
        error,
        isLoading,
        currentDrawerPage,
        user
    };
};

//Restituisce funzioni al componente che se invocate tramite esempio Onclick ecc..permettono di invocare le dispatch delle action
const mapDispatchToProps = (dispatch) => ({
    changeInput: (key, value) => {
        dispatch(loginParamChange(key, value));
        console.log('hey');
    },
    loginPress: () => {
        dispatch(login());
        dispatch(loginFetch());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
