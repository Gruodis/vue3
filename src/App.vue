<!--

Create click counter with Vue3

-->

<script setup>
import { ref } from "vue";
const count = ref(0); //define state with "ref" and invoke with "()", "ref()" - state defined and invoked
</script>

<template>
    <main>
        <div class="text-32px">
            <h1>Counter with Vue3</h1>
            <h2 class="counter-num">{{ count }}</h2>

            <div class="buttons-container">
                <button id="minus" @click="count--">-</button>
                <button id="plus" @click="count++">+</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
.counter-num {
    text-align: center;
    margin: 1em 0;
}

.buttons-container {
    display: flex;
    justify-content: center;
    gap: 2em;
}

.buttons-container button {
    padding: 6px 12px;
    @apply bg-amber-600;
}
</style>
