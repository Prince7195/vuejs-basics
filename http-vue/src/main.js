import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.options.root = ""; // DB base url

// to modify the resuest and response
// should not be use in production because it affects entire app

// Vue.http.interceptors.push((request, next) => {
//   if (request.method == "POST") {
//     request.method == "PUT"
//   }
//   next((response) => {
//     response.json = () => {return { messages: response.body }}
//   });
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
