namespace SpriteKind {
    export const CPU = SpriteKind.create()
    export const BT = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.runFrames(
    CT,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . . . . 1 . . . . . . . 
        `],
    5000,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingUp)
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.replaceAllTiles(assets.tile`myTile15`, assets.tile`myTile16`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.runFrames(
    CT,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 f 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 d 1 1 1 1 . . . 
        . . . . 1 1 1 1 d 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . 1 d . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 f 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 d 1 1 1 1 . . . 
        . . . . 1 1 1 1 d 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . 1 d . . . . . . . 
        `],
    5000,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.replaceAllTiles(assets.tile`myTile18`, assets.tile`myTile17`)
})
function gardencar () {
    tiles.loadMap(tiles.createMap(tilemap`level4`))
    tiles.coverAllTiles(tiles.util.arrow4, sprites.vehicle.roadHorizontal)
    tiles.coverAllTiles(tiles.util.arrow1, sprites.vehicle.roadHorizontal)
    tiles.placeOnRandomTile(CT, tiles.util.arrow4)
    tiles.placeOnRandomTile(BT, tiles.util.arrow4)
    scene.cameraFollowSprite(BT)
    story.printCharacterText("Nice to spend some time with you", "Battle Thing")
    story.printCharacterText("Mmmm hmm", "Cute Thing")
    story.spriteMoveToLocation(BT, 0, 0, 50)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.runFrames(
    CT,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 f 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 d 1 1 1 1 . . . 
        . . . . 1 1 1 1 d 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . d 1 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 1 . . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 f 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 d 1 1 1 1 . . . 
        . . . . 1 1 1 1 d 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . d 1 . . . . . . 
        `],
    5000,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.runFrames(
    CT,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 f 1 f f f 1 f 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 f 1 f f f 1 f 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . 1 . . . . . 
        `],
    5000,
    characterAnimations.rule(Predicate.MovingDown, Predicate.FacingDown)
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BT, function (sprite, otherSprite) {
    story.setSoundEnabled(true)
    story.printCharacterText("There you are", "Battle Thing")
    story.printCharacterText("Here are your presents", "Battle Thing")
    tiles.replaceAllTiles(assets.tile`myTile8`, assets.tile`myTile19`)
    story.printCharacterText("Claze, Lameleon Plushie, Mini Bicycle, Seeing orb", "Items")
    story.printCharacterText("Wow, Thank's Dad", "Cute Thing")
    story.printCharacterText("And cake!", "Battle Thing")
    tiles.replaceAllTiles(assets.tile`myTile9`, assets.tile`myTile20`)
    story.printCharacterText("*Burp!* You can really taste the candle", "Cute Thing")
    story.printCharacterText("How's about we go for a walk")
    gardencar()
})
let BT: Sprite = null
let CT: Sprite = null
tiles.setCurrentTilemap(tilemap`home`)
info.setLife(3)
CT = sprites.create(assets.image`CT`, SpriteKind.Player)
BT = sprites.create(img`
    . . . . 1 . . . . 1 . . . . . . 
    . . . 1 1 1 1 1 1 1 1 . . . . . 
    . . 1 1 1 1 1 1 1 3 1 1 . . . . 
    . . 1 f 1 f f f 1 f 1 1 . . . . 
    . . 1 1 1 1 1 1 1 3 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 . . . 1 . . . . . . . 
    `, SpriteKind.BT)
tiles.placeOnRandomTile(BT, sprites.castle.tilePath8)
tiles.placeOnRandomTile(CT, assets.tile`myTile14`)
scene.cameraFollowSprite(CT)
story.setSoundEnabled(true)
story.printCharacterText("*Yawn*", "Cute Thing")
story.printCharacterText("Happy Birthday, Cute Thing. You better come outside", "Battle Thing")
story.printCharacterText("Ok, Dad", "Cute Thing")
controller.moveSprite(CT)
game.onUpdateInterval(5000, function () {
    tiles.replaceAllTiles(assets.tile`myTile16`, assets.tile`myTile15`)
    tiles.replaceAllTiles(assets.tile`myTile17`, assets.tile`myTile18`)
})
