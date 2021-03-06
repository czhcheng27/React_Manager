import store from 'store'

const USER_KEY = 'user_key'

const storageUtlis =  {
    //save user
    saveUser(user) {
        store.set(USER_KEY, user)
    },

    //get user
    getUser() {
        return store.get(USER_KEY) || {}
    },

    //delete user
    removeUser() {
        store.remove(USER_KEY)
    }
}

export default storageUtlis