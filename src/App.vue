<script setup lang="ts">
import { RouterView } from "vue-router"
import AppHeader from "@/components/ui/AppHeader.vue"
</script>

<template>
    <div class="box-border bg-gray-100 min-h-screen container mx-auto 2xl">
        <AppHeader />
        <RouterView />
    </div>
</template>
