<template>
    <div>
        <h3>Some User Details</h3>
        <p>Loader Id: {{$route.params.id}}</p>
        <router-link
            tag="button"
            :to="link"
            class="btn btn-primary"
            style="cursor: pointer"
        >
            Edit User
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    hash: "#data"
                }
            };
        },
        beforeRouteEnter(to, from, next) {
            console.log("component beforeRouteEnter");
            if (true) {
                next();
            } else {
                next(false);
            }
        }
    }
</script>

<style>

</style>
