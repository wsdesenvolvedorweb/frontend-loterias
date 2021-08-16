<template>
    <div>
        <v-header></v-header>
        <b-container class="p-5">
            <h1 class="text-center pb-5">Excluir jogo da Mega-sena</h1>
            <form>
                <div class="text-center">
                    <div class="form-check form-check-inline form-group">
                        <input class="form-check-input" type="radio" v-model="selected" value="id">
                        <label class="form-check-label">Excluir pelo código do jogo</label>
                    </div>
                    <div class="form-check form-check-inline form-group">
                        <input class="form-check-input" type="radio" v-model="selected" value="game">
                        <label class="form-check-label">Excluir pelos números de um jogo</label>
                    </div>
                </div>
                <div v-if="selected === 'id'" class="mt-3">
                    <b-form-group label="Código do jogo:">
                        <b-form-input type="text"></b-form-input>
                    </b-form-group>
                    <b-form-group class="text-center mt-3">
                        <b-button variant="outline-danger" class="m-2" type="submit">Excluir</b-button>
                        <b-button variant="outline-secondary" type="reset">Limpar</b-button>
                        <b-button variant="outline-secondary" @click="returnToDashboard" class="m-2">Voltar</b-button>
                    </b-form-group>
                </div>
                <div v-else-if="selected === 'game'" class="mt-3">
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
                        <b-col sm="4" md="4" lg="4" xl="4">
                            <b-form-group label="Quarto número:">
                                <b-form-input type="text"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4" md="4" lg="4" xl="4">
                            <b-form-group label="Quinto número:">
                                <b-form-input type="text"></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4" md="4" lg="4" xl="4">
                            <b-form-group label="Sexto número:">
                                <b-form-input type="text"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-form-group class="text-center mt-3">
                        <b-button variant="outline-danger" class="m-2" type="submit">Excluir</b-button>
                        <b-button variant="outline-secondary" type="reset">Limpar</b-button>
                        <b-button variant="outline-secondary" @click="returnToDashboard" class="m-2">Voltar</b-button>
                    </b-form-group>
                </div>
                <div v-else></div>
            </form>
        </b-container>
    </div>
</template>

<script>
import {
    BContainer,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BButton
} from "bootstrap-vue"
import Header from "../../../components/Header.vue"
export default {
    data() {
        return {
            selected: []
        }
    },
    components: {
        "v-header": Header,
        BContainer,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BButton
    },
    methods: {
        redirectToDashboard() {
            this.$router.push("/dashboard")
        }
    }
}
</script>

<style>

</style>