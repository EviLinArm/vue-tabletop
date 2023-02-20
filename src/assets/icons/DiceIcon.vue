<template>
    <div class="container">
        <div class="dice logo">
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
    height: 100%;
    align-items: center;
}

.dice {
    position: relative;
    width: calc(100px / 3);
    height: calc(100px / 3);
    transform-style: preserve-3d;
    transition: 1s ease;
}

.dice.logo {
    animation: 2s ease 0s 1 normal none running rolling-small;
    transform: rotateX(35deg) rotateY(47deg);
}

.dice.logo:hover {
    animation: 1s ease 0s 1 normal none running rolling-small;
    transform: rotateX(215deg) rotateY(227deg);
}

@keyframes rolling-small {
    100% {
        transform: rotateX(395deg) rotateY(407deg);
    }
}

.face {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: calc(20px / 3);
    border: calc(5px / 3) solid #f6f3f0;
    transform-style: preserve-3d;
    background: linear-gradient(145deg, #dddbd8, #fff);
}

.face::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: calc(20px / 3);
    background: #f6f3f0;
    transform: translateZ(-1px);
}

.face::after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    width: calc(18px / 3);
    height: calc(18px / 3);
    border-radius: 50%;
    background: #131210;
}

.face.default {
    border: unset;
    border-radius: calc(7px / 3);
}

.front {
    transform: translateZ(calc(50px / 3));
}

.back {
    transform: rotateX(180deg) translateZ(calc(50px / 3));
}

.top {
    transform: rotateX(90deg) translateZ(calc(50px / 3));
}

.bottom {
    transform: rotateX(-90deg) translateZ(calc(50px / 3));
}

.right {
    transform: rotateY(90deg) translateZ(calc(50px / 3));
}

.left {
    transform: rotateY(-90deg) translateZ(calc(50px / 3));
}

.front::after {
    width: calc(30px / 3);
    height: calc(30px / 3);
    background: #095d9b;
    margin: calc(-15px / 3) 0 0 calc(-15px / 3);
}

.back::after {
    margin: calc(-35px / 3) 0 0 calc(-30px / 3);
    box-shadow: calc(40px / 3) 0, 0 calc(25px / 3), calc(40px / 3) calc(25px / 3), 0 calc(50px / 3), calc(40px / 3) calc(50px / 3);
}

.top::after {
    margin: calc(-30px / 3) 0 0 calc(-30px / 3);
    box-shadow: calc(40px / 3) calc(40px / 3);
}

.bottom::after {
    margin: calc(-36px / 3) 0 0 calc(-36px / 3);
    box-shadow: calc(26px / 3) calc(26px / 3), calc(52px / 3) calc(52px / 3), calc(52px / 3) 0, 0 calc(52px / 3);
}

.right::after {
    margin: calc(-30px / 3) 0 0 calc(-30px / 3);
    box-shadow: calc(40px / 3) 0, 0 calc(40px / 3), calc(40px / 3) calc(40px / 3);
}

.left::after {
    margin: calc(-35px / 3) 0 0 calc(-35px / 3);
    box-shadow: calc(25px / 3) calc(25px / 3), calc(50px / 3) calc(50px / 3);
}

@media screen and (max-width: 768px) {
    .dice {
        width: calc(100px / 5);
        height: calc(100px / 5);
    }

    .face {
        border-radius: calc(20px / 5);
        border: calc(5px / 5) solid #f6f3f0;
    }

    .face::before {
        border-radius: calc(20px / 5);
    }

    .face::after {
        width: calc(18px / 5);
        height: calc(18px / 5);
    }

    .face.default {
        border-radius: calc(7px / 5);
    }

    .front {
        transform: translateZ(calc(50px / 5));
    }

    .back {
        transform: rotateX(180deg) translateZ(calc(50px / 5));
    }

    .top {
        transform: rotateX(90deg) translateZ(calc(50px / 5));
    }

    .bottom {
        transform: rotateX(-90deg) translateZ(calc(50px / 5));
    }

    .right {
        transform: rotateY(90deg) translateZ(calc(50px / 5));
    }

    .left {
        transform: rotateY(-90deg) translateZ(calc(50px / 5));
    }

    .front::after {
        width: calc(30px / 5);
        height: calc(30px / 5);
        margin: calc(-15px / 5) 0 0 calc(-15px / 5);
    }

    .back::after {
        margin: calc(-35px / 5) 0 0 calc(-30px / 5);
        box-shadow: calc(40px / 5) 0, 0 calc(25px / 5), calc(40px / 5) calc(25px / 5), 0 calc(50px / 5),
            calc(40px / 5) calc(50px / 5);
    }

    .top::after {
        margin: calc(-30px / 5) 0 0 calc(-30px / 5);
        box-shadow: calc(40px / 5) calc(40px / 5);
    }

    .bottom::after {
        margin: calc(-36px / 5) 0 0 calc(-36px / 5);
        box-shadow: calc(26px / 5) calc(26px / 5), calc(52px / 5) calc(52px / 5), calc(52px / 5) 0, 0 calc(52px / 5);
    }

    .right::after {
        margin: calc(-30px / 5) 0 0 calc(-30px / 5);
        box-shadow: calc(40px / 5) 0, 0 calc(40px / 5), calc(40px / 5) calc(40px / 5);
    }

    .left::after {
        margin: calc(-35px / 5) 0 0 calc(-35px / 5);
        box-shadow: calc(25px / 5) calc(25px / 5), calc(50px / 5) calc(50px / 5);
    }
}
</style>
