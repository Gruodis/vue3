<!--

Create click counter with Vue3

In Vue 3, the "ref" function is used to create a reactive reference,
which is an object that contains a single mutable value.
The ref function takes an initial value as its argument and returns an object with a value property that contains the initial value.

In your code, the line const count = ref(0);
creates a reactive reference called count with an initial value of 0.
The count object contains a single property called value,
which can be accessed and modified like a normal JavaScript variable.
-->

<script setup>
const count = ref(0); //define state with "ref" and invoke with "()", "ref()" - state defined and invoked

const substractFromCount = () => {
  count.value = count.value + 1;
}
const addToCount = () => {
  count.value = count.value + 1;
}
</script>

<template>
    <main>
        <div class="text-32px">
            <h1>Counter with Vue3</h1>
            <h2 class="counter-num">{{ count }}</h2>

            <div class="buttons-container">
              <button id="minus" @click="substractFromCount">-</button>
              <button id="plus" @click="addToCount">+</button>
<!--                <button id="minus" @click="count&#45;&#45;">-</button>
                <button id="plus" @click="count++">+</button>
                -->
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
