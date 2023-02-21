<template>
    <AppHero :heroData="startData" />
    <div class="mt-4">
        <div class="flex justify-between">
            <p class="font-medium text-2xl md:text-3xl lg:text-4xl xl:text-5xl">ЧТО НУЖНО ДЕЛАТЬ?</p>
        </div>
        <div class="flex flex-col justify-between align-middle font-light mt-6">
            <p class="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">КУПИТЬ ИГРУ</p>
            <p class="mt-2.5 text-xl">
                Приобретите ключ игры на площадке
                <a
                    class="active:text-sky-800 hover:text-sky-900 transition-all text-sky-700"
                    href="https://plati.market/itm/2594768"
                    target="_blank"
                    >Plati.ru</a
                >
                либо в самом
                <a
                    class="active:text-sky-800 hover:text-sky-900 transition-all text-sky-700"
                    href="https://store.steampowered.com/app/286160/Tabletop_Simulator/"
                    target="_blank"
                    >Steam</a
                >
                (если сейчас там распродажа)
            </p>
        </div>
        <div class="flex flex-col justify-between align-middle font-light mt-6">
            <p class="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">ВСТУПИТЬ В DISCORD</p>
            <p class="mt-2.5 text-xl">Друзья есть? - Делайте свой Discord сервер и ни в чем себе не отказывайте.</p>
            <p class="mt-2.5 text-xl">
                Вы мой друг? -
                <a
                    class="active:text-sky-800 hover:text-sky-900 transition-all text-sky-700"
                    href="https://discordapp.com/users/403436810916855848"
                    target="_blank"
                    >Добавляйтесь в друзья</a
                >
                в Discord и играйте вместе со мной.
            </p>
            <p class="mt-2.5 text-xl">
                Если у вас нет друзей? - Вступайте в Discord сообщество
                <a
                    class="active:text-sky-800 hover:text-sky-900 transition-all text-sky-700"
                    href="https://discord.gg/ninri"
                    target="_blank"
                    >NINRI</a
                >.
            </p>
        </div>
        <div class="flex flex-col justify-between align-middle font-light mt-6">
            <p class="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">ПОДПИСАТЬСЯ НА ИГРУ</p>
            <p class="mt-2.5 text-xl">
                Переходите в
                <RouterLink class="active:text-sky-800 hover:text-sky-900 transition-all text-sky-700" to="/"
                    >Каталог настолок</RouterLink
                >, выбирайте игру которая понравилась, кликайте по ссылке Мастерская Steam и подписывайтесь на игру.
            </p>
        </div>
        <div class="flex flex-col justify-between align-middle font-light mt-6">
            <p class="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">НАЧАТЬ ИГРАТЬ</p>
            <p class="mt-2.5 text-xl">
                Запускайте TableTop Simulator, <strong> первый запуск игры всегда происходит с вылетом</strong>, поэтому
                сразу перезапускайте.
            </p>
            <p class="mt-2.5 text-xl">
                Проходите обучение для овладения основа управления, а потом бросайте кубики с друзьями, сопартийцами или
                просто в одиночку оттачивая мастерство и тактики.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppHero from "@/components/AppHero.vue"

const startData = {
    title: ["КАК НАЧАТЬ?"],
    desc: [
        "Попробуйте настолки в которые всегда хотели поиграть, но не могли себе позволить.",
        "С Tabletop simulator можно в них поиграть не важно есть у вас друзья или нет.",
        "Читайте инструкцию ниже и просто выполняйте."
    ],
    image: ["../assets/startImage.png"],
    buttonText: {
        text: "КАТАЛОГ НАСТОЛОК",
        link: "/"
    }
}
</script>

<style scoped></style>
