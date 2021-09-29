<template>
    <div>
        <div class="row mt-3">
            <div class="col-sm-7">
                <input v-model="search" type="search" class="form-control" placeholder="Search book title" />
            </div>
        </div>
        <div class="row mt-3">
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
    </div>
</template>

<script>
/**
 * @typedef {import('../../types/models/book').Book} Book
 */
export default {
    data() {
        return {search: ''};
    },
    computed: {
        /** @returns {import('../../types/models/book').Book[]} */
        books() {
            const formattedSearch = this.search.toLowerCase();
            /** @type {Book[]} */
            const books = this.$store.getters['books/getAll'];
            return books.filter(({title}) => title.includes(formattedSearch));
        },
    },
    watch: {
        '$route.query.search': {
            handler(newValue) {
                this.search = newValue;
            },
            immediate: true,
        },
    },
    mounted() {
        this.$store.dispatch('books/setAll');
    },
};
</script>
