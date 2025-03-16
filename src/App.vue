<script setup>
import { ref, provide } from 'vue';

import Header from './components/Header.vue';
import OrderForm from './components/OrderForm.vue';
import Toast from './components/Toast.vue';


// тост=========================
const toastMessage = ref('')
const toastType = ref('success')

function showToast(message, type = 'success') {
  toastMessage.value = message
  toastType.value = type

  // очистка соо
  setTimeout(() => {
    toastMessage.value = ''
  }, 3000)
}

provide('toast', {
  showToast,
})

// модальное окно формы===================
const isModalOpen = ref(false)
const selectedItem = ref(null)

function openModal(item) {
  selectedItem.value = item
  isModalOpen.value = true
}

function closeModal() {
  selectedItem.value = null
  isModalOpen.value = false
}

provide('modal', {
  isModalOpen,
  openModal,
  closeModal,
  selectedItem,
});
</script>

<template>
  <Toast v-if="toastMessage" :message='toastMessage' :type="toastType" />
  <OrderForm v-if="isModalOpen" @close="closeModal" :item=selectedItem />
  <div class="wrapper bg-white rounded-xl shadow-xl">
    <Header />
    <div class="p-3 sm:p-10 flex flex-col box-border h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 50px 5vw 0 5vw;
}
</style>
