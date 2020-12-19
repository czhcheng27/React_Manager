import {
    RECEIVE_USER,
    SHOW_ERROR_MSG,
    RESET_USER
} from './action-types'

import { reqLogin } from '../api/index'
import storageUtils from '../utils/storageUtils'

export const receiveUser = (user) => ({type: RECEIVE_USER, data: user})
export const showErrorMsg = (errorMsg) => ({type: SHOW_ERROR_MSG, data: errorMsg})

export const login = (username, password) => {
    return async dispatch => {
        const result = await reqLogin({username, password})
        if(result.code === 0){
            const user = result.data
            storageUtils.saveUser(user)
            dispatch(receiveUser(user))
        }else{
            const msg = result.msg
            dispatch(showErrorMsg(msg))
        }
    }
}