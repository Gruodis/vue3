<script setup>
// import Json data
import data from "../data/quizes.json";

// In Vue 3, ref is a function that creates a reactive reference to a value,
// which can be used in the template and in the JavaScript logic of a Vue component.
import { ref } from "vue";
import Card from "../components/CardComponent.vue";

// if you want to modify or update the q data in your Vue component and have those changes be reactive,
// then you would need to create a ref(q).
const quizzes = ref(data);
</script>
<template>
    <!--      Cards container-->
    <div class="options-container">
        <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    @apply max-w-[1000px] mx-auto my-12 #{!important};
    header {
        @apply flex items-center my-5 justify-between;
        h1 {
            @apply font-semibold text-gray-50 text-5xl drop-shadow;
        }
        input {
            @apply rounded py-2 px-2.5;
        }
    }
    .options-container {
        @apply grid grid-cols-3 gap-3;
    }
}
</style>
