import { getProvider } from '../selectors';
import { connect } from 'react-redux';
import AreaItem from '../components/AreaItem';
import CourseList from '../components/CourseList';
import { setProvider } from '../actions';

const mapStateToProps = (state) => {
    const currProvider = getProvider(state);
    return {
        currProvider
    };
};

const mapDispatchToProps = (dispatch) => ({
    setProvider: (value) => {
        dispatch(setProvider(value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AreaItem, CourseList);
