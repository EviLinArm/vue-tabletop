<script lang="ts" setup>
import AppHero from "@/components/AppHero.vue"
import AppGameList from "@/components/AppGameList.vue"
import AppPreloader from "@/components/ui/AppPreloader.vue"
import useGamesStore from "@/stores/games"
import { onMounted } from "vue"

const gameStore = useGamesStore()
const heroData = {
    title: ["TABLETOP", "SIMULATOR"],
    desc: [
        "Любите настольные игры, но желания выходить из дома нет?",
        "Тогда вам в помощь полноценный эмулятор настолок с кучей электронных копий обожаемых игр."
    ],
    image: ["../assets/heroImage.png"],
    buttonText: {
        text: "НАЧАТЬ ИГРАТЬ!",
        link: "/start"
    }
}

onMounted(async () => {
    await gameStore.getGamesData()
})
</script>

<template>
    <AppHero :heroData="heroData" />
    <AppGameList :gameData="gameStore.filteredAndSelectedGamesData" v-if="!gameStore.loader" class="mt-3 md:mt-4 lg:mt-7 xl:mt-8" />
    <AppPreloader v-else />
</template>
