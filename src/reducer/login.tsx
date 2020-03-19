export interface LoginInterface {
    loginDetail: object,
    errormsg: object
}
interface RequestForLogin {
    type: string,
    data: {
        name: string,
        age: string
    }
}

interface LoginError {
    type: string,
    data: {}
}

type actionType = RequestForLogin | LoginError
const INITIAL_STATE: LoginInterface = {
    loginDetail: {},
    errormsg: {}
}

export const REQUEST_FOR_LOGIN = 'REQUEST_FOR_LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export default (state = INITIAL_STATE,action : actionType) => {
    switch (action.type) {
        case REQUEST_FOR_LOGIN: {
            return state.loginDetail =  action.data
        }
        case LOGIN_FAIL: {
            return state.errormsg = action.data
        }
        default:
            return state;
    }
}