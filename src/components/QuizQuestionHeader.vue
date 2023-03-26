<script setup>
import { defineProps } from "vue";
const { questionProgress, progressBar } = defineProps(["questionProgress", "progressBar"]);
console.log(`ssss`, questionProgress, progressBar);
</script>
<template>
    <header class="text-center py-5 text-5xl text-amber-300">
        <h4>{{ questionProgress }}</h4>
        <div class="bar">
            <div class="progress" :style="{width: progressBar}"></div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
.bar {
    @apply w-1/2 border rounded-md border-blue-300 h-4 mx-auto mt-3;
    .progress {
        @apply h-full w-0 bg-lime-500;
    }
}
</style>
