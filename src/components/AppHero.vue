<template>
    <div class="flex h-[30rem]">
        <div class="w-3/5">
            <div class="font-semibold text-6xl mb-10">
                <p v-for="text in props.heroData.title" :key="text" class="mb-3.5 last:mb-0">{{ text }}</p>
            </div>
            <div class="text-3xl font-light mb-10">
                <p v-for="desc in props.heroData.desc" :key="desc" class="mb-1.5 last:mb-0">{{ desc }}</p>
            </div>
            <AppButton :buttonText="heroData.buttonText" />
        </div>
        <img class="w-2/5 object-contain" :src="props.heroData.image" alt="" />
    </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/ui/AppButton.vue"

const props = defineProps(["heroData"])
</script>

<style scoped></style>
