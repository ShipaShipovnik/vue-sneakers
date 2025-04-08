<template>
    <div
        class="card relative border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition">

        <div class="fav-btn absolute top-8 left-8" @click="onClickFavs">
            <!-- по умолчанию -->
            <svg v-if="!isFavorite" width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" fill="white" stroke="#F8F8F8" />
                <path
                    d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z"
                    stroke="#EAEAEA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <!-- фавнутая -->
            <svg v-else width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="7" fill="#FEF0F0" />
                <path
                    d="M22.5849 12.2231C22.3615 11.7098 22.0394 11.2446 21.6365 10.8537C21.2333 10.4615 20.758 10.1499 20.2363 9.93576C19.6954 9.7128 19.1152 9.59868 18.5295 9.60002C17.7077 9.60002 16.906 9.82329 16.2092 10.245C16.0425 10.3459 15.8842 10.4567 15.7342 10.5775C15.5841 10.4567 15.4258 10.3459 15.2591 10.245C14.5624 9.82329 13.7606 9.60002 12.9388 9.60002C12.3471 9.60002 11.7737 9.71248 11.232 9.93576C10.7086 10.1508 10.2369 10.46 9.83181 10.8537C9.42843 11.2442 9.10619 11.7095 8.88337 12.2231C8.65168 12.7573 8.53333 13.3246 8.53333 13.9084C8.53333 14.4592 8.64668 15.0331 8.8717 15.6169C9.06006 16.1048 9.33009 16.6109 9.67513 17.122C10.2219 17.9307 10.9736 18.7742 11.9071 19.6293C13.4539 21.0467 14.9857 22.0258 15.0507 22.0655L15.4458 22.3169C15.6208 22.4277 15.8458 22.4277 16.0209 22.3169L16.4159 22.0655C16.4809 22.0242 18.0111 21.0467 19.5596 19.6293C20.493 18.7742 21.2448 17.9307 21.7915 17.122C22.1366 16.6109 22.4083 16.1048 22.5949 15.6169C22.82 15.0331 22.9333 14.4592 22.9333 13.9084C22.935 13.3246 22.8166 12.7573 22.5849 12.2231Z"
                    fill="#FF8585" />
            </svg>
        </div>


        <img :src="imageUrl" alt="Sneaker" class="w-full">
        <p>{{ title }}</p>


        <div class="card_bottom mt-5">
            <div class="price flex flex-col">
                <span class="text-slate-400">ЦЕНА:</span>
                <b>{{ price }} руб.</b>
            </div>
            <!-- <img src="/plus.svg" alt="plus"> -->
            <svg class="add-btn" @click="onClickAdd" width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                <path
                    d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
                    fill="#D3D3D3" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps({
    id: Number,
    imageUrl: String,
    isFavorite: Boolean,
    title: String,
    price: Number,
    onClickFavs: Function,
})

const { openModal } = inject('modal')

function onClickAdd() {
    const item = {
        id: props.id,
        title: props.title,
        price: props.price,
        imageUrl: props.imageUrl,
    }
    openModal(item)
}
</script>

<style>
.card {
    width: 100%;
    max-width: 320px;
    display: flex;
    flex-wrap: wrap;
}

.card_bottom {
    align-self: flex-end;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: end;
}

.fav-btn {
    transition: all 0.5s ease-in-out;
}

.fav-btn svg {
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
}

.fav-btn:hover svg path {
    fill: rgb(255, 133, 133, 50%);
    stroke: rgb(255, 133, 133, 50%);
}

.fav-btn:hover svg rect {
    fill: rgb(254, 240, 240, 50%);
    stroke: rgb(254, 240, 240, 50%);
}

.add-btn {
    transition: all 0.5s ease-in-out;
}

.add-btn:hover path {
    fill: rgb(1, 1, 1, 50%);
    stroke: rgb(1, 1, 1, 50%);
}

.add-btn:hover rect {
    fill: rgb(137, 240, 156, 50%);
    stroke: rgb(137, 240, 156, 50%);
}
</style>