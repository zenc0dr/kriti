import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/kriti",
        name: "Kriti",
        component: () => import("../vue/components/pages/Board"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;