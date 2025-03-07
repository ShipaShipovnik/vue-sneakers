<template>
    <div
        class="card w-xs relative m-10 border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">
        <div class="absolute absolute top-8 left-8" @click="onClickFavs">
            <img :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="Fav" class="">
        </div>
        <img :src="imageUrl" alt="Sneaker" class="w-full">
        <p>{{ title }}</p>

        <div class="flex justify-between mt-5">
            <div class="flex flex-col">
                <span class="text-slate-400">ЦЕНА:</span>
                <b>{{ price }} руб.</b>
            </div>
            <img src="/plus.svg" alt="plus">
        </div>
    </div>
</template>

<script setup>
defineProps({
    id: Number,
    imageUrl: String,
    isFavorite: Boolean,
    title: String,
    price: Number,
    onClickFavs: Function,
})

</script>

<style>
.card {
    min-width: 210px;
    max-width: 100%;
    width: 210px;
}
</style>