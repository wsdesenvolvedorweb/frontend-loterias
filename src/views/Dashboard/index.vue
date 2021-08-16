<template>
    <div>
        <v-header></v-header>
        <div class="container">
            <div class="row g-4 p-5">
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="text-center p-3">
                        <h1>Jogos da quina registrados:</h1>
                        <h2 class="quina">3</h2>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="text-center p-3">
                        <h1>Jogos da Mega-sena registrados:</h1>
                        <h2 class="mega-sena">3</h2>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div class="text-center p-3">
                        <h1>Jogos da Lotomania registrados:</h1>
                        <h2 class="lotomania">3</h2>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="text-center">
                        <h1>Jogos da Lotofácil registrados:</h1>
                        <h2 class="lotofacil">3</h2>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div class="text-center">
                        <h1>Jogos do Dia de Sorte registrados:</h1>
                        <h2 class="lucky-day">3</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header.vue"
export default {
    name: "Dashboard",
    components: {
        "v-header": Header
    }
}
</script>

<style scoped>
div.col-sm-12, div.col-md-6, div.col-lg-6, div.col-xl-6 {
    box-shadow: 3px 4px 3px 0px gray;
}

.quina {
    color: blue;
}

.mega-sena {
    color: darkred;
}

.lotomania {
    color: green;
}

.lotofacil {
    color: darkblue;
}

.lucky-day {
    color: magenta;
}

h1 {
    font-weight: bold;
}

.quina, .mega-sena, .lotomania, .lotofacil, .lucky-day {
    font-size: 65px;
    font-weight: 700;
}
</style>