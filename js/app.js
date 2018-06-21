// Enemies our player must avoid
'use strict'
class Enemy {
	constructor (x,y,speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
	}
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 505) {
    	this.x = -100
    }

 	//check collision
 	if (player.x < this.x + 70 &&
 		player.x + 70 > this.x &&
        player.y < this.y + 40 &&
        player.y + 40 > this.y) {
 			player.x = 200;
 			player.y = 380;
 		}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
	constructor (x,y) {
	this.sprite = 'images/char-horn-girl.png';
	this.x = 200;
	this.y = 380;
	}
}

//when player reach water, game ends
Player.prototype.update = function(dt) {
    if (this.y < 40) {
        document.getElementById('endGame').style.visibility = 'visible';
    }
	this.resetPlayer();
};

Player.prototype.resetPlayer = function () {
    if (this.y < 1) {
        this.y = 380;
    }
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player's movements
Player.prototype.handleInput = function (key) {
	if (key == 'left' && this.x > 10) {
        this.x -= 100;
    }
    if (key == 'up' && this.y > 0) {
        this.y -= 80;
    }
    if (key == 'right' && this.x < 350) {
        this.x += 100;
    }
    if (key == 'down' && this.y < 350) {
        this.y -= -80;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player

const enemy1 = new Enemy(-100, 60, 60);
const enemy2 = new Enemy(-200, 140, 190);
const enemy3 = new Enemy(-150, 225, 120);
const enemy4 = new Enemy(-250, 60, 150);
const enemy5 = new Enemy(0, 140, 300);
const enemy6 = new Enemy(-100, 225, 180);

const allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

//at the beginning
const start = document.querySelector('.start');
start.addEventListener('click',startGame);

function startGame() {
    document.getElementById('instructions').style.visibility = 'hidden';
};

//when player wins
const restart = document.querySelector('.restart');
restart.addEventListener('click',playAgain);

function playAgain() {
    document.getElementById('endGame').style.visibility = 'hidden';
};
