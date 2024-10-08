import {createstore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
const store = createstore(rootReducer,applyMiddleware(thunk));
export default store;