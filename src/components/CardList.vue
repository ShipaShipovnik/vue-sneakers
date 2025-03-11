<template>
    <div v-if="items.length === 0" class="flex-1 flex flex-col items-center justify-center mt-1">
        <div class="text-center">
            <img src="/sad-face.png" alt="sad-face" class="sad-face-img mb-5 mx-auto" />
            <h2 class="text-3xl font-bold mb-3">Кедов нет.</h2>
            <p class="text-stone-500">Подождите новую партию или измените поисковой запрос.</p>
        </div>
    </div>
    <div v-else class="card-list">
        <Card v-for="item in items" :key="item.id" :id="item.id" :imageUrl="item.imageUrl" :title="item.title"
            :price="item.price" :isFavorite="item.isFavorite" :onClickFavs="() => addToFavs(item)" />
    </div>
</template>

<script setup>
import Card from './Card.vue';
import { inject } from 'vue';

defineProps({
    items: Array,
})

const addToFavs = inject('addToFavs')
</script>

<style scoped>
.card-list {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 40px;
    justify-content: center;
}

@media (min-width: 1024px) {
    .card-list {
        grid-template-columns: repeat(auto-fit, 210px);
    }
}
</style>