<template>
    <AppPreloader class="h-full" v-if="!gameData" />
    <div v-else class="h-full">
        <div>
            <p class="font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 lg:mb-8 xl:mb-10 uppercase">{{ gameData.name }}</p>
        </div>
        <div class="grid grid-cols-8 md:gap-x-5 lg:gap-x-8">
            <div class="col-span-8 md:col-span-4 lg:col-span-3">
                <img class="h-full object-cover" :src="gameData.gameImage" :alt="gameData.name" />
            </div>
            <div class="col-span-8 md:col-span-4 lg:col-span-5 mt-3.5 md:mt-4 lg:mt-0">
                <div class="flex flex-col justify-between align-middle font-light">
                    <p class="font-semibold text-xl lg:text-2xl xl:text-3xl">ХАРАКТЕРИСТИКИ</p>
                    <p class="mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl">
                        <span class="mr-2.5">Количество игроков:</span>
                        <span>{{ gameData.person }}</span>
                    </p>
                    <p class="mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl">
                        <span class="mr-2.5">Время партии:</span>
                        <span>{{ gameData.time }}</span>
                    </p>
                    <p class="mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl">
                        <span class="mr-2.5">Возраст:</span>
                        <span>{{ gameData.ageLimit }}</span>
                    </p>
                    <p class="mt-1.5 md:mt-2 lg:mt-2 xl:mt-1.5 md:mt-2 lg:mt-2 xl: text-base lg:text-xl">
                        <span class="mr-2.5">Язык:</span>
                        <span>{{ gameData.lang }}</span>
                    </p>
                </div>
                <div class="flex flex-col justify-between align-middle font-light mt-3.5 md:mt-4 lg:mt-5 xl:mt-6">
                    <p class="font-semibold text-xl lg:text-2xl xl:text-3xl">ИНФОРМАЦИЯ</p>
                    <p class="mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl">
                        {{
                            gameData.description.length > 565
                                ? gameData.description.slice(0, 565) + "..."
                                : gameData.description
                        }}
                    </p>
                </div>
                <div class="flex flex-col justify-between align-middle font-light mt-3.5 md:mt-4 lg:mt-5 xl:mt-6">
                    <p class="font-semibold text-xl lg:text-2xl xl:text-3xl">ПОЛЕЗНЫЕ ССЫЛКИ</p>
                    <a :href="gameData.workShopLink" target="_blank" class="group mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl flex align-middle">
                        <IconSteam
                            class="group-active:fill-sky-800 group-hover:fill-sky-900 transition-all fill-sky-700 mr-2.5"
                        />
                        <span
                            class="group-active:text-sky-800 group-hover:text-sky-900 transition-all underline text-sky-700"
                            >Мастерская Steam</span
                        >
                    </a>
                    <a :href="gameData.youTubeLink" target="_blank" class="group mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl flex align-middle">
                        <IconYouTube
                            class="group-active:fill-sky-800 group-hover:fill-sky-900 transition-all fill-sky-700 mr-2.5"
                        />
                        <span
                            class="group-active:text-sky-800 group-hover:text-sky-900 transition-all underline text-sky-700"
                            >Правила на Youtube</span
                        >
                    </a>
                    <a :href="gameData.pdfLink" target="_blank" class="group mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl flex align-middle">
                        <IconPdf
                            class="group-active:fill-sky-800 group-hover:fill-sky-900 transition-all fill-sky-700 mr-2.5"
                        />
                        <span
                            class="group-active:text-sky-800 group-hover:text-sky-900 transition-all underline text-sky-700"
                            >Правила в PDF</span
                        >
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import AppPreloader from "@/components/ui/AppPreloader.vue"
import IconSteam from "@/assets/icons/IconSteam.vue"
import IconYouTube from "@/assets/icons/IconYouTube.vue"
import IconPdf from "@/assets/icons/IconPdf.vue"

const route = useRoute()
const gameData = ref(null)

onMounted(async () => {
    const data = await fetch(`https://63ed95665e9f1583bdb29a71.mockapi.io/tabletop/TableGames/${route.params.id}`)
    gameData.value = await data.json()
})
</script>

<style scoped></style>
