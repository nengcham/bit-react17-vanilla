import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { watchCounter } from './basic/counter';
import auth, { watchUserLogin } from './auth/user';


const rootReducer = combineReducers({
  counter,
  auth
});

export function* rootSaga() {
  yield all([watchCounter(), watchUserLogin()]);
}

export default rootReducer;