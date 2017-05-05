// High Damage slow tower

var Botan = Botan || {};

Botan.GumDropTower = function(game){
    var spr = 'gumdrop_tower_spr';
    var x = 200;
    var y = 400;
    Botan.Tower.call(this, game, x, y, spr);
    
    //tower animations
    this.animations.add('idle', [ 0, 1, 2, 3, 4, 5, 6],14,true);
    
    //create unique properties for the tower.
    this.delay = 1;
    
    //maybe change this to a global timer? because many towers.
    Botan.game.time.events.loop(Phaser.Timer.SECOND, this.fire, this);

};

Botan.GumDropTower.prototype = Object.create(Botan.Tower.prototype);
Botan.GumDropTower.prototype.constructor = Botan.GumDropTower;


Botan.GumDropTower.prototype.update = function(){ 
    this.animations.play('idle');
};

//this holds all the firing logic
Botan.GumDropTower.prototype.fire = function(){
    //get bullet to be fired
    var bullet = this.createBullet();
    //change its properties if they're wrong
    if(bullet){
        bullet.loadTexture('gumdrop_bullet_spr');
    }
    
};
