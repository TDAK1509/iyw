import { createRouter, createWebHistory } from "vue-router";
import Detail from "../components/Detail.vue";
import Home from "../components/Home.vue";
import Orders from "../components/Orders.vue";
import SearchResults from "../components/SearchResults.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/orders",
        name: "Orders",
        component: Orders,
    },
    {
        path: "/detail/:slug",
        name: "Detail",
        component: Detail,
    },
    {
        path: "/search/",
        name: "SearchResults",
        component: SearchResults,
    },
    {
        path: "/search/:catchAll(.*)",
        name: "SearchResults",
        component: SearchResults,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;