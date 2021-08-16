import Vue from "vue"
import VueRouter from "vue-router"
import Index from "../views/Index"
import Register from "../views/Register"
import Dashboard from "../views/Dashboard"
import AddGameQuina from "../views/Quina/AddGame"
import SearchGameQuina from "../views/Quina/Search"
import DeleteGameQuina from "../views/Quina/Delete"
import AddGameMegaSena from "../views/MegaSena/AddGame"
import SearchGameMegaSena from "../views/MegaSena/Search"
import DeleteGameMegaSena from "../views/MegaSena/Delete"
import AddGameLotomania from "../views/Lotomania/AddGame"
import SearchGameLotomania from "../views/Lotomania/Search"
import DeleteGameLotomania from "../views/Lotomania/Delete"
import AddGameLotofacil from "../views/Lotofacil/AddGame"
import SearchGameLotofacil from "../views/Lotofacil/Search"
import DeleteGameLotofacil from "../views/Lotofacil/Delete"
import AddGameLuckyDay from "@/views/LuckyDay/AddGame"
import SearchGameLuckyDay from "@/views/LuckyDay/Search"
import DeleteGameLuckyDay from "@/views/LuckyDay/Delete"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Index,
        name: "Index"
    },
    {
        path: "/register",
        component: Register,
        name: "Register"
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard"
    },
    {
        path: "/addGameQuina",
        component: AddGameQuina,
        name: "AddGameQuina"
    },
    {
        path: "/searchGameQuina",
        component: SearchGameQuina,
        name: "Search"
    },
    {
        path: "/deleteGameQuina",
        component: DeleteGameQuina,
        name: "Delete"
    },
    {
        path: "/addGameMegaSena",
        component: AddGameMegaSena,
        name: "AddGameMegaSena"
    },
    {
        path: "/searchGameMegaSena",
        component: SearchGameMegaSena,
        name: "SearchGameMegaSena"
    },
    {
        path: "/deleteGameMegaSena",
        component: DeleteGameMegaSena,
        name: "DeleteGameMegaSena"
    },
    {
        path: "/addGameLotomania",
        component: AddGameLotomania,
        name: "AddGameLotomania"
    },
    {
        path: "/searchGameLotomania",
        component: SearchGameLotomania,
        name: "SearchGameLotomania"
    },
    {
        path: "/deleteGameLotomania",
        component: DeleteGameLotomania,
        name: "DeleteGameLotomania"
    },
    {
        path: "/addGameLotofacil",
        component: AddGameLotofacil,
        name: "AddGameLotofacil"
    },
    {
        path: "/searchGameLotofacil",
        component: SearchGameLotofacil,
        name: "SearchGameLotofacil"
    },
    {
        path: "/deleteGameLotofacil",
        component: DeleteGameLotofacil,
        name: "DeleteGameLotofacil"
    },
    {
        path: "/addGameLuckyDay",
        component: AddGameLuckyDay,
        name: "AddGameLuckyDay"
    },
    {
        path: "/searchGameLuckyDay",
        component: SearchGameLuckyDay,
        name: "SearchGameLuckyDay"
    },
    {
        path: "/deleteGameLuckyDay",
        component: DeleteGameLuckyDay,
        name: "DeleteGameLuckyDay"
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router