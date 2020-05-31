import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("editedUserAge", age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
