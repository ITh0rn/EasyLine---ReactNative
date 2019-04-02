import { getProvider } from '../selectors';
import { connect } from 'react-redux';
import ServicesList from '../components/ServicesList';

const mapStateToProps = (state) => {
    const currProvider = getProvider(state);
    return {
        currProvider
    };
};

export default connect(mapStateToProps)(ServicesList);
