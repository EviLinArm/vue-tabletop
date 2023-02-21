<template>
    <div class="game_item">
        <RouterLink
            :to="'/game/' + props.game.id"
            class="group bg-white flex flex-col h-64 md:h-72 lg:h-80 xl:h-96 w-full rounded-2xl border-2 border-zinc-300 overflow-hidden transition-all hover:border-sky-900/30"
        >
            <div class="relative h-2/3 w-full">
                <div class="absolute left-0 top-0 w-full h-full transition-all z-10 group-hover:bg-sky-900/30"></div>
                <img
                    class="absolute left-0 top-0 w-full h-full z-0 object-cover"
                    :src="props.game.gameImage"
                    alt="props.game.name"
                />
            </div>
            <div
                class="h-1/3 pt-0.5 pb-1.5 px-1.5 md:py-2 md:px-2 lg:py-3 lg:px-2.5 xl:py-3.5 xl: text-stone-800 flex flex-col justify-between text-base lg:text-lg xl:text-xl"
            >
                <p class="text-center group-hover:text-sky-900 transition-all">
                    {{ props.game.name.length > 60 ? props.game.name.slice(0, 60) + "..." : props.game.name }}
                </p>
                <div class="flex justify-between font-light">
                    <p class="flex items-center">
                        <IconPesons class="mr-2.5 fill-stone-800 group-hover:fill-sky-900 transition-all" />
                        <span class="group-hover:text-sky-900 transition-all">{{ props.game.person }}+</span>
                    </p>
                    <p class="flex items-center">
                        <IconClock class="mr-2.5 fill-stone-800 group-hover:fill-sky-900 transition-all" />
                        <span class="group-hover:text-sky-900 transition-all">{{ props.game.time }}+</span>
                    </p>
                    <p class="flex items-center">
                        <IconAge class="mr-2.5 fill-stone-800 group-hover:fill-sky-900 transition-all" />
                        <span class="group-hover:text-sky-900 transition-all">{{ props.game.ageLimit }}+</span>
                    </p>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import IconPesons from "@/assets/icons/IconPesons.vue"
import IconClock from "@/assets/icons/IconClock.vue"
import IconAge from "@/assets/icons/IconAge.vue"

const props = defineProps(["game"])
</script>

<style scoped></style>
