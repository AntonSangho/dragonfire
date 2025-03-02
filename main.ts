/**
 * LED 시퀀스 실행 상태
 */
// 현재 켤 LED 위치
// 로고가 눌렸을 때 실행되는 함수
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // 이미 실행 중이면 초기화
    if (running) {
        running = false
        current_led = 0
        strip.clear()
        strip.show()
    } else {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        // 새로운 시퀀스 시작
        running = true
        current_led = 0
        strip.clear()
        // 시작할 때 LED 초기화
        strip.show()
    }
})
let current_led = 0
let running = false
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    if (running) {
        if (current_led < 8) {
            // 하나씩 LED 켜기
            strip.setPixelColor(current_led, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            current_led = current_led + 1
            basic.pause(100)
        } else {
            // 각 LED 사이 딜레이
            // 모든 LED가 켜지면 대기 후 초기화
            basic.pause(1000)
            // 모든 LED가 켜진 상태로 1초 대기
            strip.clear()
            strip.show()
            running = false
            current_led = 0
        }
    }
})
