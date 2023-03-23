<script setup>
import { ref, watch, defineProps } from "vue";

const { quizzes, q } = defineProps(["quizzes", "q"]);
const search = ref("");



watch(search, () => {
  console.log(`woooo`, quizzes.value, `booo`, q.value);

  quizzes.value = q.filter(

      quiz => quiz.name
          .toLowerCase()
          .includes(
              search.value.toLowerCase()
          )
  )
})
</script>

<template>
  <header>
    <div>
      <h1>Quiz App</h1>
      <span class="mt-3 text-18px text-gray-50"> Our Quiz has {{ q.length }} categories to choose from </span>
    </div>

    <!--  use v-model to add two way binding with default value Empty string from previously declared variable -->
    <input v-model="search" type="text" placeholder="Search for Quiz.." />
  </header>
</template>