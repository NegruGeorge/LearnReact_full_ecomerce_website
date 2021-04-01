// we have all the reducers here
import { combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';




export default combineReducers({
    user:userReducer,
    cart:cartReducer
});