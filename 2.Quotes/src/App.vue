<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuote="maxQuote"></app-header>
        <app-new-quote @quoteAdded="quoteAdded"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quotedeleted="quotedeleted"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12">
                <div class="alert alert-info">
                    Info: Click on a Quote to Delete It!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QuoteGrid from "./components/QuoteGrid.vue";
    import NewQuote from "./components/NewQuote.vue";
    import Header from "./components/Header.vue";
    export default {
        data() {
            return {
                quotes: ["Just a Quote to see something"],
                maxQuote: 10
            };
        },
        methods: {
            quoteAdded(quote) {
                if (this.quotes.length >= this.maxQuote) {
                    return alert("Please delete Quote first!");
                }
                this.quotes.push(quote);
            },
            quotedeleted(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
