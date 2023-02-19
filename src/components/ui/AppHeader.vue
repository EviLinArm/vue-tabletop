<template>
    <div>
        <div class="h-20 max-w-screen-xl mx-auto flex items-center">
            <RouterLink class="flex items-center mr-10 group" to="/">
                <div class="w-14 h-14 relative">
                    <img
                        class="absolute left-0 top-0 w-full h-full z-0 object-cover transition-all group-hover:opacity-50"
                        src="../../assets/siteLogo.png"
                        alt="Table Logotype"
                    />
                </div>
            </RouterLink>
            <div class="text-3xl">
                <ul class="flex text-stone-800">
                    <li class="mr-10 transition-all hover:text-sky-600 active:text-sky-900">
                        <RouterLink to="/start">КАК НАЧАТЬ?</RouterLink>
                    </li>
                    <li class="mr-10 transition-all hover:text-sky-600 active:text-sky-900">
                        <a href="https://plati.market/itm/2594768" target="_blank">ГДЕ КУПИТЬ?</a>
                    </li>
                    <li class="mr-10 transition-all hover:text-sky-600 active:text-sky-900">
                        <RouterLink to="/">СЛУЧАЙНАЯ ИГРА!</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
