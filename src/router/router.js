import {createRouter, createWebHistory} from "vue-router"


import Home from "../components/Home.vue"
import Contact from "../components/Contact.vue"
import NavBar from "../components/NavBar.vue"


const routes = [
{path:"/home", components:{default:Home, navbar:NavBar}, name:"home"},
{path:"/contact", components:{default:Contact, navbar:NavBar}, name:"contact"},
{path: "/", components:{ default:ProductList,navbar:NavBar},name:"productList"},

];

const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router