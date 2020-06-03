export const fruitMixin = {
    data() {
        return {
            fruits: ["Mango", "Apple", "Pineapple", "Gouva", "Strawberry"],
            filteredText: ""
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(f => f.match(this.filteredText));
        }
    },
    created() {
        console.log("Created - Mixin!");
    }
}