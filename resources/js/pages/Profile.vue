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
import axios from 'axios';
import TextInput from '../components/forms/TextInput.vue';

export default {
    components: {TextInput},
    data() {
        // const user = this.$store.getters['account/get'];
        return {
            userInformation: {
                id: 0,
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
            const bookIds = this.user.books;

            if (!bookIds) return [];

            return bookIds.map(id => {
                return this.$store.getters['books/getById'](id);
            });
        },
        /** @returns {import('../types/models/user').User} */
        user() {
            // const user = this.$store.getters['account/get'];
            // this.userInformation.id = user.id;
            // this.userInformation.first_name = user.first_name;
            // this.userInformation.last_name = user.last_name;
            // this.userInformation.email = user.email;
            return this.$store.getters['account/get'];
        },
    },
    watch: {
        user: {
            deep: true,
            immediate: true,
            handler(newUser) {
                this.userInformation.id = newUser.id;
                this.userInformation.first_name = newUser.first_name;
                this.userInformation.last_name = newUser.last_name;
                this.userInformation.email = newUser.email;
            },
        },
    },
    // mounted() {
    //     this.userInformation = {...this.$store.getters['account/get']};
    // },
    // async mounted() {
    //     const {data} = await axios.get('api/me');
    //     this.userInformation.id = data.id;
    //     this.userInformation.first_name = data.first_name;
    //     this.userInformation.last_name = data.last_name;
    //     this.userInformation.email = data.email;
    // },
    methods: {
        onEnter() {
            this.editable = '';
        },
    },
};
</script>
