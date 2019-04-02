import { getProvider } from '../selectors';
import { connect } from 'react-redux';
import CourseItem from '../components/CourseItem';
import { setCourse } from '../actions';

const mapStateToProps = (state) => {
    const currProvider = getProvider(state);
    return {
        currProvider
    };
};

const mapDispatchToProps = (dispatch) => ({
    setcourse: (value) => {
        dispatch(setCourse(value));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(CourseItem);
