import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/kriti.console",
        name: "Kriti",
        component: () => import("../vue/components/pages/Board"),
    },
    {
        path: "/kriti.color-palette",
        name: "Palette",
        component: () => import("../vue/components/pages/Palette"),
    },
    {
        path: "/kriti.playground",
        name: "Playground",
        component: () => import("../vue/components/pages/Playground"),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
