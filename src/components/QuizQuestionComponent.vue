<script setup>
import { defineProps } from "vue";
const props = defineProps(["question"]);
console.log(props);
</script>
<template>
    <h2 class="text-32px">{{ props.question.text }} ?</h2>
    <ul class="answers my-5">
        <li v-for="option in props.question.options" :key="option.id" class="flex items-center gap-3 text-22px">
            <div class="p-3 text-gray-50 bg-blue-500 basis-[40px]">{{ option.label }}</div>
            <span>{{ option.text }}</span>
        </li>
    </ul>
</template>
