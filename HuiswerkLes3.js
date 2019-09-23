let Pos = 0
let Wins = 0
let Speed = 0
Speed = 500000 / (Wins + 1)

input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (Pos == 2) {
        Wins += 1
        light.setAll(0x00ff00)
        if (Wins == 20) {
            music.jumpUp.loop()
            light.showAnimation(light.cometAnimation, 1850)
            music.stopAllSounds()
            music.magicWand.playUntilDone()
            Wins = 0
        }
    } else if (Wins > 0) {
        Wins += -1
        light.setAll(0xff0000)
    } else {
        light.setAll(0xff0000)
    }
    control.waitMicros(500000)
    light.clear()
    Pos = 0
    light.setPixelColor(Pos, 0x00ff00)
    Speed = 500000 / (Wins + 1)
    console.log(Wins)
})

forever(function () {
    if (Wins != 20) {
        light.clear()
        light.setPixelColor(Pos, 0x00ff00)
        control.waitMicros(Speed)
        Pos += 1
        if (Pos == 10) {
            Pos = 0
        }
    }
})
