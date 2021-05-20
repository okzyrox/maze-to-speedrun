info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.stopCountdown()
    info.startCountdown(11)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 f 1 f 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 f f 1 1 . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 . 1 . 1 1 . . . . . 
    . . . . 1 . . 1 . . 1 . . . . . 
    . . . . 1 . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . 1 . 1 . . . . . . . 
    . . . . . 1 1 . 1 . . . . . . . 
    . . . . . 1 . . . 1 . . . . . . 
    . . . . 1 1 . . . 1 1 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.doorClosedSouth)
scene.cameraFollowSprite(mySprite)
info.startCountdown(8)
