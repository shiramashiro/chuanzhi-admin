import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bookshelvesData: {},
        setIndentData: {}
    },
    mutations: {
        setBookshelvesData(state, data) {
            state.bookshelvesData = data
        },
        setIndentData(state, data) {
            state.setIndentData = data
        }
    },
    actions: {},
    modules: {}
})
