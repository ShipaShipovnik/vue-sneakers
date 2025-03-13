<script>
</script>
<template>
    <div class="fixed inset-0 bg-opacity-50 bg-black z-10 flex items-center justify-center">
        <form @submit.prevent="submitForm"
            class="m-auto relative top-0 right-0 left-0 request-form gap-3 flex flex-col z-20 fixed form border-b border-grey p-5 bg-white w-300">
            <h2 class="text-xl font-bold">Заявка на доставку</h2>
            <div
                class="card relative border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">

                <img :src="item.imageUrl" alt="Sneaker" class="w-full">
                <p>{{ item.title }}</p>


                <div class="card_bottom mt-5">
                    <div class="price flex">
                        <span class="text-slate-400 mr-2">ЦЕНА:</span>
                        <b>{{ item.price }} руб.</b>
                    </div>
                </div>
            </div>

            <input type="text" v-model="formData.name" placeholder="*ФИО" required>
            <input type="text" v-model="formData.address" placeholder="*Телефон" required>
            <input type="text" v-model="formData.phone" placeholder="*Адрес доставки" required>
            <textarea v-model="formData.comment" placeholder="Комментарий"></textarea>
            <button class="submit-btn btn">Заказать</button>
            <button class="btn" @click="emit('close')">Вернуться в каталог</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios';

import Card from './Card.vue';

const props = defineProps({
    item: Object,
})

// эмит закрытия формы
const emit = defineEmits(['close'])

// данные формы
const formData = ref({
    name: '',
    address: '',
    phone: '',
    comment: '',
})

// отправка
async function submitForm() {
    const orderData = {
        ...formData.value,
        item_id: props.item.id,
    };
    console.log('Данные для отправки:', orderData);

    try {
        await axios.post('https://631e7636e485f763.mokky.dev/orders', orderData)

        emit('close')
    } catch (err) {
        console.error('Ошибка отправки заказа', err)
        alert('Ошибка отправки заказа', err)
    }

}

</script>

<style scoped>
.request-form {
    text-align: center;
    border-radius: 30px;
    width: 420px;
}

.request-form input {
    height: 30px;
    border: rgb(0, 0, 0, 30%) 1px solid;
    border-radius: 20px;
    text-align: center;
}

.submit-btn {
    color: white;
    height: 30px;
    background-color: #9DD458;
    border-radius: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
}

.submit-btn:hover {
    background-color: #82b14a;
}

textarea {
    text-align: center;
    min-height: 50px;
    border-radius: 20px;
    border: rgb(0, 0, 0, 30%) 1px solid;
    resize: none;
}
</style>