<script setup>
import QuestionHeader from "../components/QuizQuestionHeader.vue";
import Question from "../components/QuizQuestionComponent.vue";

import { ref } from "vue";
import { useRoute, useRouter, RouterView } from "vue-router";

import quizzes from "../data/quizes.json";

const route = useRoute(); // use to get link param
const router = useRouter(); // use to mutate link

const quizId = parseInt(route.params.id);

const quiz = quizzes.find((q) => q.id === quizId);

// get current question Index to display just one question
const questionIndex = ref(0);
// display quiz progress question/questions
const progressBar = `${questionIndex.value}/${quiz.questions.length}`;

const displayQuestions = () => {
    if (quizId === 4) return;
    router.push(`/quiz/${quizId}/questions`);
};

console.log(route.params, `index`, quiz.questions[0]);
</script>

<template>
    <div v-if="quiz" class="border-amber-50 bg-blue-50">
        <div>
            <!--            <QuestionHeader />  -->
          <QuestionHeader :progress="progressBar"/>
            <div>
                <!--  set prop ":questionIndex" and pass index-->
                <Question :question="quiz.questions[questionIndex]" />
            </div>
        </div>
        <!--    on click update url to show question-->
        <button v-if="quizId !== 4" @click="displayQuestions">Show</button>
        <RouterView />
    </div>
    <div v-else>
        <h2>404 Page not found</h2>
    </div>
</template>

<style lang="scss" scoped>
.bar {
    @apply w-1/2 border rounded-md border-blue-300 h-4 mx-auto mt-3;
    .progress {
        @apply h-full w-1/2 bg-lime-500;
    }
}
</style>
