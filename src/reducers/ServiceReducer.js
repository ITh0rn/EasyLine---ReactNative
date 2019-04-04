import {
    SETTED_COURSE,
    SETTED_PROVIDER,
    SETTED_SERVICE
} from '../constants';

const INITIAL_STATE = {
    areaid: '1',
    providers: {
        id: ''
    },
    course: {
        id: ''
    },
    service: {
        id: '',
        color: 'blue'
    }

};

const ServiceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SETTED_PROVIDER:
            return {
                ...state,
                providers: {
                    ...state.providers,
                    id: action.payload.value
                }
            };
        case SETTED_COURSE:
            return {
                ...state,
                course: {
                    ...state.course,
                    id: action.payload.value
                }
            };
        case SETTED_SERVICE:
            return {
                ...state,
                service: {
                    ...state.service,
                    id: action.payload.value
                }
            };
        default:
            return state;
    }
};

export default ServiceReducer;
