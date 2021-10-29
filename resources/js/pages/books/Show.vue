<template>
    <div>{{ book }}</div>
</template>

<script>
export default {
    computed: {
        book() {
            return this.$store.getters['books/getById'](parseInt(this.$route.params.id));
        },
    },
};
</script>
