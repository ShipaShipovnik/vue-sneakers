<script setup>
import { ref, onMounted, watch, provide } from 'vue';
import axios from 'axios';

import Card from '@/components/Card.vue';
import CardList from '@/components/CardList.vue';
// слайдер
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const items = ref([])
const searchQuery = ref('')

const onChangeSearch = (event) => {
    searchQuery.value = event.target.value
    console.log(event.target.value)
}

const fetchItems = async () => {
    try {
        const { data } = await axios.get('https://631e7636e485f763.mokky.dev/items')
        items.value = data
    } catch (e) {
        console.log(e)
    }
}

watch(searchQuery, async () => {
    try {
        const { data } = await axios.get(
            `https://631e7636e485f763.mokky.dev/items?title=*${searchQuery.value}*`
        )

        items.value = data.map((obj) => ({
            ...obj,
            isFavorite: false,
        }))
        console.log(items.value)
    } catch (e) {
        console.log(e)
    }
})

const fetchFavs = async () => {
    try {
        const { data: favorites } = await axios.get('https://631e7636e485f763.mokky.dev/favorites')

        items.value = items.value.map((item) => {
            const favorite = favorites.find((favorite) => favorite.item_id === item.id)

            if (!favorite) {
                return item
            }

            return {
                ...item,
                isFavorite: true,
                favoriteId: favorite.id
            }
        })

        console.log(items.value)

    } catch (e) {
        console.log(e)
    }
}

// фавы
const addToFavs = async (item) => {
    try {


        if (!item.isFavorite) {
            console.log('фаваю!')

            const obj = {
                item_id: item.id
            }

            const { data } = await axios.post('https://631e7636e485f763.mokky.dev/favorites', obj)

            item.isFavorite = true
            item.favoriteId = data.id

            console.log(data)
        } else {
            console.log('анфаваю...!')

            await axios.delete(`https://631e7636e485f763.mokky.dev/favorites/${item.favoriteId}`)
            item.isFavorite = false
            item.favoriteId = null
        }
    } catch (error) {
        console.log(error)
    }
}

// провайды
provide('addToFavs', addToFavs)
provide('fetchFavs')

const slides = [
    '/slider.png',
    '/slider.png',
    '/slider.png',
]


// на маунте
onMounted(async () => {
    await fetchItems();
    await fetchFavs();
})
</script>


<template>
    <carousel>
        <slide v-for="(slide, index) in slides" :key="index">
            <img :src="slide" alt="Slide image">
        </slide>
        <template #addons>
            <navigation />
        </template>
    </carousel>

    <div class="head-bar my-10">
        <h2 class="text-3xl font-bold">Все кроссовки</h2>

        <div class="search-bar relative">
            <img src="/search.svg" alt="search" class="absolute top-3 left-4">
            <input @input="onChangeSearch" type="text"
                class="border rounded-md py-2 pl-10 pr-4 outline-none focus:border-gray-400">
        </div>
    </div>

    <CardList :items="items" />
</template>

<style scoped>
.head-bar {
    display: flex;
    justify-content: space-between;
}
</style>