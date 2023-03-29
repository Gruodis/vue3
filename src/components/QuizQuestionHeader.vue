<script setup>
import { defineProps, toRefs, watch } from "vue";

const props = defineProps(["questionProgressX", "progressBarX"]);

// you need toRefs() if you want to destruct properly without loosing reactivity
// const { questionProgress, progressBar } = toRefs(props);

console.log(`ssss`, props.questionProgress, props.progressBar);
watch(
    () => props.questionProgress,
    (example) => {
        console.log(`aa`, example);
    }
);
</script>
<template>
    <header class="text-center py-5 text-5xl text-amber-300">
        <h4>{{ questionProgressX }}</h4>
        <div class="bar">
            <div class="progress" :style="{ width: progressBarX }"></div>
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
