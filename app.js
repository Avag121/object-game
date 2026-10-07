const player1 = {
    name: "Avag",
    health: 100,
    attack: 30,
    defense: 10,

    weapon: {
        name: "Sword"
    },

    showInfo: function () {
        console.log("Name:", this.name)
        console.log("Health:", this.health)
        console.log("Attack:", this.attack)
        console.log("Defense:", this.defense)
        console.log("Weapon:", this.weapon.name)
    },

    attackEnemy: function (enemy) {
        let damage = this.attack - enemy.defense

        if (damage > 0) {
            enemy.takeDamage(damage)
            console.log(this.name + " attacks " + enemy.name)
            console.log("Damage:", damage)
        } else {
            console.log("Damage: 0")
        }
    },

    takeDamage: function (damage) {
        this.health = this.health - damage

        if (this.health < 0) {
            this.health = 0
        }

        console.log(this.name + " health:", this.health)
    }
}

player1.showInfo()