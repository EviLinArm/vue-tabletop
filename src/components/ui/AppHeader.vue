<template>
    <header class="py-10 flex justify-around items-center">
        <RouterLink to="/" class="text-3xl font-bold hover:text-gray-500 hover:underline">TableTop 🎲</RouterLink>
        <ul class="flex">
            <li class="mr-5">
                <a
                    class="font-bold hover:text-gray-500 hover:underline"
                    target="_blank"
                    href="https://store.steampowered.com/app/286160/Tabletop_Simulator/"
                    >Что это такое?</a
                >
            </li>
            <li class="mr-5">
                <RouterLink to="/howto" class="font-bold hover:text-gray-500 hover:underline"
                    >Как установить?</RouterLink
                >
            </li>
            <li>
                <a
                    class="font-bold hover:text-gray-500 hover:underline"
                    target="_blank"
                    href="https://plati.market/itm/2594768"
                    >Где купить?</a
                >
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts"></script>
