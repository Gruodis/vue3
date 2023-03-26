<script setup>
import QuestionHeader from "../components/QuizQuestionHeader.vue";
import Question from "../components/QuizQuestionComponent.vue";
import QuizResults from "../components/QuizResults.vue";
// use "computed" to watch for value changes instead of "watch"
import { ref, computed } from "vue";
import { useRoute, useRouter, RouterView } from "vue-router";

import quizzes from "../data/quizes.json";

const route = useRoute(); // use to get link param
const router = useRouter(); // use to mutate link

const quizId = parseInt(route.params.id);

const quiz = quizzes.find((q) => q.id === quizId);

// get current question Index to display just one question
const questionIndex = ref(0);
// display quiz progress question/questions
// const progressBar = ref(`${questionIndex.value}/${quiz.questions.length}`);
// watch(
//     () => questionIndex.value,
//     () => {
//         questionIndex.value = `${questionIndex.value}/${quiz.questions.length}`;
//     }
// );

const questionProgress = computed(() => {
    return `${questionIndex.value}/${quiz.questions.length}`;
});

const progressBar = computed(() => {
    // return string
    return `${(questionIndex.value / quiz.questions.length) * 100}%`;
});
// show results component if quiz finished
const showResults = ref(false);

// keep track of correct answers
const correctAnswers = ref(0);
// function to handel emit event from QuizQuestionComponent
const onOptionSelected = (isCorrect) => {
    console.log(isCorrect);
    if (isCorrect) {
        correctAnswers.value++;
    }
    if (quiz.questions.length - 1 === questionIndex.value) {
        showResults.value = true;
    }
    questionIndex.value++;
};

const displayQuestions = () => {
    if (quizId === 4) return;
    router.push(`/quiz/${quizId}/questions`);
};

// console.log(route.params, `index`, quiz.questions[0], `kk`, progressBar);
</script>

<template>
    <div v-if="quiz" class="border-amber-50 bg-blue-50 rounded-2xl px-8 py-5">
        <div>
          <h1>
            {{ progressBar }} {{ correctAnswers }}
          
        </h1>
            <!--  <QuestionHeader />  -->
            <QuestionHeader v-if="!showResults" :questionProgress="questionProgress" :progressBar="progressBar" />
            <div>
                <!--  set prop ":questionIndex" and pass index-->
                <Question
                    v-if="!showResults"
                    @selectOption="onOptionSelected"
                    :question="quiz.questions[questionIndex]"
                />
                <QuizResults v-else :totalQuestions="quiz.questions.length" :quizResults="correctAnswers" />
            </div>
            <button @click="questionIndex++">nexxts</button>
        </div>
        <!--  on click update url to show question  -->
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
