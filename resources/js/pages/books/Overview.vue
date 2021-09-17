<template>
    <div>
        <pre>{{books}}</pre>
    </div>
</template>

<script>
export default {
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
