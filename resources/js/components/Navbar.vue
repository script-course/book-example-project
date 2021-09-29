<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{name: 'home'}">Bookclub</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon" />
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name: 'book.overview'}" class="nav-link">Books</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link v-if="isLoggedIn" :to="{name: 'account'}" class="nav-link">
                            Mijn profiel
                        </router-link>
                    </li>
                    <li>
                        <router-link v-if="!isLoggedIn" :to="{name: 'auth.login'}" class="nav-link">Login</router-link>
                        <!-- This needs a proper solution -->
                        <a v-if="isLoggedIn" class="nav-link pe-auto" href="#" @click="logout">
                            Logout
                        </a>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Dropdown
                        </a>
                        <ul
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <a class="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Another action</a
                                >
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                            <li>
                                <a class="dropdown-item" href="#"
                                    >Something else here</a
                                >
                            </li>
                        </ul>
                    </li> -->
                </ul>
                <form class="d-flex" @submit.prevent="searchSubmit">
                    <div class="dropdown">
                        <input
                            v-model="search"
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <ul v-if="books.length" class="dropdown-menu show w-100" aria-labelledby="dropdownMenuLink">
                            <li v-for="book in books" :key="book.id">
                                <router-link
                                    class="dropdown-item"
                                    :to="{name: 'book.show', params: {id: book.id}}"
                                    @click="search = ''"
                                >
                                    {{ book.title }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <button class="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
/**
 * @typedef {import('../types/models/book').Book} Book
 */
export default {
    data() {
        return {search: ''};
    },
    computed: {
        /** @returns {boolean} */
        isLoggedIn() {
            return this.$store.getters['auth/getIsLoggedIn'];
        },
        /** @returns {Book[]} */
        books() {
            const formattedSearch = this.search.toLowerCase();
            if (!formattedSearch) return [];
            /** @type {Book[]} */
            const books = this.$store.getters['books/getAll'];
            return books.filter(({title}) => title.includes(formattedSearch)).slice(0, 10);
        },
    },
    methods: {
        logout() {
            this.$store.dispatch('auth/logout');
            this.$router.push('home');
        },
        searchSubmit() {
            if (!this.search) return;
            this.$router.push({name: 'book.overview', query: {search: this.search}});
            this.search = '';
        },
    },
};
</script>
