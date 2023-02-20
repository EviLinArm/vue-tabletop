<template>
    <div class="flex flex-col-reverse lg:h-[28rem] xl:h-[35rem] lg:flex-row">
        <div class="w-full lg:w-3/5">
            <div class="font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                <p v-for="text in props.heroData.title" :key="text" class="mb-1 md:mb-1.5 lg:mb-3 xl:mb-3.5 last:mb-0">
                    {{ text }}
                </p>
            </div>
            <div class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-4 md:mb-6 lg:mb-8 xl:mb-9">
                <p v-for="desc in props.heroData.desc" :key="desc" class="mb-1 md:mb-2 lg:mb-3 last:mb-0">{{ desc }}</p>
            </div>
            <AppButton :buttonText="heroData.buttonText" />
        </div>
        <img
            class="h-72 mb-5 md:mb-6 xl:mb-0 w-full lg:w-2/5 lg:h-full object-contain"
            :src="props.heroData.image"
            alt=""
        />
    </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/ui/AppButton.vue"

const props = defineProps(["heroData"])
</script>

<style scoped></style>
