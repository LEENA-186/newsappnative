import {Actiontypes} from './Actiontypes'


export const Login = (email, pass) => {
    return {
        type: Actiontypes.LOGIN,
        email: email,
        pass:pass
    }
}

export const register = (email, pass) => {
    return {
        type: Actiontypes.REGISTER,
        email: email,
        pass: pass
    }
}
