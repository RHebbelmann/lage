input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    music.playTone(131, music.beat(BeatFraction.Eighth))
})
basic.forever(function () {
    basic.showString("W")
    basic.showNumber(input.rotation(Rotation.Pitch))
    basic.showString("R")
    basic.showNumber(input.rotation(Rotation.Roll))
})
