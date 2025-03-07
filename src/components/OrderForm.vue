<script>
</script>
<template>
    <div class="fixed inset-0 bg-opacity-50 bg-black z-10 flex items-center justify-center">
        <form
            class="m-auto relative top-0 right-0 left-0 request-form gap-3 flex flex-col z-20 fixed form border-b border-grey p-5 bg-white w-300">
            <h2 class="text-xl font-bold">Заявка на доставку</h2>
            <input type="text" placeholder="*ФИО">
            <input type="text" placeholder="*Телефон">
            <input type="text" placeholder="*Адрес доставки">
            <textarea placeholder="Комментарий"></textarea>
            <button class="submit-btn btn"> Отправить</button>
        </form>
    </div>
</template>

<script>
export default {

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