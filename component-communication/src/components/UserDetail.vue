<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{name}}</p>
        <p>Reveresed User Name: {{reverseName()}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name from parent callback</button>
    </div>
</template>

<script>
import { eventBus } from "../main";
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        reverseName() {
            return this.name.split("").reverse().join("");
        },
        resetName() {
            this.name = "John";
            this.$emit("nameReset", this.name);
        }
    },
    created() {
        eventBus.$on("editedUserAge", (age) => {
            this.userAge = age;
        })
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
