// Define routing rules

import {createRouter, createWebHistory} from "vue-router"

// import pages
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue"
import QuizPage from "../views/QuizPage.vue";
import QuestionsPage from "../views/QuestionsPage.vue";
import NotFound from "../views/404Page.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    // define routes
    routes: [
        {
            path: "/", // root directory
            name: "home",
            component: HomePage // page template for path
        },
        {
            path: "/home", // redirect to root if url is "/home"
            redirect: "/",
        },
        {
            path: "/about", // directory
            name: "about",
            component: AboutPage // page template for path
        },

        // dynamic links
        {
            path: '/quiz/:id',
            name: "quiz",
            component: QuizPage,
            children: [
                {
                    path: "questions",
                    component: QuestionsPage
                }
            ]
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFound
        }

    ]
})

export default router