import api from "../../../api"

const state = {
    user: {
        name: "",
        email: "",
        password: ""
    }
}

const mutations = {
    setUser(user) {
        state.user = user
    } 
}

const actions = {
    async setUser({commit}, user) {
        const error = error.status
        await api.post("/register", {
            name: user.name,
            email: user.email,
            password: user.password
        }).then((response) => {
            if(error === 400) {
                return
            }
            if(user.email) {
                return
            }
            user = response.data
            console.log(user)
            commit("setUser", user)
        })
    }
}

export default {
    state,
    mutations,
    actions
}