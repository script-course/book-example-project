<template>
    <div class="container">
        <div v-for="(userInfo, property) in accountForm" :key="property" class="row">
            <div class="col col-lg-2">{{ userInfo.label }}</div>
            <div class="col col-lg-2">
                <div v-if="editable !== property" @click="editable = property">
                    {{ userInfo.value }}
                </div>

                <TextInput v-if="editable === property" v-model="userInfo.value" @editable="onEnter" />
            </div>
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
            accountForm: {
                first_name: {
                    value: '',
                    label: 'Voornaam',
                },
                last_name: {
                    value: '',
                    label: 'Achternaam',
                },
                email: {
                    value: '',
                    label: 'Email-adres',
                },
            },
            editable: '',
        };
    },
    computed: {
        /** @returns {import('../types/models/book').Book[]} */
        books() {
            if (!this.account) return [];
            /** @type {number[]} */
            const bookIds = this.account.books;

            if (!bookIds) return [];

            // Filtering here, because the user can be here while the books aren't loaded yet
            return bookIds.map(id => this.$store.getters['books/getById'](id)).filter(book => book);
        },
        /** @returns {import('../types/models/user').User} */
        account() {
            return this.$store.getters['account/get'];
        },
    },
    watch: {
        account: {
            deep: true,
            immediate: true,
            handler(newUser) {
                if (!newUser) return;
                for (const property in this.accountForm) {
                    // @ts-ignore proprty is string, but accountForm expects specific strings
                    if (property in newUser) this.accountForm[property].value = newUser[property];
                }
            },
        },
    },
    beforeCreate() {
        this.$store.dispatch('account/set');
    },
    methods: {
        onEnter() {
            // this.$store.dispatch('account/update');
            this.editable = '';
        },
    },
};
</script>
