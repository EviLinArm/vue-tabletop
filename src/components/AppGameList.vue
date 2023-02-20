<template>
    <div>
        <div class="flex justify-between">
            <p class="font-medium text-5xl">КАТАЛОГ</p>
            <div class="flex align-middle">
                <input class="outline-0 placeholder:text-sky-700 w-44" type="text" placeholder="ВВЕДИТЕ НАЗВАНИЕ ИГРЫ..." />
            </div>
        </div>
        <div class="flex justify-between align-middle text-zinc-400 mt-6">
            <p>Всего: {{ props.gameData.length }}</p>
            <div>
                <p class="inline mr-2.5">Сортировка:</p>
                <input class="outline-0 text-end w-14 placeholder:text-stone-800" placeholder="по имени" />
            </div>
        </div>
        <div class="mt-6 grid grid-cols-4 gap-x-6 gap-y-6">
            <CardGame v-for="game in props.gameData" :game="game" :key="game.id" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CardGame from "@/components/ui/CardGame.vue"

const props = defineProps(["gameData"])
</script>

<style scoped></style>
