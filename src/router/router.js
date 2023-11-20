import {createRouter, createWebHistory} from "vue-router"


import Home from "../components/Home.vue"
import Contact from "../components/Contact.vue"
import NavBar from "../components/NavBar.vue"


const routes = [
{path:"/", components:{default:Home, navbar:NavBar}, name:""},
{path:"/home", components:{default:Home, navbar:NavBar}, name:"home"},
{path:"/contact", components:{default:Contact, navbar:NavBar}, name:"contact"},


];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router