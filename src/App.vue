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
// generate random light color
function getRandomColor() {
  const color = "hsl(" + Math.random() * 360 + ", 80%, 75%)";
  return color;
}

// Composition API Solution
import { ref } from "vue";
const showModal = ref(false)

const newNote = ref('') // for two way binding, state = '' = empty
const notes = ref([]) // empty array to store notes


let storeId = ref(101);
const errorMsg = ref("");
const addNote = () => {
  // Check if text is entered
  if(newNote.value.length < 10) {
    return errorMsg.value = "Text must be 10 character at least, now is: ";
  }
  // push object to array "notes"
  notes.value.push({
    id: storeId.value++,
    text: newNote.value,
    date: new Date(),
    bgColor: getRandomColor()
  })
  showModal.value = false;
  newNote.value = "";
  errorMsg.value = "";
}

</script>

<template>
  <main>
    <div v-if="showModal" class="overlay" @click="showModal = false">

      <!--  prevent the click event from propagating  -->
      <div class="modal text-black"  @click.stop>
        <p @click="showModal = false">x</p>
        <span>{{newNote}}</span>

        <!--  Two way binding with v-model and remove unused spaces with "trim" -->
        <textarea v-model.trim="newNote"/>

        <p v-if="errorMsg" class="text-red-400 my-5 !text-14px"> {{ errorMsg }} </p>
        <button @click="addNote">Add Note</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes {{ storeId - 101 }}</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <!--  iterate through array "notes" to display each note -->
        <div v-for="note in notes" :key="note.id" class="card text-black" :style="{backgroundColor: note.bgColor}">
          <p class="main-text">{{ note.id }}</p>
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
  margin: 0 auto
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
  line-height: 1.25;
  font-size: 17.5px;
  font-weight: bold;
}
.date {
  font-size: 12.5px;
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
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
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
