import Vue from "vue"
import Vuex from "vuex"
import register from "./modules/register"

Vue.use(Vuex)

const store = new Vuex.Store({
    module: {
        register
    }
})

export default store