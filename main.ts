let strip: neopixel.Strip = null
let kleur = 0
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.showColor(kleur)
    kleur = kleur + 1
    basic.pause(50)
})
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, -100)
        basic.pause(100)
    } else {
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, -100)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        }
    }
})
