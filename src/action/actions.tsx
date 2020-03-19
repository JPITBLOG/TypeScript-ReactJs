import {REQUEST_FOR_LOGIN, LOGIN_FAIL} from '../reducer/login';
import {ThunkAction} from 'redux-thunk';
import {Action} from "redux";
export const LoginDetail = (loginDetailObject: {}): ThunkAction<void, {}, {}, Action<Object>> => dispatch => {
    console.log('login object',loginDetailObject);
    try {
        return dispatch({
            type:REQUEST_FOR_LOGIN,
            data: loginDetailObject
        });
    }
    catch (e) {
        return dispatch({
            type:LOGIN_FAIL,
            data: {error_msg: 'login operation fail'}
        });
    }
}