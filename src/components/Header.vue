<template>
  <header class="header">
    <b-container>
      <b-navbar toggleable="md">
        <b-navbar-brand>Frontend JWT Vue2</b-navbar-brand>
        <b-navbar-toggle target="menu">
          <b-icon-menu-button-wide class="text-white"></b-icon-menu-button-wide>
        </b-navbar-toggle>
        <b-collapse id="menu" is-nav>
          <b-navbar-nav class="mx-auto">
            <b-nav-item-dropdown text="Quina">
              <b-dropdown-item @click="navigateToAddGameQuina">Cadastrar jogo</b-dropdown-item>
              <b-dropdown-item @click="navigateToSearchQuina">Pesquisar</b-dropdown-item>
              <b-dropdown-item @click="navigateToDeleteQuina">Excluir</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Mega-sena">
              <b-dropdown-item @click="navigateToAddGameMegaSena">Cadastrar jogo</b-dropdown-item>
              <b-dropdown-item @click="navigateToSearchGameMegaSena">Pesquisar</b-dropdown-item>
              <b-dropdown-item @click="navigateToDeleteGameMegaSena">Excluir</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Lotomania">
              <b-dropdown-item @click="navigateToAddGameLotomania">Cadastrar jogo</b-dropdown-item>
              <b-dropdown-item @click="navigateToSearchGameLotomania">Pesquisar</b-dropdown-item>
              <b-dropdown-item @click="navigateToDeleteGameLotomania">Excluir</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Lotofácil">
              <b-dropdown-item @click="navigateToAddGameLotofacil">Cadastrar jogo</b-dropdown-item>
              <b-dropdown-item @click="navigateToSearchGameLotofacil">Pesquisar</b-dropdown-item>
              <b-dropdown-item @click="navigateToDeleteGameLotofacil">Excluir</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Dia de sorte">
              <b-dropdown-item @click="navigateToAddGameLuckyDay">Cadastrar jogo</b-dropdown-item>
              <b-dropdown-item @click="navigateToSearchGameLuckyDay">Pesquisar</b-dropdown-item>
              <b-dropdown-item @click="navigateToDeleteGameLuckyDay">Excluir</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
import { 
    BContainer,
    BCollapse,
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    BIconMenuButtonWide
} from "bootstrap-vue"
export default {
    components: {
        BContainer,
        BCollapse,
        BNavbar,
        BNavbarBrand,
        BNavbarToggle,
        BNavbarNav,
        BNavItemDropdown,
        BDropdownItem,
        BIconMenuButtonWide
    },
    methods: {
        navigateToAddGameQuina() {
            this.$router.push("/addGameQuina")
        },
        navigateToSearchQuina() {
            this.$router.push("/searchGameQuina")
        },
        navigateToDeleteQuina() {
            this.$router.push("/deleteGameQuina")
        },
        navigateToAddGameMegaSena() {
            this.$router.push("/addGameMegaSena")
        },
        navigateToSearchGameMegaSena() {
            this.$router.push("/searchGameMegaSena")
        },
        navigateToDeleteGameMegaSena() {
            this.$router.push("/deleteGameMegaSena")
        },
        navigateToAddGameLotomania() {
            this.$router.push("/addGameLotomania")
        },
        navigateToSearchGameLotomania() {
            this.$router.push("/searchGameLotomania")
        },
        navigateToDeleteGameLotomania() {
            this.$router.push("/deleteGameLotomania")
        },
        navigateToAddGameLotofacil() {
            this.$router.push("/addGameLotofacil")
        },
        navigateToSearchGameLotofacil() {
            this.$router.push("/searchGameLotofacil")
        },
        navigateToDeleteGameLotofacil() {
            this.$router.push("/deleteGameLotofacil")
        },
        navigateToAddGameLuckyDay() {
            this.$router.push("/addGameLuckyDay")
        },
        navigateToSearchGameLuckyDay() {
            this.$router.push("/searchGameLuckyDay")
        },
        navigateToDeleteGameLuckyDay() {
            this.$router.push("/deleteGameLuckyDay")
        }
    }
}
</script>

<style>
header.header {
    background-color: black;
}

header div.navbar-brand {
    color: white!important;
}

header .navbar-light .navbar-nav .nav-link {
    color: white!important;
}

header .navbar-light .navbar-nav .nav-link:hover {
    color: gray!important;
    transition: 5ms!important;
}

header .navbar-nav .dropdown-menu {
    background-color: black;
}

header .navbar-nav .dropdown-menu:hover {
    color: grey!important;
    transition: 5ms!important;
}

header .dropdown-item {
    color: white;
}
</style>