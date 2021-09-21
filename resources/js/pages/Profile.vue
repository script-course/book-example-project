<template>
    <div class="container">
        <div
            class="row"
            v-for="(userInfo, index) in userInformation"
            :key="index"
        >
            <template v-if="index !== 'books' && index !== 'id'">
                <div class="col col-lg-2">{{ translations[index] }}</div>
                <div class="col col-lg-2">
                    <div @click="editable = index" v-if="editable != index">
                        {{ userInfo }}
                    </div>

                    <text-input
                        v-if="editable == index"
                        v-model="userInformation[index]"
                        v-on:editable="onEnter"
                    />
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
import TextInput from "../components/forms/TextInput.vue";

export default {
    components: { TextInput },
    data() {
        return {
            userInformation: {},
            editable: "",
            translations: {
                first_name: "Voornaam",
                last_name: "Achternaam",
                email: "Email-adres"
            }
        };
    },
    computed: {
        books() {
            const bookIds = this.userInformation.books;

            if (!bookIds) return [];

            return bookIds.map(id => {
                return this.$store.getters["books/getById"](id);
            });
        }
    },
    methods: {
        onEnter() {
            this.editable = "";
        }
    },
    mounted() {
        this.userInformation = { ...this.$store.getters["acount/get"] };
    }
};
</script>
