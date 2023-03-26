<script setup>
import { defineProps } from "vue";
const props = defineProps(["quizResults", "totalQuestions"]);
</script>
<template>
    <div class="text-center text-32px">Results</div>
    <h1 class="text-center text-5xl">{{ props.quizResults }}/{{ props.totalQuestions }}</h1>
</template>
