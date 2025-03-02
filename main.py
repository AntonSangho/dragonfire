strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.clear()
count = 1
# 처음에 켤 LED 개수
# 최대 개수에 도달하면 다시 1개부터 시작

def on_forever():
    global count
    strip.clear()
    # count 개수만큼 LED 켜기
    i = 0
    while i <= count - 1:
        strip.set_pixel_color(i, neopixel.colors(NeoPixelColors.RED))
        i += 1
    strip.show()
    basic.pause(1000)
    # LED 개수 증가시키기 (최대 8개까지)
    count = count + 1
    if count > 8:
        count = 1
basic.forever(on_forever)
