import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from "./components/Header.vue";
import Detail from "./components/Detail.vue";

export const router = new VueRouter({
    routes: [
        { path: "/", component: Home },
        { path: "/detail/:id", component: Detail },
    ]
})