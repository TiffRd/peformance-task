namespace SpriteKind {
    export const SharpSword = SpriteKind.create()
    export const Star = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(2, 17), assets.tile`myTile`)) {
        SWORD()
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (!(sprite.isHittingTile(CollisionDirection.Top))) {
        jump = 0
    }
    if (Friend.isHittingTile(CollisionDirection.Right) || Friend.isHittingTile(CollisionDirection.Left)) {
        Friend.vy = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump < maxJump) {
        jump += 1
        Friend.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Friend.setImage(assets.image`Friend left`)
})
info.onScore(10, function () {
    game.setGameOverMessage(true, "You Collected " + StarCount + "/3 Stars!" + "")
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(2, 17), assets.tile`myTile`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Friend.setImage(assets.image`Friend`)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.SharpSword, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    info.changeScoreBy(1)
})
function BadGuys (TheseGuysAreBad: Image[]) {
    for (let value of tiles.getTilesByType(assets.tile`DOT2`)) {
        BadGuys2 = sprites.create(TheseGuysAreBad._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(BadGuys2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        if (Math.percentChance(50)) {
            BadGuys2.vx = 50
        } else {
            BadGuys2.vx = -50
        }
        BadGuys2.setBounceOnWall(true)
    }
    for (let value of tiles.getTilesByType(assets.tile`DOT2`)) {
        EnemyBounce = sprites.create(TheseGuysAreBad._pickRandom(), SpriteKind.Enemy)
        tiles.placeOnTile(EnemyBounce, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        EnemyBounce.setFlag(SpriteFlag.Invisible, true)
    }
}
info.onLifeZero(function () {
    game.setGameOverMessage(false, "You Collected!" + StarCount + "/3 Stars!")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile1`, function (sprite, location) {
    let velocity = 0
    if (velocity < 0) {
        sprite.setVelocity(50, 0)
    }
    if (velocity > 0) {
        sprite.setVelocity(-50, 0)
    }
})
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
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile9, function (sprite, location) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 12))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Star, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 500)
    tiles.setWallAt(otherSprite.tilemapLocation(), true)
    StarCount += 1
})
function StarsCount (Star: Sprite) {
    if (tiles.tileAtLocationIsWall(tiles.getTileLocation(97, 18))) {
        tiles.placeOnTile(Star, tiles.getTileLocation(80, 50))
    } else if (tiles.tileAtLocationIsWall(tiles.getTileLocation(115, 18))) {
        tiles.placeOnTile(Star, tiles.getTileLocation(55, 60))
    } else if (tiles.tileAtLocationIsWall(tiles.getTileLocation(64, 19))) {
        tiles.placeOnTile(Star, tiles.getTileLocation(110, 60))
    }
}
let SWORD_SHING: Sprite = null
let EnemyBounce: Sprite = null
let BadGuys2: Sprite = null
let StarCount = 0
let maxJump = 0
let jump = 0
let Friend: Sprite = null
scene.setBackgroundImage(assets.image`Backround`)
tiles.setCurrentTilemap(tilemap`level2`)
Friend = sprites.create(assets.image`Friend`, SpriteKind.Player)
Friend.ay = 300
controller.moveSprite(Friend, 100, 0)
game.splash("Kill the enemies to combat the infection", "Get the sword and press up to fight ")
scene.cameraFollowSprite(Friend)
let gravity = 1000
jump = 0
maxJump = 1
StarCount = 0
info.setLife(3)
info.setScore(0)
let list = [assets.image`EvilDelivery`, assets.image`EvilPrincess`, img`
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
BadGuys(list)
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (value.vx < 0 && (value.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`) || value.isHittingTile(CollisionDirection.Left))) {
            value.vx = value.vx * -1
        } else if (value.vx > 0 && (value.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`) || value.isHittingTile(CollisionDirection.Right))) {
            value.vx = value.vx * -1
        }
    }
})
