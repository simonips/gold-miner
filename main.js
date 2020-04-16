var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10,
    goldPerSec: 0
  }
  
  function mineGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
  }

  function autoMine() {
      gameData.gold += gameData.goldPerSec
      document.getElementById("currentGoldPerSec").innerHTML = gameData.goldPerSec + " gold per sec"
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
  }
  
  function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
      gameData.gold -= gameData.goldPerClickCost
      gameData.goldPerClick += 1
      gameData.goldPerClickCost *= 2
      gameData.goldPerSec += 1
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
  }
  
  var mainGameLoop = window.setInterval(function() {
    autoMine()
  }, 1000)

  var saveGameLoop = window.setInterval(function() {
      localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
  })

