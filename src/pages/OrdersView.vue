<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

import Card from '../components/Card.vue';
import CardList from '../components/CardList.vue';

const orders = ref([])

const fetchOrders = async () => {
    try {
        const { data } = await axios.get('https://631e7636e485f763.mokky.dev/orders?_relations=items')
        orders.value = data
        console.log(orders)
    } catch (err) {
        console.log('Ошибка запроса заказов', err)
    }
}

onMounted(fetchOrders)
</script>

<template>
    <h2 class="text-3xl font-bold mb-10">Заказы</h2>

    <!-- <div class="card-list">
        <Card v-for="order in orders" :key="order.id" :id="order.id" :imageUrl="order.imageUrl" :title="order.title"
            :price="order.price" :isFavorite="order.isFavorite" :onClickFavs="() => addToFavs(order)" />
    </div> -->

    <div class="orders-list" v-for="order in orders" :key="order.id">
        <div class="w-full bg-white rounded-xl shadow-md overflow-hidden p-4 mb-2">
            <div class="md:flex">
                <div class="md:shrink-0">
                    <img class="h-50 w-full object-cover md:h-full md:w-50" :src="order.item.imageUrl">
                </div>
                <div class="p-8">
                    <div class="uppercase tracking-wide text-sm font-semibold text-green">Номер заказа: №{{ order.id }}
                    </div>
                    <a href="#" class="block mt-1">{{ order.item.title }}
                    </a>
                    <p class="mt-2 text-slate-500"><span class="text-green">ФИО:</span> {{ order.name }}</p>
                    <p class="mt-2 text-slate-500"><span class="text-green">Телефон:</span> {{ order.phone }}</p>
                    <p class="mt-2 text-slate-500"><span class="text-green">Адрес:</span> {{ order.address }}</p>
                    <p class="mt-2 text-slate-500">{{ order.comment }}</p>

                </div>
            </div>
        </div>
    </div>

    <!-- заглушка -->
    <div v-if="orders.length === 0" class="flex-1 flex flex-col orders-center justify-center mt-1">
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

<style scoped>
.orders-list {
    display: flex;
}
</style>
