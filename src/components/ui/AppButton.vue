<template>
    <RouterLink :to="props.buttonText.link" class="rounded-xl transition-all bg-sky-700 py-3 px-5 inline-block hover:bg-sky-900 active:bg-sky-800">
        <span class="text-3xl text-violet-50">{{ props.buttonText.text }}</span>
    </RouterLink>
</template>

<script setup lang="ts">
const props = defineProps(["buttonText"])
</script>

<style scoped></style>
