import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default new VueX.Store({
    state,
    mutations,
    actions,
    getters
})