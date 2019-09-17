let Pos = 0
let Speed = 0
let Wins = 0
Speed = 500000 / (Wins + 1)
forever(function () {
    light.clear()
    light.setPixelColor(Pos, 0x00ff00)
    control.waitMicros(Speed)
    Pos += 1
    if (Pos == 10) {
        Pos = 0
    }
})

input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (Pos == 2) {
        Wins += 1
        light.setAll(0x00ff00)
    } else if (Wins > 0) {
        Wins += -1
        light.setAll(0xff0000)
    } else {
        light.setAll(0xff0000)
    }
    control.waitMicros(200000)
    light.clear()
    Pos = 0
    light.setPixelColor(Pos, 0x00ff00)
    Speed = 500000 / (Wins + 1)
    console.log(Wins)
})
