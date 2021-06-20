import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bookshelvesData: {},
        indentsData: {},
        userData: {}
    },
    mutations: {
        setBookshelvesData(state, data) {
            state.bookshelvesData = data
        },
        setIndentData(state, data) {
            state.indentsData = data
        },
        setUserData(state, data) {
            state.userData = data
        }
    },
    actions: {},
    modules: {}
})
