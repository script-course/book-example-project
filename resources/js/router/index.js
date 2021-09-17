import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import BookOverview from "../pages/books/Overview.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home,
            name: "Home"
        },
        {
            path: "/books",
            component: BookOverview,
            name: "book.overview"
        }
    ]
});
