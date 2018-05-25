// Enemies our player must avoid
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
 	if (Player.x < this.x + 101 &&
 		Player.x + 101 > this.x &&
        Player.y < this.y + 83 &&
        Player.y + 83 > this.y) {
 			Player.x = 200;
 			Player.y = 380;
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

Player.prototype.update = function(dt) {
	this.resetPlayer();
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) {
	if (key == 'left' && this.x > 10) {
        this.x -= 100;
    }
    if (key == 'up' && this.y > 1) {
        this.y -= 80;
    }
    if (key == 'right' && this.x < 350) {
        this.x += 100;
    }
    if (key == 'down' && this.y < 400) {
        this.y -= -80;
    }
};

Player.prototype.resetPlayer = function () {
	if (this.y < 1) {
		this.y = 380;
	}
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player

const enemy1 = new Enemy(-100, 60, 40);
const enemy2 = new Enemy(-200, 140, 90);
const enemy3 = new Enemy(-150, 225, 60);
const enemy4 = new Enemy(-250, 60, 140);

const allEnemies = [enemy1, enemy2, enemy3, enemy4];

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


