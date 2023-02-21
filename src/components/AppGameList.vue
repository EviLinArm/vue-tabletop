<template>
    <div>
        <div class="flex justify-between">
            <p class="font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">КАТАЛОГ</p>
            <div class="flex align-middle">
                <input
                    :value="gameStore.filterText"
                    @input="gameStore.setFilterText($event.target.value)"
                    class="text-sm md:text-base lg:text-lg xl:text-xl outline-0 placeholder:text-sky-700 w-40 md:w-44 lg:w-52 xl:w-56"
                    type="text"
                    placeholder="ВВЕДИТЕ НАЗВАНИЕ ИГРЫ..."
                />
            </div>
        </div>
        <div class="flex justify-between align-middle text-zinc-400 mt-3 md:mt-4 lg:mt-5 xl:mt-6">
            <p>Всего: {{ props.gameData.length }}</p>
            <div>
                <p class="inline mr-1 lg:mr-1.5">Сортировка:</p>
                <select
                    :value="gameStore.filterValue"
                    @change="gameStore.setFilterValue($event.target.value)"
                    class="outline-0 text-end w-18 lg:w-24 text-stone-800 appearance-none"
                >
                    <option value="" disabled>По умолчанию</option>
                    <option value="time">Время игры</option>
                    <option value="name">Название игры</option>
                    <option value="person">Кол-во игроков</option>
                    <option value="ageLimit">Возраст игроков</option>
                </select>
            </div>
        </div>
        <div
            class="mt-3 md:mt-4 lg:mt-5 xl:mt-6 grid grid-cols-1 gap-y-3.5 md:grid-cols-2 md:gap-y-3 md:gap-x-2 lg:grid-cols-3 lg:gap-y-4 lg:gap-x-3 xl:grid-cols-4 xl:gap-x-6 xl:gap-y-6"
        >
            <transition-group name="card_game">
                <CardGame v-for="game in props.gameData" :game="game" :key="game.id" />
            </transition-group>
        </div>
    </div>
</template>

<script setup>
import CardGame from "@/components/ui/CardGame.vue"
import useGamesStore from "@/stores/games"

const gameStore = useGamesStore()
const props = defineProps(["gameData"])
</script>

<style scoped>
.card_game-move,
.card_game-enter-active,
.card_game-leave-active {
    transition: ease-in-out 0.5s;
    display: inline-block;
}
.card_game-enter-from,
.card_game-leave-to {
    opacity: 0;
}
.card_game-leave-active {
    display: none;
}
</style>
