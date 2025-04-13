<template>
    <div class="card relative border border-slate-100 rounded-3xl p-8 cursor-pointer">
        <!-- Избранное (заглушка) -->
        <div class="fav-btn absolute top-8 left-8">
            <div class="w-8 h-8 bg-gray-100 rounded-md"></div>
        </div>

        <!-- Изображение (заглушка) -->
        <div class="w-full h-48 bg-gray-100 rounded-xl mb-4"></div>

        <!-- Заголовок (заглушка) -->
        <div class="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
        <div class="h-4 bg-gray-100 rounded w-1/2"></div>

        <!-- Цена (заглушка) -->
        <div class="card_bottom mt-5">
            <div class="price flex flex-col">
                <div class="h-3 bg-gray-100 rounded w-1/3 mb-2"></div>
                <div class="h-5 bg-gray-100 rounded w-1/2"></div>
            </div>
            <!-- Кнопка (заглушка) -->
            <div class="w-8 h-8 bg-gray-100 rounded-md"></div>
        </div>
    </div>
</template>


<style scoped>
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

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }
}

div[class^='h-'] {
    animation: pulse 1.5s ease-in-out infinite;
}
</style>