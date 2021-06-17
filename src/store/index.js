import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bookshelvesData: {}
    },
    mutations: {
        setBookshelvesData(state, data) {
            state.bookshelvesData = data
        }
    },
    actions: {},
    modules: {}
})
