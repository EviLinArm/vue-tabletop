<script setup lang="ts">
import { RouterView } from "vue-router"
import AppHeader from "@/components/ui/AppHeader.vue"
</script>

<template>
    <div class="h-screen flex flex-col justify-between">
        <AppHeader />
        <div class="max-w-screen-xl mx-auto flex-auto mt-6">
            <RouterView />
        </div>
        <AppHeader class="mt-6 pb-3" />
    </div>
</template>
