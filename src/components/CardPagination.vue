    <template>
        <nav class="card-pagination">
            <ul class="inline-flex flex -sace-x-px text-sm">
                <li>
                    <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg ">Назад</button>
                </li>
                <li v-for="page in pages" :key="page">
                    <button @click="goToPage(page)"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ">
                        {{ page }}
                    </button>
                </li>
                <li>
                    <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg ">Далее</button>
                </li>
            </ul>
        </nav>
    </template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    currentPage: {
        type: Number,
        required: true,
    },
    totalPages: {
        type: Number,
        required: true,
    }
})

const emit = defineEmits(['page-change'])

const pages = computed(() => {
    const pagesArray = []
    for (let i = 1; i <= props.totalPages; i++) {
        pagesArray.push(i)
    }
    return pagesArray
})

function goToPage(page) {
    if (page >= 1 && page <= props.totalPages) {
        emit('page-change', page)
    }
}

</script>

<style scoped>
.card-pagination {
    width: 100%;
    text-align: center;
}
</style>