<template>
    <div>
        <Navbar />
        <div class="container">
            <h1>Welcome to book club!</h1>
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
