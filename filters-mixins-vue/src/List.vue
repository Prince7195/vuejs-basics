<template>
    <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Mixins</h1>
                <input v-model="filteredText" type="text">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{fruit}}</li>
                </ul>
            </div>
        </div>
</template>

<script>
    import { fruitMixin } from "./fruitMixin";
    export default {
        mixins: [fruitMixin],
        created() {
            console.log("Created - List!");
        }
    }
</script>

<style>

</style>
