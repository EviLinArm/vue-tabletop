import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useGamesStore = defineStore("games", () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const increment = () => {
        count.value++
    }

    return { count, doubleCount, increment }
})
