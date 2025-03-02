strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.clear()
strip.show()

running = False  # LED 시퀀스 실행 상태
current_led = 0  # 현재 켤 LED 위치

# 로고가 눌렸을 때 실행되는 함수
def on_logo_pressed():
    global running, current_led
    
    # 이미 실행 중이면 초기화
    if running:
        running = False
        current_led = 0
        strip.clear()
        strip.show()
    else:
        # 새로운 시퀀스 시작
        running = True
        current_led = 0
        strip.clear()  # 시작할 때 LED 초기화
        strip.show()
        
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_forever():
    global current_led, running
    
    if running:
        if current_led < 8:
            # 하나씩 LED 켜기
            strip.set_pixel_color(current_led, neopixel.colors(NeoPixelColors.RED))
            strip.show()
            current_led = current_led + 1
            basic.pause(100)  # 각 LED 사이 딜레이
        else:
            # 모든 LED가 켜지면 대기 후 초기화
            basic.pause(1000)  # 모든 LED가 켜진 상태로 1초 대기
            strip.clear()
            strip.show()
            running = False
            current_led = 0
            
basic.forever(on_forever)