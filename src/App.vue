<script setup>
// import Json data
import q from "./data/quizes.json";

// import page
import { RouterView } from "vue-router";

// In Vue 3, ref is a function that creates a reactive reference to a value,
// which can be used in the template and in the JavaScript logic of a Vue component.
import { ref, watch } from "vue";
import Card from "./components/Card.vue";
import Navigation from "./components/Navigation.vue";

// if you want to modify or update the q data in your Vue component and have those changes be reactive,
// then you would need to create a ref(q).
const quizzes = ref(q);

const search = ref("");

// constantly watch for changes in search field
// This part of the code is a Vue 3 setup script
// that defines a reactive data variable named quizzes using the ref function.
// The quizzes variable is initially set to the
// value of a JSON object q imported from a file named quizes.json.

// The script also defines another reactive variable named search using the ref function,
// which represents a search query input by the user in the frontend.
// The watch function is used to monitor any changes to the search variable,
// and update the quizzes variable accordingly.

// The magic happens in the watch function,
// which executes a filtering function on the q data and assigns the filtered result to the quizzes variable using quizzes.value.
// Specifically, the filtering function uses the filter method on the q array,
// which creates a new array of all the elements that pass a certain condition.

// In this case, the condition is a callback function that checks if
// the name property of each quiz object in the q array contains
// the value of the search variable as a substring (ignoring case sensitivity).
// If a quiz object meets this condition, it is included in the new array assigned to quizzes.

// By assigning the filtered result to quizzes.value,
// the Vue reactive system detects the change in the value of quizzes
// and updates any components that use this variable in their template or JavaScript logic,
// re-rendering them with the new filtered data.
// This allows for a dynamic and reactive user interface that responds to user input in real time.
watch(search, () => {
    console.log(`woooo`);

    quizzes.value = q.filter(
        // This is a callback function used as an argument
        // to the filter() method. It takes an argument quiz,
        // which represents a single object in the q array.
        (quiz) => quiz.name.toLowerCase().includes(search.value.toLowerCase())
        // The function uses the toLowerCase() method to convert the name property of the quiz object to lowercase,
        // and then checks if the lowercase name property includes the lowercase value of the search variable as a substring.

        // If the name property of the quiz object contains the search query (ignoring case sensitivity),
        // then the function returns true,
        // and the quiz object is included in the filtered result.
        // If not, the function returns false, and the quiz object is excluded from the filtered result.
    );
});
</script>
<template>
    <!--  RouterView - Render page content based on route (path)-->
    <RouterView />
    <div class="container">
        <!--      {{q}}-->
        <header>
            <div>
                <h1>Quiz App</h1>
                <span class="mt-3 text-18px text-gray-50"> Our Quiz has {{ q.length }} categories to choose from </span>
            </div>

          <div>
            <!--  use v-model to add two way binding with default value Empty string from previously declared variable -->
            <input v-model="search" type="text" placeholder="Search for Quiz.." />
            <Navigation />
          </div>

        </header>

        <!--      Cards container-->
        <div class="options-container">
            <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    @apply max-w-[1000px] mx-auto my-12 #{!important};
    header {
        @apply flex items-center my-5 justify-between;
        h1 {
            @apply font-semibold text-gray-50 text-5xl drop-shadow;
        }
        input {
            @apply rounded py-2 px-2.5;
        }
    }
    .options-container {
        @apply grid grid-cols-3 gap-3;
    }
}
</style>
