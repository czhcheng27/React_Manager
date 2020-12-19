import {combineReducers} from 'redux'
import {
    RECEIVE_USER,
    SHOW_ERROR_MSG,
    RESET_USER
} from './action-types'
import storageUtils from '../utils/storageUtils'

const initUser = storageUtils.getUser()
function user(state = initUser, action){
    switch (action.type){
        case RECEIVE_USER:
            return action.data
        case SHOW_ERROR_MSG:
            const errorMsg = action.data
            return {...state, errorMsg}
        case RESET_USER:
            return {}
        default:
            return state
    }
}

function yyy(state = 0, action){
    return state
}

export default combineReducers({
    user,
    yyy
})