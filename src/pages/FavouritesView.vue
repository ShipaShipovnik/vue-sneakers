<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';


import Card from '../components/Card.vue';
import CardList from '../components/CardList.vue';

const favorites = ref([])

const fetchFavs = async () => {
    try {
        const { data } = await axios.get('https://631e7636e485f763.mokky.dev/favorites?_relations=items')
        favorites.value = data.map(fav => fav.item)
        console.log(favorites.value)

    } catch (err) {
        console.log(err)
    }
}
onMounted(fetchFavs)
</script>

<template>
    <h2 class="text-3xl font-bold mb-10">Избранное</h2>

    <!-- заглушка -->
    <div v-if="favorites.length === 0" class="flex-1 flex flex-col items-center justify-center mt-1">
        <div class="text-center">
            <img src="/sad-face-2.png" alt="sad-face" class="mb-5 mx-auto" />
            <h2 class="text-3xl font-bold mb-3">Избранных товаров нет :(</h2>
            <p class="text-stone-500">Вы ничего не добавляли в избранное.</p>
            <button class="go-back-btn btn mt-10">Вернуться назад</button>
        </div>
    </div>

    <CardList :items="favorites" v-else />
</template>

<style scoped>
img {
    width: 70px;
}
</style>
