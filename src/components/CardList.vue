<template>
    <!-- загрузка -->
    <div v-if="isLoading" class="card-list">
        <SkeletonCard v-for="n in skeletonCount" :key="'skeleton-' + n" />
    </div>
    <!-- нет товаров -->
    <div v-else-if="items.length === 0" class="flex-1 flex flex-col items-center justify-center mt-1">
        <div class="text-center">
            <img src="/sad-face.png" alt="sad-face" class="sad-face-img mb-5 mx-auto" />
            <h2 class="text-3xl font-bold mb-3">Кедов нет.</h2>
            <p class="text-stone-500">Подождите новую партию или измените поисковой запрос.</p>
        </div>
    </div>
    <div v-else class="card-list ">
        <Card v-for="item in items" :key="item.id" :id="item.id" :imageUrl="item.imageUrl" :title="item.title"
            :price="item.price" :isFavorite="item.isFavorite" :onClickFavs="() => onClickFavs(item)" />
    </div>
    <!-- <CardPagination :currentPage="currentPage" :totalPages="totalPages" @page-change="$emit('page-change', $event)" /> -->
</template>

<script setup>
import Card from './Card.vue';
// import CardPagination from './CardPagination.vue';
import SkeletonCard from './SkeletonCard.vue';
import { computed, onMounted, ref } from 'vue';

defineProps({
    items: Array,
    isLoading: Boolean,
    onClickFavs: Function,
    // currentPage: Number,
    // totalPages: Number,
})

const skeletonCount = computed(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) return 2;
    if (screenWidth < 768) return 3;
    if (screenWidth < 1024) return 4;
    return 6;
});

const isFirstLoad = ref(true);

onMounted(() => {
    isFirstLoad.value = false;
});
// defineEmits(['page-change'])
</script>

<style scoped>
.card-list {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    justify-content: center;
    gap: 40px;

}

@media (min-width: 1024px) {
    .card-list {
        grid-template-columns: repeat(auto-fit, 210px);
    }
}
</style>