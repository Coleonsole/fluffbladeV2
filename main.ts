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
	
})
let CT: Sprite = null
tiles.setCurrentTilemap(tilemap`home`)
info.setLife(3)
CT = sprites.create(assets.image`CT`, SpriteKind.Player)
let BT = sprites.create(img`
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
story.startCutscene(function () {
    story.printCharacterText("Yawn", "Cute Thing")
    story.printCharacterText("Happy Birthday, Cute Thing. You better come outside", "Battle Thing")
    story.printCharacterText("Ok, Dad", "Cute Thing")
    story.cancelCurrentCutscene()
})
controller.moveSprite(CT)
