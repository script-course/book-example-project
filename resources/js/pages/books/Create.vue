<template>
    <div class="row">
        <form @submit.prevent="submitBook">
            <div class="mb-3">
                <label for="title" class="form-label">Book title:</label>
                <input type="text" class="form-control" id="title" v-model="book.title" />
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description:</label>
                <textarea class="form-control" id="description" v-model="book.description" />
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Upload image</label>
                <input type="file" class="form-control" id="image" ref="fileLoader" @change="dropDocument" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            book: {
                title: null,
                description: null,
                image: null,
            },
        };
    },
    methods: {
        dropDocument(event) {
            this.book.image = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        },
        submitBook() {
            const formData = new FormData();
            formData.append('image', this.book.image);
            formData.append('title', this.book.title);
            formData.append('description', this.book.description);
            this.$store.dispatch('books/create');
        },
    },
};
</script>
