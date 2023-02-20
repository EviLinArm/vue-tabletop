<template>
    <div class="flex flex-col items-center w-full">
        <img src="../assets/emptyImage.png" class="w-full h-[30rem] object-contain mb-10" alt="Empty page image" />
        <span class="font-semibold text-5xl mb-10 uppercase">ПРИКЛЮЧЕНИЕ НЕ НАЙДЕНО</span>
        <div>
            <AppButton class="inline-block" :buttonText="{ text: 'ИСКАТЬ ЕЩЕ!', link: '/' }" />
        </div>
    </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/ui/AppButton.vue"
</script>

<style scoped></style>
