<template>
    <div>
        <v-header></v-header>
        <b-container class="p-5">
            <h1 class="text-center pb-5">Cadastrar jogo da Quina</h1>
            <b-form>
                <b-row>
                    <b-col sm="4" md="4" lg="4" xl="4">
                        <b-form-group label="Primeiro número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="4" md="4" lg="4" xl="4">
                        <b-form-group label="Segundo número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="4" md="4" lg="4" xl="4">
                        <b-form-group label="Terceiro número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mt-3">
                    <b-col sm="6" mg="6" lg="6" xl="6">
                        <b-form-group label="Quarto número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="6" mg="6" lg="6" xl="6">
                        <b-form-group label="Quinto número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-form-group class="mt-3 text-center">
                    <b-button variant="outline-success" class="m-2" type="submit">Enviar</b-button>
                    <b-button variant="outline-secondary" type="reset">Limpar</b-button>
                    <b-button variant="outline-secondary" class="m-2" @click="returnToDashboard">Voltar</b-button>
                </b-form-group>
            </b-form>
        </b-container>
    </div>
</template>

<script>
import {
    BContainer,
    BRow,
    BForm,
    BFormGroup,
    BFormInput,
    BCol,
    BButton
} from "bootstrap-vue"
import Header from "../../../components/Header.vue"
export default {
    components: {
        "v-header": Header,
        BContainer,
        BRow,
        BForm,
        BFormGroup,
        BFormInput,
        BCol,
        BButton
    },
    methods: {
        returnToDashboard() {
            this.$router.push("/dashboard")
        }
    }
}
</script>

<style scoped>
h1 {
    font-weight: 700;
}
</style>