<script setup lang="ts">
import { RouterView } from "vue-router"
import AppHeader from "@/components/ui/AppHeader.vue"

//TODO: Фановая страница с "броском" кубика
//TODO: Добавить typescript
//TODO: Писать бэк \ делать ЛК клиента

</script>

<template>
    <div class="h-full absolute w-full xl:h-screen flex flex-col justify-between px-4 lg:px-5 xl:px-6">
        <AppHeader />
        <div class="max-w-screen-xl mx-auto flex-auto mt-2 md:mt-3.5 lg:mt-4 xl:mt-5">
            <RouterView :key="$route.fullPath" />
        </div>
        <AppHeader class="mt-2 xl:mt-6 pb-1 xl:pb-3" />
    </div>
</template>
