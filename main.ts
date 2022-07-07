scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    nextlev = true
    currentlevel += 1
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start == false) {
        start = true
        info.startCountdown(8)
    } else {
    	
    }
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.stopCountdown()
    info.startCountdown(11)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    nextlev = true
    currentlevel += 1
})
function startlev () {
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(player1, sprites.dungeon.doorClosedSouth)
}
let start = false
let nextlev = false
let player1: Sprite = null
let currentlevel = 1
player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 . 1 . 1 1 . . . . . 
    . . . . 1 . . 1 . . 1 . . . . . 
    . . . . 1 . . 1 . . 1 . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . 1 1 . 1 1 . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player1)
startlev()
scene.cameraFollowSprite(player1)
forever(function () {
    while (nextlev == true) {
        if (currentlevel == 1) {
            info.stopCountdown()
            start = false
            info.changeScoreBy(1)
            tiles.setTilemap(tilemap`level1`)
            tiles.placeOnRandomTile(player1, sprites.dungeon.doorClosedSouth)
            nextlev = false
        } else if (currentlevel == 2) {
            info.stopCountdown()
            start = false
            info.changeScoreBy(1)
            tiles.setTilemap(tilemap`level_1`)
            tiles.placeOnRandomTile(player1, sprites.dungeon.stairEast)
            nextlev = false
        } else {
        	
        }
    }
})
