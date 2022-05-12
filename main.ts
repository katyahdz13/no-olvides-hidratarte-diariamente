input.onButtonPressed(Button.A, function () {
    basic.pause(28800000)
    minutos = 0
})
let minutos = 0
minutos = 0
basic.forever(function () {
    basic.pause(60000)
    minutos += 1
    if (minutos == 120) {
        basic.showString("AGUA")
        minutos = 0
    }
})
