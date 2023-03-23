<script setup>
import {useRoute, useRouter, RouterView} from "vue-router"

import quizzes from "../data/quizes.json"

const route = useRoute() // use to get link info
const router = useRouter() // use to mutate link

const quizId = parseInt(route.params.id)

const quiz = quizzes.find(q => q.id === quizId )

const displayQuestions = () => {
  if(quizId === 4)
    return;
  router.push(`/quiz/${quizId}/questions`);
}


console.log(route.params)
</script>

<template>
  <div v-if="quiz">
    <h1>Single page</h1>
    {{quiz.name}}
    <div v-for="question in quiz.questions" :key="quiz.questions.id">
      {{question.id}}
    </div>
<!--    on click update url to show qoestion-->
    <button v-if="quizId !== 4" @click="displayQuestions">Show</button>
    <RouterView/>
  </div>
  <div v-else>
    <h2>404 Page not found</h2>
  </div>
</template>