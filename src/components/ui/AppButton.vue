<template>
    <RouterLink
        :to="props.buttonText.link"
        class="rounded-xl transition-all bg-sky-700 py-2 px-3 md:py-3 md:px-4 lg:py-3.5 lg:px-5 xl:py-4 xl:px-6 inline-block hover:bg-sky-900 active:bg-sky-800"
    >
        <span class="text-lg lg:text-2xl xl:text-3xl text-violet-50">{{ props.buttonText.text }}</span>
    </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps(["buttonText"])
</script>

<style scoped></style>
