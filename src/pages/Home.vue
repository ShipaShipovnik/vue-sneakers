<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { useItems } from '@/useItems';
import { onMounted } from 'vue';

import CardList from '@/components/CardList.vue';

const { items, fetchItems, fetchFavorites, toggleFavorite, filters, isLoading } = useItems()

const slides = [
    '/slider.png',
    '/slider.png',
    '/slider.png',
]


let searchTimeout = null // Таймер для debounce
const onChangeSearchInput = async (event) => {
    filters.searchQuery = event.target.value
    console.log('ЗАПРОС: ' + event.target.value)

    clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
        fetchItems()
    }, 300)
}

// на маунте
onMounted(async () => {
    await fetchItems();
    await fetchFavorites();
})
</script>

<template>
    <carousel :autoplay="2000" :transition="1000" :wrapAround="true">
        <slide v-for="(slide, index) in slides" :key="index">
            <img :src="slide" alt="Slide image">
        </slide>
        <template #addons>
            <navigation />
        </template>
    </carousel>

    <div class="w-full head-bar my-10 flex flex-col sm:flex-row items-center sm:place-content-between gap-5">
        <h2 class="text-3xl font-bold">Все кроссовки</h2>

        <div class="search-bar w-full sm:w-[50%] relative">
            <img src="/search.svg" alt="search" class="absolute top-3 left-4">
            <input @input="onChangeSearchInput" type="text" placeholder="Введите название товара"
                class="w-full border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400">
        </div>
    </div>

    <CardList :items="items" :onClickFavs="toggleFavorite" :isLoading="isLoading" />
</template>

<style scoped>
.search-bar {
    justify-items: flex-end
}
</style>