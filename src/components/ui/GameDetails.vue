<template>
    <div v-if="game">
        <div class="py-6 flex justify-between">
            <div class="font-bold">
                <a class="mr-4 hover:text-gray-500 hover:underline" :href="game.workShopLink" target="_blank"
                    >Мастерская Steam 🏭</a
                >
                <a class="mr-4 hover:text-gray-500 hover:underline" :href="game.youTubeRilesLink" target="_blank"
                    >Правила на YouTube 📺</a
                >
                <a class="hover:text-gray-500 hover:underline" :href="game.pdfRilesLink" target="_blank"
                    >Правила в PDF 📒</a
                >
            </div>
            <RouterLink to="/" class="bg-gray-600 px-4 py-1 text-gray-100 rounded-full hover:bg-gray-900"
                >Назад</RouterLink
            >
        </div>
        <div class="flex items-center overflow-hidden bg-amber-50 rounded-3xl">
            <img
                class="w-56 h-56 drop-shadow-[10px_0px_3px_rgba(0,0,0,0.35)] bg-amber-500 rounded-3xl mr-5 object-cover"
                :src="game.gameImage"
                :alt="game.name"
            />
            <div class="pr-5 py-5">
                <div class="flex items-center">
                    <span class="mr-2.5">{{ game.gamePlayed === "true" ? "✅" : "⛔" }}</span>
                    <span class="font-bold text-2xl">{{ game.name }}</span>
                </div>
                <p class="text-gray-900 h-36 text-base">{{ cutTextWithDots }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import type GameType from "@/types/GameType"
import { computed, onMounted, ref } from "vue"

type Nullable<T> = T | null

const route = useRoute()
const game = ref<Nullable<GameType>>(null)

// eslint-disable-next-line vue/return-in-computed-property
const cutTextWithDots = computed(() => {
    if (game.value) {
        if (game.value.description.length > 945) {
            return game.value.description.slice(0, 945) + "..."
        }
        return game.value.description
    }
})

onMounted(async () => {
    const data = await fetch(`https://63ed95665e9f1583bdb29a71.mockapi.io/tabletop/TableGames/${route.params.id}`)
    game.value = await data.json()
})
</script>

<style scoped></style>
