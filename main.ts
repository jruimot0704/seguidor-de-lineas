basic.forever(function () {
    basic.showLeds(`
        # # # . .
        . . # # .
        # # # # .
        # # # # .
        # . # . .
        `)
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(100, -100)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(100, -100)
    }
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(100, -100)
    }
})
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff0000)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ffff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xb09eff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x7f00ff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x007fff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x999999)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ff00)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xff8000)
})
