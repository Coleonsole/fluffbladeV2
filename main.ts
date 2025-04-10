tiles.setCurrentTilemap(tilemap`home`)
let mySprite = sprites.create(assets.image`CT`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile14`)
scene.cameraFollowSprite(mySprite)
story.setSoundEnabled(true)
story.startCutscene(function () {
    story.printCharacterText("Yawn", "Cute Thing")
})
controller.moveSprite(mySprite)
