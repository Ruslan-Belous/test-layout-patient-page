import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        feedbacks: JSON.parse(localStorage.getItem('feedbacks') || '[]'),
    },
    // plugins: [createPersistedState({
    //     paths: ['places']
    // })],
    mutations: {
        ADD_FEEDBACK(state, feedback) {
            state.feedbacks.push(feedback)
            localStorage.setItem('feedbacks', JSON.stringify(state.feedbacks))
        },
    },
    actions: {
        addFeedback({ commit }, feedback) {
            commit('ADD_FEEDBACK', feedback)
        }

    },
    getters: {},
    modules: {}
})

