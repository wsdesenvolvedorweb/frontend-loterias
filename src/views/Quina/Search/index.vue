<template>
    <div>
        <v-header></v-header>
        <b-container class="p-5">
            <h1 class="text-center pb-5">Pesquisar jogo da Quina</h1>
            <b-form>
                <b-form-group>
                    <b-form-select v-model="selectedOption">
                        <b-form-select-option value="" :selected="selectedOption ===''">Escolha sua opção:</b-form-select-option>
                        <b-form-select-option value="id">Pesquisar por código</b-form-select-option>
                        <b-form-select-option value="game">Pesquisar por números de um jogo</b-form-select-option>
                    </b-form-select>
                </b-form-group>
                <div v-if="selectedOption === 'id'" class="mt-3">
                    <b-form-group label="Código do jogo:">
                        <b-form-input type="text" required></b-form-input>
                    </b-form-group>
                    <b-form-group class="mt-3 text-center">
                        <b-button variant="outline-success" class="m-2" type="submit">Enviar</b-button>
                        <b-button variant="outline-secondary" type="reset">Limpar</b-button>
                        <b-button variant="outline-secondary" class="m-2" @click="returnToDashboard">Voltar</b-button>
                    </b-form-group>
                </div>
                <div v-else-if="selectedOption === 'game'" class="mt-3">
                    <b-row>
                        <b-col sm="4" md="4" lg="4" xl="4">
                            <b-form-group label="Primeiro número:">
                                <b-form-input type="text" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4" md="4" lg="4" xl="4">
                            <b-form-group label="Segundo número:">
                                <b-form-input type="text" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="4" md="4" lg="4" xl="4">
                            <b-form-group label="Terceiro número:">
                                <b-form-input type="text" required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col sm="6" md="6" lg="4" xl="6">
                            <b-form-group label="Quarto número:">
                                <b-form-input type="text" required></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col sm="6" md="6" lg="4" xl="6">
                            <b-form-group label="Quinto número:">
                                <b-form-input type="text" required></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-form-group class="mt-3 text-center">
                        <b-button variant="outline-success" class="m-2" type="submit">Enviar</b-button>
                        <b-button variant="outline-secondary" type="reset">Limpar</b-button>
                        <b-button variant="outline-secondary" class="m-2" @click="returnToDashboard">Voltar</b-button>
                    </b-form-group>
                </div>
                <div v-else></div>
            </b-form>
        </b-container>
    </div>
</template>

<script>
import {
    BContainer,
    BForm,
    BFormGroup,
    BFormSelect,
    BFormSelectOption,
    BFormInput,
    BButton,
    BRow,
    BCol
} from "bootstrap-vue"
import Header from "../../../components/Header.vue"
export default {
    data() {
        return {    
            selectedOption: []
        }
    },
    components: {
        "v-header": Header,
        BContainer,
        BForm,
        BFormGroup,
        BFormSelect,
        BFormSelectOption,
        BFormInput,
        BButton,
        BRow,
        BCol
    },
    methods: {
        returnToDashboard() {
            this.$router.push("/dashboard")
        }
    }
}
</script>

<style scoped>

</style>