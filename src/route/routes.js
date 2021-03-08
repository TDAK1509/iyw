import VueRouter from 'vue-router'

import Home from "../components/Header.vue";
import Detail from "../components/Detail.vue";

const router = new VueRouter({
    routes: [
        { path: "/", component: Home },
        { path: "/detail/:id", component: Detail },
    ]
})
export default router;