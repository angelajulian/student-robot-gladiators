// player attributes
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(
  playerName +
    " has " +
    playerHealth +
    " hp and " +
    playerAttack +
    " attack power."
);

// enemy attributes
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  window.alert("Welcome to Robot Gladiators!");
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  promptFight = promptFight.toUpperCase();
  promptFight = promptFight.trim();

  if (promptFight === "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );
    // enemy health check
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // player health check
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  } else if (promptFight === "SKIP") {
    var reallySkip = window.confirm(
      "Are you sure you want to skip? You'll lose your registration fee of $2."
    );
    if (reallySkip) {
      window.alert(playerName + " has chosen to skip the fight. Goodbye!");
      playerMoney -= 2;
      console.log(playerMoney);
    } else {
      fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

fight();
