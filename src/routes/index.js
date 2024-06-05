import { createRouter, createWebHistory } from "vue-router"
import TaskFirst from "@/views/TaskFirst.vue";
import TaskSecond from "@/views/TaskSecond.vue";
import TaskThird from "@/views/TaskThird.vue";

// all three routes for three tasks
const routes = [
    { path: '/', component: TaskFirst },
    { path: '/two', component: TaskSecond },
    { path: '/three', component: TaskThird },
]


export const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});