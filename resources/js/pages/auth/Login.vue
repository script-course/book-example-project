<template>
    <div class="row">
        <form @submit.prevent="submit">
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                    >Email</label
                >
                <div class="col-sm-10">
                    <input
                        type="text"
                        class="form-control"
                        id="inputEmail"
                        v-model="auth.email"
                    />
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                    >Password</label
                >
                <div class="col-sm-10">
                    <input
                        type="password"
                        class="form-control"
                        id="inputPassword"
                        v-model="auth.password"
                    />
                </div>
            </div>
            <button type="button" class="btn btn-primary" @click="login">
                Inloggen
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            auth: {
                email: "",
                password: ""
            }
        };
    },
    methods: {
        login() {
            this.$store.dispatch("auth/login", this.auth);
            this.$router.push("home");
        }
    }
};
</script>
