<template>
    <div class="container">
        <div v-for="(userInfo, property) in accountForm" :key="property" class="row">
            <template v-if="property !== 'books' && property !== 'id'">
                <div class="col col-lg-2">{{ translations[property] }}</div>
                <div class="col col-lg-2">
                    <div v-if="editable !== property" @click="editable = property">
                        {{ userInfo }}
                    </div>

                    <TextInput v-if="editable === property" v-model="accountForm[property]" @editable="onEnter" />
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
        // const user = this.$store.getters['account/get'];
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
        /** @returns {import('../types/models/book').Book[]} */
        books() {
            /** @type {number[]} */
            const bookIds = this.account.books;

            if (!bookIds) return [];

            return bookIds.map(id => {
                return this.$store.getters['books/getById'](id);
            });
        },
        /** @returns {import('../types/models/user').User} */
        account() {
            // const user = this.$store.getters['account/get'];
            // this.accountForm.id = user.id;
            // this.accountForm.first_name = user.first_name;
            // this.accountForm.last_name = user.last_name;
            // this.accountForm.email = user.email;
            return this.$store.getters['account/get'];
        },
    },
    watch: {
        account: {
            deep: true,
            immediate: true,
            handler(newUser) {
                for (const property in this.accountForm) {
                    // @ts-ignore proprty is string, but accountForm expects specific strings
                    if (property in newUser) this.accountForm[property] = newUser[property];
                }
            },
        },
    },
    // mounted() {
    //     this.accountForm = {...this.$store.getters['account/get']};
    // },
    // async mounted() {
    //     const {data} = await axios.get('api/me');
    //     this.accountForm.id = data.id;
    //     this.accountForm.first_name = data.first_name;
    //     this.accountForm.last_name = data.last_name;
    //     this.accountForm.email = data.email;
    // },
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
