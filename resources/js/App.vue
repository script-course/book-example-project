<template>
    <div>
        <Navbar />
        <h1>{{ message }}</h1>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
    components: {Navbar},
    data() {
        return {
            message: 'Gaan we dit nu in het nederlands of engels doen? Gaat nu wat door ELKAAR',
        };
    },
    mounted() {
        this.$store.dispatch('books/setAll');
    },
};
</script>
