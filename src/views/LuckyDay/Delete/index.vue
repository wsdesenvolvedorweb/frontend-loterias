<template>
    <div>
        <v-header></v-header>
        <b-container class="p-5">
            <h1 class="text-center pb-5">Excluir jogo do Dia de Sorte</h1>
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
                        <b-form-input></b-form-input>
                    </b-form-group>
                    <b-form-group class="text-center mt-3">
                        <b-button variant="outline-danger" class="m-2" type="submit">Excluir</b-button>
                        <b-button variant="outline-secondary" type="reset">Limpar</b-button>
                        <b-button variant="outline-secondary" class="m-2" @click="returnToDashboard">Voltar</b-button>
                    </b-form-group>
                </div>
                <div v-else-if="selected === 'game'" class="mt-3">
                    <b-row>
                        <b-col sm="6" md="6" lg="6" xl="6">
                            <b-form-group label="Primeiro número:">
                                <b-form-input></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6" md="6" lg="6" xl="6">
                            <b-form-group label="Segundo número:">
                                <b-form-input></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6" md="6" lg="6" xl="6">
                            <b-form-group label="Terceiro número:">
                                <b-form-input></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6" md="6" lg="6" xl="6">
                            <b-form-group label="Quarto número:">
                                <b-form-input></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6" md="6" lg="6" xl="6">
                            <b-form-group label="Quinto número:">
                                <b-form-input></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6" md="6" lg="6" xl="6">
                            <b-form-group label="Sexto número:">
                                <b-form-input></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6" md="6" lg="6" xl="6">
                            <b-form-group label="Sétimo número:">
                                <b-form-input></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6" md="6" lg="6" xl="6">
                            <b-form-group>
                                <label for="selectedMonth">Mês da sorte:</label>
                                <select class="form-control mt-2" v-model="selectedMonth">
                                    <option value="Janeiro">Janeiro</option>
                                    <option value="Fevereiro">Fevereiro</option>
                                    <option value="Março">Março</option>
                                    <option value="Abril">Abril</option>
                                    <option value="Maio">Maio</option>
                                    <option value="Junho">Junho</option>
                                    <option value="Julho">Julho</option>
                                    <option value="Agosto">Agosto</option>
                                    <option value="Setembro">Setembro</option>
                                    <option value="Outubro">Outubro</option>
                                    <option value="Novembro">Novembro</option>
                                    <option value="Dezembro">Dezembro</option>
                                </select>
                            </b-form-group>
                        </b-col>
                        <b-form-group class="text-center mt-3">
                            <b-button variant="outline-danger" class="m-2" type="submit">Excluir</b-button>
                            <b-button variant="outline-secondary" type="reset">Limpar</b-button>
                            <b-button variant="outline-secondary" class="m-2" @click="returnToDashboard">Voltar</b-button>
                        </b-form-group>
                    </b-row>
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
import Header from "@/components/Header.vue"
export default {
    data() {
        return {
            selected: [],
            selectedMonth: []
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
        returnToDashboard() {
            this.$router.push("/dashboard")
        }
    }
}
</script>

<style>

</style>