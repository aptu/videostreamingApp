import { FETCH_STREAM, FETCH_STREAMS,
CREATE_STREAM, EDIT_STREAM, DELETE_STREAM} from '../actions/types';
import _ from 'lodash';

export default (state={}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            const newObject = action.payload.reduce((map, item) => ({ ...map, [item.id]: item }), {});
            return {...state, ...newObject};
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]:action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};