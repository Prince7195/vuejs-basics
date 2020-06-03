<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters</h1>
                <p>Normal: {{text | toUppercase}}</p>
                <p>To Upper Case: {{text | toUppercase}}</p>
                <p>To Lower Case: {{text | to-lowercase}}</p>
                <hr>
                <input v-model="filteredText" type="text">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
                </ul>
                <hr>
            </div>
        </div>
        <app-list></app-list>
    </div>
</template>

<script>
    import List from "./List.vue";
    import { fruitMixin } from "./fruitMixin";
    export default {
        mixins: [fruitMixin],
        data() {
            return {
                text: "Hello Vue!"
            };
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
