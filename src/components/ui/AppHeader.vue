<template>
    <div>
        <div class="h-20 max-w-screen-xl mx-auto flex items-center">
            <RouterLink class="flex items-center mr-10 group" to="/">
                <DiceIcon />
            </RouterLink>
            <div class="text-3xl">
                <ul class="flex text-stone-800">
                    <li class="mr-10 transition-all hover:text-sky-600 active:text-sky-800">
                        <RouterLink to="/start">КАК НАЧАТЬ</RouterLink>
                    </li>
                    <li class="mr-10 transition-all hover:text-sky-600 active:text-sky-800">
                        <a href="https://plati.market/itm/2594768" target="_blank">ГДЕ КУПИТЬ</a>
                    </li>
                    <li class="mr-10 transition-all hover:text-sky-600 active:text-sky-800">
                        <RouterLink to="/">СЛУЧАЙНАЯ ИГРА</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import DiceIcon from "@/assets/icons/DiceIcon.vue"

export default defineComponent({
    components: { DiceIcon }
})
</script>

<style scoped></style>
