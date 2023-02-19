<script lang="ts" setup>
import AppHero from "@/components/AppHero.vue"
import AppGameList from "@/components/AppGameList.vue"

const heroData = {
    title: ["TABLETOP", "SIMULATOR"],
    desc: [
        "Любите настольные игры, но желания выходить из дома нет?",
        "Эта игра вам поможет - полноценный эмулятор с кучей электронных копий ваших обожаемых настолок."
    ],
    image: ["src/assets/heroImage.png"],
    buttonText: {
        text: "НАЧАТЬ ИГРАТЬ!",
        link: "/start"
    }
}
</script>

<template>
    <AppHero :heroData="heroData" />
    <AppGameList class="mt-6" />
</template>
