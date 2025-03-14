<script setup>
import { useItems } from '@/useItems';
import { onMounted } from 'vue';

import CardList from '@/components/CardList.vue';

const { favoriteItems, fetchItems, fetchFavorites, toggleFavorite } = useItems()

// на маунте
onMounted(async () => {
    await fetchItems();
    await fetchFavorites();
})
</script>

<template>
    <section>
        <h2 class="text-3xl font-bold mb-10 w-full text-center sm:text-left">Избранное</h2>
        <!-- заглушка -->
        <div v-if="favoriteItems.length === 0" class="flex-1 flex flex-col items-center justify-center mt-1">
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

        <CardList :items="favoriteItems" :onClickFavs="toggleFavorite" v-else />
    </section>
</template>

<style scoped></style>
