<template>
    <div>
        <div class="h-12 md:h-14 lg:h-16 xl:h-20 max-w-screen-xl mx-auto flex items-center">
            <RouterLink class="flex items-center md:mr-6 lg:mr-8 mr-3.5 xl:mr-10 group" to="/">
                <DiceIcon />
            </RouterLink>
            <div class="text-md md:text-xl lg:text-2xl xl:text-3xl">
                <ul class="flex text-stone-800">
                    <li class="mr-2 md:mr-4 lg:mr-6 xl:mr-10 transition-all hover:text-sky-600 active:text-sky-800">
                        <RouterLink to="/start">КАК НАЧАТЬ</RouterLink>
                    </li>
                    <li class="mr-2 md:mr-4 lg:mr-6 xl:mr-10 transition-all hover:text-sky-600 active:text-sky-800">
                        <a href="https://plati.market/itm/2594768" target="_blank">ГДЕ КУПИТЬ</a>
                    </li>
                    <li class="md:mr-4 xl:mr-10 transition-all hover:text-sky-600 active:text-sky-800">
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
