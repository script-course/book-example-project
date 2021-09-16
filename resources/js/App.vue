<template>
    <div>
        <h1>{{ message }}</h1>
        <router-view/>
        <pre>{{books}}</pre>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "App Hello World",
        };
    },
    computed:{
        books(){
            return this.$store.getters['booksModule/getAll']
        }
    },
    mounted() {
        this.$store.dispatch('booksModule/setAll')
    },
};
</script>
