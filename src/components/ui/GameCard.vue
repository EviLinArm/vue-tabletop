<template>
    <div
        class="rounded-3xl flex items-center overflow-hidden bg-amber-50 hover:bg-amber-100 hover:cursor-pointer"
        @click="detailsPush"
    >
        <img
            class="w-56 h-56 drop-shadow-[10px_0px_3px_rgba(0,0,0,0.35)] bg-amber-500 rounded-3xl mr-5 object-cover"
            :src="game.gameImage"
            :alt="game.name"
        />
        <div class="pr-5 py-5">
            <div class="flex items-center">
                <span class="mr-2.5">{{ game.gamePlayed === "true" ? "✅" : "⛔" }}</span>
                <span class="font-bold text-2xl">{{ game.name }}</span>
            </div>
            <p class="text-gray-900 h-36 text-base mt-3">{{ cutTextWithDots }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import type GameType from "@/types/GameType"
import useCutTextWithDots from "@/use/useCutTextWithDots"

type PropsType = {
    game: GameType
}

const props = defineProps<PropsType>()
const router = useRouter()
const { cutTextWithDots } = useCutTextWithDots(props?.game.description)

const detailsPush = () => {
    router.push({
        name: "details",
        params: {
            id: props.game.id
        }
    })
}
</script>

<style scoped></style>
