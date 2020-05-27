new Vue({
  el: "#app",
  data: {
    title: "Hello! from Vue.js",
    link: "https://google.com",
    finishedLink: "<a href='https://google.com' target='_blank'>Google</a>",
    count: 0
  },
  methods: {
    sayHello: function () {
      this.title = "Vue.js";
      return this.title;
    },
    increase: function() {
        this.count++;
    }
  },
});
