<template>
    <div>
        <v-header></v-header>
        <b-container class="p-5">
            <h1 class="text-center pb-5">Cadastrar jogo da Lotomania</h1>
            <form>
                <b-row>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Primeiro número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Segundo número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Terceiro número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Quarto número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Quinto número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Sexto número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Sétimo número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Oitavo número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Nono número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Décimo número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Décimo primeiro número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Décimo segundo número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Décimo terceiro número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Décimo quarto número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Décimo quinto número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Décimo sexto número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Décimo sétimo número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="2" md="2" lg="2" xl="2">
                        <b-form-group label="Décimo oitavo número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="6" md="6" lg="6" xl="6">
                        <b-form-group label="Décimo nono número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col sm="6" md="6" lg="6" xl="6">
                        <b-form-group label="Vigésimo número:">
                            <b-form-input type="text"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-form-group class="text-center mt-3">
                    <b-button variant="outline-success" class="m-2" type="submit">Enviar</b-button>
                    <b-button variant="outline-secondary" type="reset">Limpar</b-button>
                    <b-button variant="outline-secondary" class="m-2" @click="returnToDashboard">Voltar</b-button>
                </b-form-group>
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