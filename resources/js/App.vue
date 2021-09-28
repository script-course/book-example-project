<template>
    <div>
        <Navbar />
        <h1>Welcome to book club!</h1>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
    components: {Navbar},
    mounted() {
        this.$store.dispatch('books/setAll');
    },
};
</script>
