<template>
    <pre>
        error: {{ error }}
    </pre>

    <AppPreloader class="h-full" v-if="fetching" />
    <AppPreloader class="h-full" v-else-if="error" />
    <div class="h-full" v-else>
        <div>
            <p
                class="font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 lg:mb-8 xl:mb-10 uppercase"
            >
                {{ response.name }}
            </p>
        </div>
        <div class="grid grid-cols-8 md:gap-x-5 lg:gap-x-8">
            <div class="col-span-8 md:col-span-4 lg:col-span-3">
                <img class="h-full object-cover" :src="response.gameImage" :alt="response.name" />
            </div>
            <div class="col-span-8 md:col-span-4 lg:col-span-5 mt-3.5 md:mt-4 lg:mt-0">
                <div class="flex flex-col justify-between align-middle font-light">
                    <p class="font-semibold text-xl lg:text-2xl xl:text-3xl">ХАРАКТЕРИСТИКИ</p>
                    <p class="mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl">
                        <span class="mr-2.5">Количество игроков:</span>
                        <span>{{ response.person }}+</span>
                    </p>
                    <p class="mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl">
                        <span class="mr-2.5">Время партии:</span>
                        <span>{{ response.time }}+</span>
                    </p>
                    <p class="mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl">
                        <span class="mr-2.5">Возраст:</span>
                        <span>{{ response.ageLimit }}+</span>
                    </p>
                    <p class="mt-1.5 md:mt-2 lg:mt-2 xl:mt-1.5 md:mt-2 lg:mt-2 xl: text-base lg:text-xl">
                        <span class="mr-2.5">Язык:</span>
                        <span>{{ response.lang }}</span>
                    </p>
                </div>
                <div class="flex flex-col justify-between align-middle font-light mt-3.5 md:mt-4 lg:mt-5 xl:mt-6">
                    <p class="font-semibold text-xl lg:text-2xl xl:text-3xl">ИНФОРМАЦИЯ</p>
                    <p class="mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl">
                        {{
                            response.description?.length > 565
                                ? response.description.slice(0, 565) + "..."
                                : response.description
                        }}
                    </p>
                </div>
                <div class="flex flex-col justify-between align-middle font-light mt-3.5 md:mt-4 lg:mt-5 xl:mt-6">
                    <p class="font-semibold text-xl lg:text-2xl xl:text-3xl">ПОЛЕЗНЫЕ ССЫЛКИ</p>
                    <a
                        :href="response.workShopLink"
                        target="_blank"
                        class="group mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl flex align-middle"
                    >
                        <IconSteam
                            class="group-active:fill-sky-800 group-hover:fill-sky-900 transition-all fill-sky-700 mr-2.5"
                        />
                        <span
                            class="group-active:text-sky-800 group-hover:text-sky-900 transition-all underline text-sky-700"
                            >Мастерская Steam</span
                        >
                    </a>
                    <a
                        :href="response.youTubeLink"
                        target="_blank"
                        class="group mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl flex align-middle"
                    >
                        <IconYouTube
                            class="group-active:fill-sky-800 group-hover:fill-sky-900 transition-all fill-sky-700 mr-2.5"
                        />
                        <span
                            class="group-active:text-sky-800 group-hover:text-sky-900 transition-all underline text-sky-700"
                            >Правила на Youtube</span
                        >
                    </a>
                    <a
                        :href="response.pdfLink"
                        target="_blank"
                        class="group mt-1.5 md:mt-2 lg:mt-2 xl:mt-2.5 text-base lg:text-xl flex align-middle"
                    >
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
import { useRoute } from "vue-router"
import useFetch from "../helpers/index"
import AppPreloader from "@/components/ui/AppPreloader.vue"
import IconSteam from "@/assets/icons/IconSteam.vue"
import IconYouTube from "@/assets/icons/IconYouTube.vue"
import IconPdf from "@/assets/icons/IconPdf.vue"
import URL from "@/api"

const route = useRoute()
const { error, response, fetching } = useFetch(`${URL}/${route.params.id}`)
</script>

<style scoped></style>
