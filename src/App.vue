<script setup lang="ts">
import { RouterView } from "vue-router"
import AppHeader from "@/components/ui/AppHeader.vue"
import AppFooter from "@/components/ui/AppFooter.vue"
</script>

<template>
    <div class="h-screen grid grid-rows-layout content-between">
        <AppHeader />
        <div class="max-w-screen-2xl mx-auto">
            <RouterView />
        </div>
        <AppFooter />
    </div>
</template>
