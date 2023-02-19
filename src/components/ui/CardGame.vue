<template>
    <a href="/#" class="group flex flex-col h-96 w-full rounded-2xl border-2 border-zinc-300 overflow-hidden transition-all hover:border-zinc-400">
        <div class="relative h-2/3 w-full">
            <div
                class="absolute left-0 top-0 w-full h-full transition-all z-10 group-hover:bg-sky-900/30"
            ></div>
            <img
                class="absolute left-0 top-0 w-full h-full z-0 object-cover"
                src="../../assets/testGameCard.jpg"
                alt=""
            />
        </div>
        <div class="h-1/3 py-3.5 px-3 text-stone-800 flex flex-col justify-between">
            <p class="text-center text-xl group-hover:text-sky-700 transition-all">The Binding of Isaac: Four Souls</p>
            <div class="flex justify-between font-light">
                <p class="flex align-middle">
                    <IconPesons class="mr-2.5" />
                    <span>1</span>
                </p>
                <p class="flex align-middle">
                    <IconClock class="mr-2.5" />
                    <span>2</span>
                </p>
                <p class="flex align-middle">
                    <IconAge class="mr-2.5" />
                    <span>3</span>
                </p>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import IconPesons from "@/assets/icons/IconPesons.vue"
import IconClock from "@/assets/icons/IconClock.vue"
import IconAge from "@/assets/icons/IconAge.vue"
</script>

<style scoped></style>
