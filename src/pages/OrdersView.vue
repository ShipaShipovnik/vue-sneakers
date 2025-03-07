<script setup>
import Card from '../components/Card.vue';
import CardList from '../components/CardList.vue';

const hasItems = false
</script>

<template>
    <h2 class="text-3xl font-bold mb-10">Заказы</h2>

    <CardList v-if="hasItems" />

    <!-- заглушка -->
    <div v-else class="flex-1 flex flex-col items-center justify-center mt-1">
        <div class="text-center">
            <img src="/sad-face.png" alt="sad-face" class="sad-face-img mb-5 mx-auto" />
            <h2 class="text-3xl font-bold mb-3">У вас нет заказов</h2>
            <p class="text-stone-500">Вы нищеброд?<br />Оформите хотя бы один заказ.</p>
            <router-link to="/">
                <button class="go-back-btn btn mt-10">
                    <img src="/back-arrow.svg" alt="back">
                    Вернуться назад
                </button>
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>
