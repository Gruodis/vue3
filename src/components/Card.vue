<script setup>
import { defineProps, ref, watch } from "vue";
import q from "@/data/quizes.json";

const { quiz } = defineProps(["quiz"]);
</script>

<template>
    <!--          Single card-->
    <div class="card">
        <!--  In Vue 3, the colon (:) is used to bind data
  to HTML attributes or props in a shorthand syntax called "v-bind".
  It is a way to dynamically bind values to properties on the Vue instance or component.-->
        <!--  use `:src=""` Vue binding syntax to bind the src attribute to the quiz.img  -->
        <img :src="quiz.img" alt="" />

        <div class="card-text">
            <h2 class="title">{{ quiz.name }}</h2>
            <p>
                {{ quiz.questions.length }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    /* CARDS */
    .card {
        @apply grid gap-3 rounded bg-blue-200 shadow-md p-2;

        img {
            @apply w-full h-full object-cover rounded;
        }
        .card-text {
            @apply mt-3;

            h2 {
                @apply text-24px uppercase font-medium;
            }
        }
    }
}
</style>
