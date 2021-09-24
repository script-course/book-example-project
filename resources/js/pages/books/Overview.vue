<template>
    <div class="row">
        <button type="button" class="btn btn-primary" @click="goToCreateBook">Create book</button>
        <div v-for="book in books" :key="book.id" class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 18rem;">
                <img :src="book.image" class="card-img-top" alt="bookcover" />
                <div class="card-body">
                    <h5 class="card-title">{{ book.title }}</h5>
                    <p class="card-text">
                        {{ book.description }}
                    </p>
                    <router-link :to="{name: 'book.overview'}" class="btn btn-primary">Check book</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        books() {
            return this.$store.getters['books/getAll'];
        },
    },
    methods: {
        goToCreateBook() {
            this.$router.push('book/create');
        },
    },
    mounted() {
        this.$store.dispatch('books/setAll');
    },
};
</script>
