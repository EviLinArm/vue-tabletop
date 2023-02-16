<template>
    <div class="flex py-5">
        <GameSearch />
    </div>
    <div v-for="game in gameData" :key="game.id">
        <GameCard :game="game" class="mb-5" />
    </div>
</template>

<script setup lang="ts">
import GameCard from "@/components/ui/GameCard.vue"
import { onMounted, ref } from "vue"
import GameSearch from "@/components/ui/GameSearch.vue"

const gameData = ref(null)

onMounted(async () => {
    const data = await fetch("https://63ed95665e9f1583bdb29a71.mockapi.io/tabletop/TableGames")
    gameData.value = await data.json()
})
</script>

<style scoped></style>
