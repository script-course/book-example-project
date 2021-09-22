<template>
    <div class="container">
        <div v-for="(userInfo, property) in userInformation" :key="property" class="row">
            <template v-if="property !== 'books' && property !== 'id'">
                <div class="col col-lg-2">{{ translations[property] }}</div>
                <div class="col col-lg-2">
                    <div v-if="editable !== property" @click="editable = property">
                        {{ userInfo }}
                    </div>

                    <TextInput v-if="editable === property" v-model="userInformation[property]" @editable="onEnter" />
                </div>
            </template>
        </div>

        <div class="row">
            <div class="col col-lg-2">
                Books:
            </div>
            <div class="col col-lg-6">
                <ul>
                    <li v-for="book in books" :key="book.id">
                        {{ book.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import TextInput from '../components/forms/TextInput.vue';

export default {
    components: {TextInput},
    data() {
        return {
            userInformation: {},
            editable: '',
            translations: {
                first_name: 'Voornaam',
                last_name: 'Achternaam',
                email: 'Email-adres',
            },
        };
    },
    computed: {
        /** @returns {import('../types/models/book').Book[]} */
        books() {
            /** @type {number[]} */
            const bookIds = this.$store.getters['account/get'].books;

            if (!bookIds) return [];

            return bookIds.map(id => {
                return this.$store.getters['books/getById'](id);
            });
        },
    },
    mounted() {
        this.userInformation = {...this.$store.getters['account/get']};
    },
    methods: {
        onEnter() {
            this.editable = '';
        },
    },
};
</script>
