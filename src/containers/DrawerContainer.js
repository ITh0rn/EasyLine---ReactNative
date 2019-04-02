import { getDrawerPg } from '../selectors';
import { connect } from 'react-redux';
import DrawerView from '../screen/DrawerView';

const mapStateToProps = (state) => {
    const currentDrawerPage = getDrawerPg(state);
    console.log(currentDrawerPage);
    return {
        currentDrawerPage
    };
};

export default connect(mapStateToProps)(DrawerView);
