<script setup>
// import Json data
import q from "./data/quizes.json";

import { ref, watch, watchEffect } from "vue";
import Card from "./components/Card.vue";
import Header from "./components/Header.vue";

const quizzes = ref(q);

watchEffect(() => {
  console.log('quizzes:', quizzes.value);
  console.log('q:', q.value);
});
</script>
<template>
    <div class="container">
      <Header :quizzes="quizzes" :q="q"/>
        <!--      Cards container-->
        <div class="options-container">
          <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
        </div>
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
