<template>
    <div>
        <v-header></v-header>
        <b-container fluid>
            <b-row>
                <b-col sm="12" md="12" lg="4" offset-lg="4">
                    <b-form>
                        <b-form-group label="Nome:">
                            <b-form-input></b-form-input>
                        </b-form-group>
                        <b-form-group label="Senha:">
                            <b-form-input type="password"></b-form-input>
                        </b-form-group>
                        <b-form-group class="mt-5 mb-5">
                            <b-button class="form-control" variant="outline-success" type="submit">Enviar</b-button>
                            <b-button class="form-control mt-2" variant="outline-secondary" type="reset">Limpar</b-button>
                            <b-button class="form-control mt-2" variant="outline-secondary" type="button" @click="navigateToRegister">Cadastre-se</b-button>
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
import Header from "../header.vue"
export default {
    name: "Index",
    data() {
        return {
            user: {}
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
        navigateToRegister() {
            this.$router.push("/register")
        }
    }
}
</script>

<style scoped>
@media only screen and (max-width: 767px) {
    div.container-fluid {
        margin-top: 15vh;
        margin-bottom: 11vh;
    }
}

@media only screen and (min-width: 768px) {
    div.container-fluid {
        margin-top: 27vh;
        margin-bottom: 20vh;
    }
}

@media only screen and (min-width: 1200px) {
    div.container-fluid {
        margin-top: 17vh;
    }
}
</style>