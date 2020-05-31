<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent='appQuote'">Quote</button>
                <button @click="selectedComponent='appAuthor'">Author</button>
                <button @click="selectedComponent='appNew'">New</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <h2 slot="title">The Quote</h2>
                        <p>A Wonderful Quote!</p>
                    </component>
                </keep-alive>
               <!-- <app-quote>
                   <h2 slot="title">The Quote</h2>
                   <p>A Wonderful Quote!</p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quote.vue";
    import Author from "./components/Author.vue";
    import New from "./components/New.vue";
    export default {
        data() {
            return {
                selectedComponent: "appQuote"
            };
        },
        components: {
            appQuote: Quote,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style>
</style>
