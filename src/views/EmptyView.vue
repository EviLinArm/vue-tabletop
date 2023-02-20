<template>
    <div class="flex flex-col items-center w-full">
        <img src="../assets/emptyImage.png" class="w-full h-80 mb-5 lg:mb-8 lg:h-[30rem] md:h-[25rem] xl:h-[34rem] object-contain md:mb-7 xl:mb-10" alt="Empty page image" />
        <span class="font-semibold text-2xl mb-3 lg:mb-7 lg:text-4xl md:text-3xl md:mb-5 xl:text-5xl xl:mb-10 uppercase">ПРИКЛЮЧЕНИЕ НЕ НАЙДЕНО</span>
        <div>
            <AppButton class="inline-block" :buttonText="{ text: 'ИСКАТЬ ЕЩЕ!', link: '/' }" />
        </div>
    </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/ui/AppButton.vue"
</script>

<style scoped></style>
