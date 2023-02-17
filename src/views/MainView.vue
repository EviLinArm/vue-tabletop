<script setup></script>

<template>
    <div class="flex my-10">
        <div class="w-3/5 h-96 relative mr-10">
            <img
                class="absolute left-0 top-0 w-full h-full z-0 object-fit mix-blend-luminosity"
                src="../assets/OneDiceMan_board.png"
                alt="Hero image"
            />
        </div>
        <div class="w-2/5">
            <div class="text-center mb-3 text-gray-200">
                <p class="text-2xl">TableTop</p>
                <p class="text-4xl">Description</p>
            </div>
            <div class="mb-3 text-gray-100">
                <p class="mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur consequatur culpa,
                    dolor ea facilis fuga fugit, illo in inventore magnam neque nesciunt nostrum, numquam qui quibusdam
                    reprehenderit. Consequatur esse fuga odio quidem totam! Aliquam aspernatur atque commodi impedit
                    nesciunt nostrum odio officiis
                </p>
                <p>
                    possimus quis sunt. Aut blanditiis, impedit iste modi nam quo repellendus sunt? Ab, aliquid animi
                    aut autem beatae consequuntur cum deserunt dolore eligendi enim expedita explicabo hic illo itaque
                    iusto labore modi nesciunt nulla odio quam quibusdam saepe sed sint temporibus tenetur unde,
                    veritatis voluptas? Dolor esse maxime molestias mollitia nostrum optio quam rem sint ullam vitae!
                </p>
            </div>
            <div class="flex justify-center">
                <input
                    class="bg-gray-100 text-gray-700 placeholder-gray-900 p-3 rounded-md outline-0"
                    type="text"
                    placeholder="Search..."
                />
            </div>
        </div>
    </div>

    <div class="grid grid-cols-3 gap-x-3 gap-y-3 mb-5">
        <div v-for="item in 15" class="bg-gray-100 p-5 rounded-xl text-center">
            <div class="text-gray-700 font-black text-3xl mb-3 max-h-9 overflow-hidden">Title</div>
            <div class="font-extralight mb-3 flex max-h-24 overflow-hidden">
                <div class="w-1/4 relative mr-2">
                    <img
                        class="absolute left-0 top-0 w-full h-full z-0 object-cover rounded-md mix-blend-darken"
                        src="../assets/OneDiceMan_board0.png"
                        alt="Hero image"
                    />
                </div>
                <div class="w-3/4 text-left text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto aspernatur
                    delectus dolor dolore dolorem doloremque dolorum ea error eveniet illo incidunt ipsam
                </div>
            </div>
            <button
                class="border-2 py-1 px-4 rounded-md border-emerald-900 bg-emerald-800 font-semibold text-xl text-gray-100"
            >
                Look!
            </button>
        </div>
    </div>
</template>
