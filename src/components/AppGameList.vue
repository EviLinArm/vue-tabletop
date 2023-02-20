<template>
    <div>
        <div class="flex justify-between">
            <p class="font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">КАТАЛОГ</p>
            <div class="flex align-middle">
                <input
                    class="text-sm md:text-base lg:text-lg xl:text-xl outline-0 placeholder:text-sky-700 w-40 md:w-44 lg:w-52 xl:w-56"
                    type="text"
                    placeholder="ВВЕДИТЕ НАЗВАНИЕ ИГРЫ..."
                />
            </div>
        </div>
        <div class="flex justify-between align-middle text-zinc-400 mt-3 md:mt-4 lg:mt-5 xl:mt-6">
            <p>Всего: {{ props.gameData.length }}</p>
            <div>
                <p class="inline mr-1.5 lg:mr-2 xl:mr-2.5">Сортировка:</p>
                <input
                    class="outline-0 text-end w-14 lg:w-24 xl:w-32 placeholder:text-stone-800"
                    placeholder="по имени"
                />
            </div>
        </div>
        <div
            class="mt-3 md:mt-4 lg:mt-5 xl:mt-6 grid grid-cols-1 gap-y-3.5 md:grid-cols-2 md:gap-y-3 md:gap-x-2 lg:grid-cols-3 lg:gap-y-4 lg:gap-x-3 xl:grid-cols-4 xl:gap-x-6 xl:gap-y-6"
        >
            <CardGame v-for="game in props.gameData" :game="game" :key="game.id" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CardGame from "@/components/ui/CardGame.vue"

const props = defineProps(["gameData"])
</script>

<style scoped></style>
