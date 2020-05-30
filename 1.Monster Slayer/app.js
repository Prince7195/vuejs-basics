new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame: function () {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = true;
      this.turns = [];
    },
    attack: function () {
      const damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits Monster for " + damage,
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterattacks();
    },
    specialAttack: function () {
      const damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;
      this.turns.unshift({
        isPlayer: true,
        text: "Player hits Monster hard for " + damage,
      });
      if (this.checkWin()) {
        return;
      }
      this.monsterattacks();
    },
    monsterattacks: function () {
      const damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;
      this.turns.unshift({
        isPlayer: false,
        text: "Monster hits Player for " + damage,
      });
      this.checkWin();
    },
    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      this.turns.unshift({
        isPlayer: true,
        text: "Player heals for 10",
      });
      this.monsterattacks();
    },
    giveUp: function () {
      this.gameIsRunning = false;
    },
    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("You Won! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You Lost! New Game?")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
