<template>
    <div>
        <h3>Some User Details</h3>
        <p>Loader Id: {{$route.params.id}}</p>
        <router-link
            tag="button"
            :to="{name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'en', q: 100}}"
            class="btn btn-primary"
            style="cursor: pointer"
        >
            Edit User
        </router-link>
    </div>
</template>