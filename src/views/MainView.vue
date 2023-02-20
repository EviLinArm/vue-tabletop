<script lang="ts" setup>
import { onMounted, ref } from "vue"
import AppHero from "@/components/AppHero.vue"
import AppGameList from "@/components/AppGameList.vue"
import AppPreloader from "@/components/ui/AppPreloader.vue"

const heroData = {
    title: ["TABLETOP", "SIMULATOR"],
    desc: [
        "Любите настольные игры, но желания выходить из дома нет?",
        "Эта игра вам поможет - полноценный эмулятор с кучей электронных копий ваших обожаемых настолок."
    ],
    image: ["../assets/heroImage.png"],
    buttonText: {
        text: "НАЧАТЬ ИГРАТЬ!",
        link: "/start"
    }
}
const gameData = ref(null)

onMounted(async () => {
    const data = await fetch("https://63ed95665e9f1583bdb29a71.mockapi.io/tabletop/TableGames")
    gameData.value = await data.json()
})
</script>

<template>
    <AppHero :heroData="heroData" />
    <AppGameList :gameData="gameData" v-if="gameData" class="mt-6" />
    <AppPreloader v-else />
</template>
