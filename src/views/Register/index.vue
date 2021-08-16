<template>
    <div>
        <v-header></v-header>
        <b-container fluid>
            <b-row>
                <b-col sm="12" md="12" lg="4" offset-lg="4">
                    <b-form @submit.prevent="addUser">
                        <b-form-group label="Nome:">
                            <b-form-input v-model="user.name" required></b-form-input>
                        </b-form-group>
                        <b-form-group label="E-mail:">
                            <b-form-input type="email" v-model="user.email" required></b-form-input>
                        </b-form-group>
                        <b-form-group label="Senha:">
                            <b-form-input type="password" v-model="user.password" required></b-form-input>
                        </b-form-group>
                        <b-form-group class="mt-5 mb-5">
                            <b-button class="form-control" variant="outline-success" type="submit">Enviar</b-button>
                            <b-button class="form-control mt-2" variant="outline-secondary" type="reset">Limpar</b-button>
                            <b-button class="form-control mt-2" variant="outline-secondary" type="button" @click="navigateToIndex">Voltar</b-button>
                        </b-form-group>
                    </b-form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { 
    BContainer,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormInput,
    BButton
} from "bootstrap-vue"
import { mapActions } from "vuex"
import Header from "../header.vue"
export default {
    name: "Index",
    data() {
        return {
            user: {
                name: "",
                email: "",
                password: ""
            }
        }
    },
    components: {
        "v-header": Header,
        BContainer,
        BRow,
        BCol,
        BForm,
        BFormGroup,
        BFormInput,
        BButton
    },
    methods: {
        navigateToIndex() {
            this.$router.push("/")
        },
        addUser() {
            if(this.user.name === "" || this.user.email === "" || this.user.password === "") {
                return
            }
            mapActions(["setUser"])
        }
    }
}
</script>

<style>
@media only screen and (max-width: 767px) {
    div.container-fluid {
        margin-top: 15vh;
    }
}

@media only screen and (min-width: 768px) {
    div.container-fluid {
        margin-top: 27vh;
    }
}

@media only screen and (min-width: 1200px) {
    div.container-fluid {
        margin-top: 17vh;
    }
}
</style>