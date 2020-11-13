input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
let NoWall2 = 0
let NoWall1 = 0
let wallholefill: game.LedSprite = null
let bird: game.LedSprite = null
basic.showString("SHAKE!")
bird = game.createSprite(1, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    wallholefill = game.createSprite(0, randint(0, 4))
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        game.setScore(0)
        basic.pause(1000)
        while (bird) {
            let Walls: game.LedSprite[] = []
            NoWall1 = randint(0, 4)
            if (NoWall1 == 4) {
                NoWall2 = NoWall1 - 1
            } else {
                NoWall2 = NoWall1 + 1
            }
            for (let index = 0; index <= 4; index++) {
                if (index != NoWall2 && index != NoWall1) {
                    Walls.push(game.createSprite(4, index))
                }
            }
            for (let index = 0; index < 4; index++) {
                basic.pause(1000)
                for (let Wall of Walls) {
                    Wall.change(LedSpriteProperty.X, -1)
                    if (Wall.get(LedSpriteProperty.X) == 0) {
                        Wall.delete()
                    }
                    if (Wall.isTouching(bird)) {
                        game.gameOver()
                    }
                }
            }
            game.addScore(1)
        }
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.pause(1000)
        while (bird) {
            basic.pause(500)
            bird.change(LedSpriteProperty.Y, 1)
        }
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        bird.set(LedSpriteProperty.Blink, 0)
    }
})
