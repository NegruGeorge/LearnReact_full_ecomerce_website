// we have all the reducers here
import { combineReducers} from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user:userReducer
});