import Vue from 'vue'
import App from './App.vue'

Vue.filter("to-lowercase", function(val) {
  return val.toLowerCase();
});

Vue.mixin({
  created() {
    console.log("Created - Global!");
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
