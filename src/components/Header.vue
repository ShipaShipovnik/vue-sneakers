<script setup>
</script>

<template>
    <header class="flex justify-between border-b border-slate-300 px-8 py-8">
        <router-link to="/">
            <div class="flex items-center gap-4">
                <img src="/logo.png" alt="Logo" class="w-10 " />
                <div>
                    <h2 class="text-xl font-bold uppercase">VUE КЕДЫ</h2>
                    <p class="text-slate-500">Магазин лучших кроссовок</p>
                </div>
            </div>
        </router-link>
        <ul class="flex items-center gap-10">

            <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black"><img src="/heart.svg"
                    alt="car">
                <router-link to="/favs">Избранное</router-link>
            </li>
            <li class="flex items-center gap-3 cursor-pointer text-gray-500 hover:text-black"><img src="/profile.svg"
                    alt="car">
                <router-link to="/orders">Профиль</router-link>
            </li>
        </ul>
    </header>
</template>

<style scoped></style>
