namespace SpriteKind {
    export const SharpSword = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(Friend.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (Friend.isHittingTile(CollisionDirection.Right) || Friend.isHittingTile(CollisionDirection.Left)) {
        Friend.vy = 0
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(2, 17), assets.tile`myTile`)) {
        SWORD()
    }
})
function DeadBad () {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump = 1
        Friend.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Friend.setImage(assets.image`Friend left`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(2, 17), assets.tile`myTile`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Friend.setImage(assets.image`Friend`)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.SharpSword, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
})
function BadGuys (BadGuyList: Image[]) {
    for (let value of tiles.getTilesByType(assets.tile`DOT2`)) {
        BadGuys2 = sprites.create(BadGuyList._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(BadGuys2, value)
        if (BadGuys2.image.equals(assets.image`EvilDelivery`)) {
            BadGuys2.setVelocity(45, 0)
        } else if (BadGuys2.image.equals(assets.image`EvilPrincess`)) {
            BadGuys2.setVelocity(30, 0)
        } else {
            BadGuys2.setVelocity(50, 0)
        }
    }
}
function SWORD () {
    SWORD_SHING = sprites.create(assets.image`ShinySword`, SpriteKind.SharpSword)
    SWORD_SHING.setPosition(Friend.x + 5, Friend.y + 0)
    animation.runImageAnimation(
    SWORD_SHING,
    [img`
        . . . . . . . . . d d d . . . . 
        . . . . . . . . d d b d . . . . 
        . . . . . . . d d b d d . . . . 
        . . . . . . d d b d d . . . . . 
        . . . . . d d b d d . . . . . . 
        . . . . d d b d d . . . . . . . 
        . . c d d b d d . . . 5 . . . . 
        . . . c b d d . . . . . . . . . 
        . . c b c d . . . . . . 5 . . . 
        . c c c . c . 5 . . . . 5 . . . 
        . . c . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . 5 . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 5 . . . . . . 
        . . . . . . . . . . . 5 . . . . 
        . c . . . . . . . . . . . . . . 
        c c c . c . . . . 5 . . . . . . 
        . c b c d . . . . . . 5 . . . . 
        . . c b d d . . 5 . . . . . . . 
        . c d d b d d . . . . 5 . . . . 
        . . . d d b d d . . . . . . . . 
        . . . . d d b d d . 5 . . . . . 
        . . . . . d d b d d . . . . . . 
        . . . . . . d d b d d . . . . . 
        . . . . . . . d d b d . . . . . 
        . . . . . . . . d d d . . . . . 
        `],
    500,
    true
    )
    pause(1000)
    sprites.destroy(SWORD_SHING)
}
let SWORD_SHING: Sprite = null
let BadGuys2: Sprite = null
let jump = 0
let Friend: Sprite = null
scene.setBackgroundImage(assets.image`Backround`)
tiles.setCurrentTilemap(tilemap`level2`)
Friend = sprites.create(assets.image`Friend`, SpriteKind.Player)
Friend.ay = 300
controller.moveSprite(Friend, 100, 0)
game.splash("Kill the enemies to combat the infection", "Get the sword and press up to fight ")
scene.cameraFollowSprite(Friend)
let gravity = 500
jump = 20
info.setLife(3)
let TheseGuysAreBAD = [assets.image`EvilDelivery`, assets.image`EvilPrincess`, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e e e . . . . . . . . . . 
    . . e e e e e e . . . . . . . . 
    . . e e e e e e . . . . . . . . 
    . e e d f e e e e . . . . . . . 
    . . d f 2 e e e . . . . . . . . 
    . . d d d e e e . . . . . . . . 
    . . . c e e e e . . . . . . . . 
    . . . f e f f . . . . . . . . . 
    . . d f f d f . . . . . . . . . 
    . . . f f c f f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
