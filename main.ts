let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.clear()
let count = 1
// 처음에 켤 LED 개수
// 최대 개수에 도달하면 다시 1개부터 시작
basic.forever(function () {
    if (input.logoIsPressed()) {
        strip.clear()
        // count 개수만큼 LED 켜기
        for (let i = 0; i <= count - 1; i++) {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        }
        strip.show()
        basic.pause(100)
        // LED 개수 증가시키기 (최대 8개까지)
        count = count + 1
        if (count > 8) {
            count = 1
        }
    } else {
        strip.clear()
    }
})
