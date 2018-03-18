import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';

//여러 reducer들을 하나의 객체를 취한다.
export default combineReducers({
	auth: AuthReducer,
})