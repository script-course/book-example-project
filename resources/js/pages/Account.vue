<template>
    <div class="container">
        <div v-for="(userInfo, property) in accountForm" :key="property" class="row">
            <div class="col col-lg-2">{{ translations[property] }}</div>
            <div class="col col-lg-2">
                <div v-if="editable !== property" @click="editable = property">
                    {{ userInfo }}
                </div>

                <TextInput v-if="editable === property" v-model="accountForm[property]" @editable="onEnter" />
            </div>
        </div>

        <div class="row">
            <div class="col col-lg-2">
                Books:
            </div>
            <div class="col col-lg-6">
                <table>
                    <tr v-for="book in books" :key="book.id">
                        <td>{{ book.title }}</td>
                        <td><button @click="deleteBook(book.id)">delete</button></td>
                    </tr>
                </table>
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
            accountForm: {
                first_name: '',
                last_name: '',
                email: '',
            },
            editable: '',
            translations: {
                first_name: 'Voornaam',
                last_name: 'Achternaam',
                email: 'Email-adres',
            },
        };
    },
    computed: {
        books() {
            const bookIds = {...this.$store.getters['account/get']}.books;

            if (!bookIds) return [];

            // Filtering here, because the user can be here while the books aren't loaded yet
            return bookIds.map(id => this.$store.getters['books/getById'](id)).filter(book => book);
        },
    },

    mounted() {
        for (const property in this.accountForm) {
            this.accountForm[property] = {...this.$store.getters['account/get']}[property];
        }
    },

    methods: {
        onEnter() {
            // this.$store.dispatch('account/update');
            this.editable = '';
        },
        deleteBook(bookId) {
            this.$store.dispatch('account/removeBook', bookId);
        },
    },
};
</script>
