<template>
    <div v-if="items.length === 0" class="flex-1 flex flex-col items-center justify-center mt-1">
        <div class="text-center">
            <img src="/sad-face.png" alt="sad-face" class="sad-face-img mb-5 mx-auto" />
            <h2 class="text-3xl font-bold mb-3">Кедов нет.</h2>
            <p class="text-stone-500">Подождите новую партию или измените поисковой запрос.</p>
        </div>
    </div>
    <div v-else class="card-list justify-center md:justify-start ">
        <Card v-for="item in items" :key="item.id" :id="item.id" :imageUrl="item.imageUrl" :title="item.title"
            :price="item.price" :isFavorite="item.isFavorite" :onClickFavs="() => onClickFavs(item)" />
    </div>
    <CardPagination :currentPage="currentPage" :totalPages="totalPages" @page-change="$emit('page-change', $event)" />
</template>

<script setup>
import Card from './Card.vue';
import CardPagination from './CardPagination.vue';

defineProps({
    items: Array,
    onClickFavs: Function,
    currentPage: Number,
    totalPages: Number,
})

defineEmits(['page-change'])
</script>

<style scoped>
.card-list {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    gap: 40px;
    justify-items: center;

}

@media (min-width: 1024px) {
    .card-list {
        grid-template-columns: repeat(auto-fit, 210px);
    }
}
</style>