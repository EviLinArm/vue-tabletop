<template>
    <div>
        <div class="flex justify-between">
            <p class="font-medium text-5xl">КАТАЛОГ</p>
            <div class="flex align-middle">
                <input class="text-zinc-400 w-auto" type="text" placeholder="ВВЕДИТЕ НАЗВАНИЕ ИГРЫ..." />
            </div>
        </div>
        <div class="flex justify-between align-middle text-zinc-400 mt-6">
            <p>Всего: 8</p>
            <div>
                <p class="inline">Сортировка:</p>
                <input class="text-end" placeholder="по имени" />
            </div>
        </div>
        <div class="mt-6 grid grid-cols-4 gap-x-6 gap-y-6">
            <CardGame v-for="{card, id} in 13" :key="id"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue"
import CardGame from "@/components/ui/CardGame.vue"

export default defineComponent({
    components: { CardGame }
})
</script>

<style scoped></style>
