<template>
    <div v-if="isVisible" :class="['toast', `toast--${type}`]">
        {{ message }}
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    message: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'success',
    },
    duration: {
        type: Number,
        default: 5000,
    },
})

const isVisible = ref(false)

const hideToast = () => {
    setTimeout(() => {
        isVisible.value = false
    }, props.duration)
}

watch(
    () => props.message,
    (newMessage) => {
        if (newMessage) {
            isVisible.value = true
            hideToast()
        } else {
            isVisible.value = false
        }
    },
    { immediate: true }
)
</script>

<style>
.toast {
    position: fixed;
    /* width: min-content; */
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    color: black;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: fadeIn 0.3s ease-in-out;
    background-color: white;
}

.toast--success {
    background-color: #cdf39f;
}

.toast--error {
    background-color: #eb8881;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(-50%) translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
}
</style>