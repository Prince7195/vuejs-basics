<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{userAge}}</p>
        <button @click="editAge">Edit Age</button>
        <button @click="editWithEventBus">Edit Age with Event Bus</button>
    </div>
</template>

<script>
import { eventBus } from "../main";
export default {
    props: ['userAge'],
    methods: {
        editAge() {
            this.userAge = 30;
            this.$emit("editedUserAge", this.userAge);
        },
        editWithEventBus() {
            this.userAge = 26;
            // eventBus.$emit("editedUserAge", this.userAge);
            eventBus.changeAge(this.userAge);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
