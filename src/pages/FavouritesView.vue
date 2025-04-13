<script setup>
import { useItems } from '@/useItems';
import { onMounted } from 'vue';

import CardList from '@/components/CardList.vue';
import SkeletonCard from '@/components/SkeletonCard.vue';

const { favoriteItems, fetchItems, fetchFavorites, toggleFavorite, isLoading } = useItems()

// на маунте
onMounted(async () => {
    await fetchItems();
    await fetchFavorites();
})
</script>

<template>
    <section>
        <h2 class="text-3xl font-bold mb-10 w-full text-center sm:text-left">Избранное</h2>
        <!-- загрузка -->
        <div v-if="isLoading" class="skeleton-list">
            <SkeletonCard v-for="n in 4" :key="'skeleton-' + n" />
        </div>

        <!-- нету -->
        <div v-else-if="favoriteItems.length === 0" class="flex-1 flex flex-col items-center justify-center mt-1">
            <div class="text-center">
                <img src="/sad-face-2.png" alt="sad-face" class="sad-face-img mb-5 mx-auto" />
                <h2 class="text-3xl font-bold mb-3">Избранных товаров нет :(</h2>
                <p class="text-stone-500">Вы ничего не добавляли в избранное.</p>
                <router-link to="/">
                    <button class="go-back-btn btn mt-10">
                        <img src="/back-arrow.svg" alt="back">
                        Вернуться назад
                    </button>
                </router-link>
            </div>
        </div>

        <CardList :items="favoriteItems" :isLoading="isLoading" :onClickFavs="toggleFavorite" v-else />
    </section>
</template>

<style scoped>
.skeleton-list {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    justify-content: center;
    gap: 40px;

}

@media (min-width: 1024px) {
    .skeleton-list {
        grid-template-columns: repeat(auto-fit, 210px);
    }
}
</style>
