<template>
    <AppHero :heroData="startData" />
    <div>
        <div class="flex justify-between">
            <p class="font-medium text-5xl">ЧТО НУЖНО ДЕЛАТЬ?</p>
        </div>
        <div class="flex flex-col justify-between align-middle font-light mt-6">
            <p class="font-semibold text-3xl">КУПИТЬ ИГРУ</p>
            <p class="mt-2.5 text-xl">
                Приобретите ключ игры на площадке <a href="/#" target="_blank">Plati.ru</a> либо в самом
                <a href="/#" target="_blank">Steam</a> (если сейчас там распродажа)
            </p>
        </div>
        <div class="flex flex-col justify-between align-middle font-light mt-6">
            <p class="font-semibold text-3xl">ВСТУПИТЬ В DISCORD</p>
            <p class="mt-2.5 text-xl">Друзья есть? - Делайте свой Discord сервер и ни в чем себе не отказывайте.</p>
            <p class="mt-2.5 text-xl">
                Вы мой друг? - <a href="/#" target="_blank">Добавляйтесь в друзья</a> в Discord и играйте вместе со
                мной.
            </p>
            <p class="mt-2.5 text-xl">
                Если у вас нет друзей? - Вступайте в Discord сообщество <a href="/#" target="_blank">NINRI</a>.
            </p>
        </div>
        <div class="flex flex-col justify-between align-middle font-light mt-6">
            <p class="font-semibold text-3xl">ПОДПИСАТЬСЯ НА ИГРУ</p>
            <p class="mt-2.5 text-xl">
                Переходите в <a href="/#" target="_blank">Каталог настолок</a>, выбирайте игру которая понравилась,
                кликайте по ссылке Мастерская Steam и подписывайтесь на игру.
            </p>
        </div>
        <div class="flex flex-col justify-between align-middle font-light mt-6">
            <p class="font-semibold text-3xl">НАЧАТЬ ИГРАТЬ</p>
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
        "Просто читайте и повторяйте инструкцию ниже."
    ],
    image: ["src/assets/startImage.png"],
    buttonText: {
        text: "КАТАЛОГ НАСТОЛОК",
        link: "/"
    }
}
</script>

<style scoped></style>
