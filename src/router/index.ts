import { createRouter, createWebHistory } from "vue-router"
import MainView from "@/views/MainView.vue"
import StartView from "@/views/StartView.vue"
import SingleGameView from "@/views/SingleGameView.vue"
import EmptyView from "@/views/EmptyView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "main",
            component: MainView
        },
        {
            path: "/game/:id",
            name: "singleGame",
            component: SingleGameView
        },
        {
            path: "/start",
            name: "start",
            component: StartView
        },
        {
            path: "/:pathMatch(.*)*",
            name: "empty",
            component: EmptyView
        }
    ],
    scrollBehavior() {
        return { top: 0, behavior: "smooth" }
    }
})

export default router
