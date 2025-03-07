<script setup>
import Header from './components/Header.vue';
// import OrderForm from './components/OrderForm.vue';

// const showOrderWin = {

// }

</script>

<template>
  <!-- <OrderForm /> -->
  <div class="wrapper bg-white rounded-xl shadow-xl">
    <Header />
    <div class="p-10 flex flex-col box-border h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 50px 85px 0 85px;
}
</style>
