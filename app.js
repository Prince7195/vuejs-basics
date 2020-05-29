new Vue({
  el: "#app",
  data: {
    title: "Hello! from Vue.js",
    link: "https://google.com",
    finishedLink: "<a href='https://google.com' target='_blank'>Google</a>",
    count: 0,
    x: 0,
    y: 0,
    name: "John",
    counter1: 0,
    counter2: 0
  },
  computed: {
    countOutput: function() {
      console.log("computed");
      return this.counter1 > 5 ? "Greater than 5" : "Smaller than 5";
    }
  },
  watch: {
    // name should match the property in data to watch it changes
    counter2: function(nextValue) {
      let vm = this;
      setTimeout(() => {
        vm.counter2 = 0;
      }, 2000);
    }
  },
  methods: {
    sayHello: function () {
      this.title = "Vue.js";
      return this.title;
    },
    increase: function(step, event) {
        this.count += step;
    },
    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe: function() {
      alert("Alert!");
    },
    result: function() {
      console.log("method");
      return this.counter1 > 5 ? "Greater than 5" : "Smaller than 5";
    }
  },
});
