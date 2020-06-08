<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{$route.query.locale}}</p>
        <p>Analytics: {{$route.query.q}}</p>
        <hr>
        <div class="btn btn-primary" @click="confirmed = true">Confirm</div>
        <div style="height:700px"></div>
        <p id="data">Some Data</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        };
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            next();
        } else {
            if (confirm("Are you sure want to leave?")) {
                next();
            } else {
                next(false);
            }
        }
    }
}
</script>