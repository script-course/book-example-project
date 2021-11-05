<template>
    <div>
        <div class="row">
            <router-link :to="{name: 'book.create'}" class="btn btn-primary">
                Create Book
            </router-link>
        </div>
        <div class="row">
            <div v-for="book in books" :key="book.id" class="col-12 col-md-4 mb-3">
                <div class="card" style="width: 18rem;">
                    <img :src="book.image" class="card-img-top" alt="bookcover" />
                    <ul>
                        <li v-for="category in book.category_id" :key="category.id">{{ category.name }}</li>
                    </ul>
                    <div class="card-body">
                        <h5 class="card-title">{{ book.title }}</h5>
                        <p class="card-text">
                            {{ book.description }}
                        </p>
                        <router-link :to="{name: 'book.show', params: {id: book.id}}" class="btn btn-primary">
                            Check book
                        </router-link>
                    </div>
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
    mounted() {
        this.$store.dispatch('books/setAll');
    },
};
</script>
