<template>
    <pre>
        {{ book }}
    </pre>
</template>

<script>
export default {
    computed: {
        book() {
            return this.$store.getters['books/getById'](this.$route.params.id);
        },
    },
};
</script>
