<template>
    <div class="container">
        <div class="dice spin">
            <div class="face default front"></div>
            <div class="face default back"></div>
            <div class="face default top"></div>
            <div class="face default bottom"></div>
            <div class="face default right"></div>
            <div class="face default left"></div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
    display: flex;
    width: 100%;
    margin: auto 0;
    align-items: center;
    justify-content: center;
    padding: 45px;
}

.dice {
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    transition: 1s ease;
}

.dice.spin {
    animation: 4s ease 0s infinite normal none running rolling;
}

.dice.default {
    transform: rotateX(35deg) rotateY(47deg);
}

@keyframes rolling {
    50% {
        transform: rotateX(455deg) rotateY(455deg);
    }
}

.face {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 5px solid #f6f3f0;
    transform-style: preserve-3d;
    background: linear-gradient(145deg, #dddbd8, #fff);
}

.face::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: #f6f3f0;
    transform: translateZ(-1px);
}

.face::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #131210;
}

.face.default {
    border: unset;
    border-radius: 7px;
}

.front {
    transform: translateZ(50px);
}

.back {
    transform: rotateX(180deg) translateZ(50px);
}

.top {
    transform: rotateX(90deg) translateZ(50px);
}

.bottom {
    transform: rotateX(-90deg) translateZ(50px);
}

.right {
    transform: rotateY(90deg) translateZ(50px);
}

.left {
    transform: rotateY(-90deg) translateZ(50px);
}

.front::after {
    width: 30px;
    height: 30px;
    background: #095d9b;
    margin: -15px 0 0 -15px;
}

.back::after {
    margin: -35px 0 0 -30px;
    box-shadow: 40px 0, 0 25px, 40px 25px, 0 50px, 40px 50px;
}

.top::after {
    margin: -30px 0 0 -30px;
    box-shadow: 40px 40px;
}

.bottom::after {
    margin: -36px 0 0 -36px;
    box-shadow: 26px 26px, 52px 52px, 52px 0, 0 52px;
}

.right::after {
    margin: -30px 0 0 -30px;
    box-shadow: 40px 0, 0 40px, 40px 40px;
}

.left::after {
    margin: -35px 0 0 -35px;
    box-shadow: 25px 25px, 50px 50px;
}
</style>
