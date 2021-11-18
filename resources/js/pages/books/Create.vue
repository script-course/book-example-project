<template>
    <div class="row">
        <form enctype="multipart/form-data" @submit.prevent="submitBook">
            <div class="mb-3">
                <label for="title" class="form-label">Book title:</label>
                <input id="title" v-model="book.title" type="text" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description:</label>
                <textarea id="description" v-model="book.description" class="form-control" />
            </div>
            <div class="mb-3">
                <label for="categories" class="form-label">Categories:</label>
                <multiselect
                    v-model="book.selected_categories"
                    :options="categories"
                    track-by="id"
                    label="name"
                    multiple
                    :close-on-select="false"
                />
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Author(s):</label>
                <multiselect v-model="book.selected_author" :options="authors" track-by="id" label="name" />
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Upload image</label>
                <input id="image" ref="fileLoader" type="file" class="form-control" @change="dropDocument" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
    components: {Multiselect},
    data() {
        return {
            book: {
                title: null,
                description: null,
                image: null,
                selected_author: null,
                selected_categories: [],
            },
        };
    },
    computed: {
        authors() {
            return this.$store.getters['authors/getAll'];
        },
        categories() {
            return this.$store.getters['categories/getAll'];
        },
    },
    mounted() {
        this.$store.dispatch('authors/setAll');
        this.$store.dispatch('categories/setAll');
    },
    methods: {
        dropDocument(event) {
            this.book.image = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        },
        submitBook() {
            const author = this.book.selected_author ? this.book.selected_author.id : null;
            const categories =
                this.book.selected_categories.length != 0
                    ? this.book.selected_categories.map(category => category.id)
                    : [];

            const formData = new FormData();
            formData.append('image', this.book.image);
            formData.append('title', this.book.title);
            formData.append('description', this.book.description);
            formData.append('author_id', author);
            formData.append('category_id', categories);
            this.$store.dispatch('books/create', formData);
            // this.$router.push({name: 'book.overview'});
        },
    },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
