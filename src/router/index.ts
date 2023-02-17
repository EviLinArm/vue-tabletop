import { createRouter, createWebHistory } from "vue-router"
import MainView from "@/views/MainView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "main",
            component: MainView
        },
        // {
        //     path: "/:id",
        //     name: "details",
        //     component: GameDetails
        // },
        // {
        //     path: "/howto",
        //     name: "howto",
        //     component: HowToInstall
        // }
    ]
})

export default router
