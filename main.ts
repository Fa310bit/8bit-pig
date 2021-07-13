scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -170
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage3`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
mySprite.ay += 300
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
