<template>
    <div>
        <Navbar/>
        <h1>{{ message }}</h1>
        <router-view/>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
    components: {Navbar},
    data() {
        return {
            message: "App Hello World",
        };
    },
    mounted() {
        this.$store.dispatch('booksModule/setAll')
    },
};
</script>
