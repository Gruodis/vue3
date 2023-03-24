<script setup>
import { defineProps } from "vue";
const props  = defineProps(["progress"]);
console.log(`ssss`, { props });
</script>
<template>
    <header class="text-center py-5 text-5xl text-amber-300">
        <h4>{{ props }}</h4>
        <div class="bar">
            <div class="progress"></div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
.bar {
    @apply w-1/2 border rounded-md border-blue-300 h-4 mx-auto mt-3;
    .progress {
        @apply h-full w-1/2 bg-lime-500;
    }
}
</style>
