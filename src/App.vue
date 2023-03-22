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
// generate random light color function
function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 80%, 75%)";
}

// Composition API Solution
import { ref, watch } from "vue"; //export functions from Vue as you need them

const showModal = ref(false); //declare showModal boolean state

const newNote = ref(""); //declare newNote state = '' = empty
const notes = ref([]); //declare empty array to store notes

let storeId = ref(101); //declare storeId with default num value

//watch for changes in newNote and invoke function checkError
watch(newNote, () => {
    checkError();
});

//declare function addNote to store object with properties
const addNote = () => {
    // Check if text is entered
    if (newNote.value.length < 10) {
        return;
    }
    // push object to array "notes"
    notes.value.push({
        id: storeId.value++,
        text: newNote.value,
        date: new Date(),
        bgColor: getRandomColor(),
    });


  notes.value.forEach(note => {
    console.log("#" + note.id, note.text);
  });

    //clear states
    showModal.value = false;
    newNote.value = "";
    errorMsg.value = "";
    disableBtn.value = true;
};


const errorMsg = ref("");
const disableBtn = ref(true);

// declare isError with default value - true
let isError = ref(true);

//declare function checkError
const checkError = () => {
  //change isError true/false depending on number of characters entered in textarea
  isError = newNote.value.length < 10;
  console.log(isError);

  errorMsg.value = isError ? `Text must be 10 characters at least, now is: ${newNote.value.length}` : ``;

  // check docs for conditional classes to solve this:
  // errorClass.value = isError ? 'text-red-400' : 'text-green-600';
  // disableClass.value = isError ? 'bg-gray-300 bg-opacity-50 pointer-event' : '';

  disableBtn.value = isError;
};

//invoke checkError function on first run
checkError();
</script>

<template>
    <main>
        <div v-if="showModal" class="overlay" @click="showModal = false">
            <!--  @click.stop prevent the click event from propagating  -->
            <div class="modal text-black" @click.stop>
                <!--  Close modal on click -->
                <p @click="showModal = false">x</p>

                <span :class="{ 'text-red-400': isError, 'text-green-500': !isError }"
                    >{{ newNote }} {{ errorMsg }}</span
                >

                <!--  Two way binding with v-model and remove unused spaces with "trim" -->
                <textarea v-model.trim="newNote" />

                <!--  Error message -->
                <div class="min-h-[24px] my-5 text-right">
                    <p :class="{ 'text-red-400 !text-14px': isError, 'text-green-500': !isError }">
                        {{ errorMsg }}
                    </p>
                </div>

                <!--  Submit button -->
                <button
                    :class="{ 'bg-gray-300 bg-opacity-50': isError, '': !isError }"
                    @click="addNote"
                    :disabled="isError"
                >
                    Add Note
                </button>
            </div>
        </div>

        <!--  Display notes from array -->
        <div class="container">
            <header>
                <h1>Notes {{ storeId - 101 }}</h1>
                <button class="hover:bg-blue-500" @click="showModal = true">+</button>
            </header>
            <div class="cards-container">
                <!--  iterate through array "notes" to display each note -->
                <div
                    v-for="note in notes"
                    :key="note.id"
                    class="card text-black"
                    :style="{ backgroundColor: note.bgColor }"
                >
                    <p class="text-22px font-semibold">#{{ note.id }}</p>
                    <p class="main-text">{{ note.text }}</p>
                    <p class="date">{{ note.date.toLocaleDateString("lt-LT") }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
}
h1 {
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 75px;
}
.card {
    width: 225px;
    height: 225px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
}
.main-text {
    @apply text-16px;
}
.date {
    @apply text-12px;
    margin-top: auto;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header button {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(21, 20, 20);
    border-radius: 1000px;
    color: white;
    font-size: 20px;
}
.cards-container {
    display: flex;
    flex-wrap: wrap;
}
.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
}
main {
    height: 100vh;
    width: 100vw;
    align-items: flex-start;
}
.modal {
    width: 750px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
}
.modal button {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    border: none;
    @apply text-gray-500;
}
.modal button:not([disabled]) {
    background-color: blueviolet;
    color: white;
    cursor: pointer;
}
.modal p {
    margin-left: auto;
    font-size: 20px;
    z-index: 100000;
    cursor: pointer;
}
textarea {
    width: 100%;
    height: 200px;
    padding: 5px;
    font-size: 20px;
}
</style>
