<script setup>
import { defineProps, defineEmits, watch } from "vue";
const emit = defineEmits(["selectOption"]);
const props = defineProps(["question"]);

const emitOption = (isCorrect) => {
    emit("selectOption", isCorrect);
};

console.log(props);
</script>
<template>
    <h2 class="text-32px">{{ props.question.text }} ?</h2>
    <ul class="answers my-5">
        <!-- on @click pass parameters to function "emitOption" -->
        <li
            @click="emitOption(option.isCorrect)"
            v-for="option in props.question.options"
            :key="option.id"
            :id="'question-' + option.id"
            class="flex items-center gap-3 text-22px"
        >
            <div class="p-3 text-gray-50 bg-blue-500 basis-[40px]">{{ option.label }}</div>
            <span>{{ option.text }} {{ option.isCorrect }}</span>
        </li>
    </ul>
</template>
