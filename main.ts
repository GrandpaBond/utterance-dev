function grumble (repeat: number, period: number) {
    if (quiet) {
        quiet = false
        aveGrumble = period / repeat
        for (let index = 0; index < repeat; index++) {
            emitUhOh(randint(100, 300), randint(0.4 * aveGrumble, 1.8 * aveGrumble))
            basic.pause(300)
        }
        quiet = true
    }
}
function giggle (repeat: number, period: number) {
    if (quiet) {
        quiet = false
        aveLaugh = period / repeat
        pitch = randint(400, 600)
        for (let index = 0; index < repeat; index++) {
            span2 = randint(0.4 * aveLaugh, 1.8 * aveLaugh)
            emitLaugh(pitch, span2)
            pitch = 0.9 * pitch
            basic.pause(100)
        }
        quiet = true
    }
}
// utterances
function emitLaugh (pitch: number, ms: number) {
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    0.7 * pitch,
    pitch,
    100,
    255,
    0.9 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
    WaveShape.Square,
    pitch,
    0.7 * pitch,
    255,
    180,
    0.1 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
}
function emitSnore (ms: number) {
    basic.showIcon(IconNames.Asleep)
    music.play(music.createSoundExpression(
    WaveShape.Noise,
    3508,
    715,
    27,
    255,
    0.5 * ms,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
    WaveShape.Noise,
    847,
    5000,
    255,
    10,
    0.5 * ms,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
}
function emitUhOh (pitch: number, ms: number) {
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    1.1 * pitch,
    1.4 * pitch,
    100,
    255,
    0.25 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
    // glottal-stop
    basic.pause(0.2 * ms)
    music.play(music.createSoundExpression(
    WaveShape.Square,
    1.1 * pitch,
    pitch,
    255,
    180,
    0.55 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
}
function emitDoo (pitch: number, ms: number) {
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    3 * pitch,
    pitch,
    200,
    220,
    0.05 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
    WaveShape.Square,
    pitch,
    pitch,
    220,
    180,
    0.95 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
}
// ...stops abruptly
function emitTweet (pitch: number, ms: number) {
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    0.8 * pitch,
    pitch,
    120,
    200,
    0.9 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
}
function sleep (repeat: number, period: number) {
    if (quiet) {
        aveSnore = period / repeat
        quiet = false
        for (let index = 0; index < repeat; index++) {
            emitSnore(0.4 * aveSnore)
            basic.pause(100)
            emitSnore(0.6 * aveSnore)
        }
        quiet = true
    }
}
function dumDiDum (repeat: number, period: number) {
    if (quiet) {
        quiet = false
        aveDiDum = period / repeat
        for (let index = 0; index < repeat; index++) {
            pitch = randint(200, 360)
            span = randint(0.7 * aveDiDum, 1.4 * aveDiDum)
            // mostly "Dum"...
            emitDoo(pitch, 0.5 * span)
            basic.pause(100)
            // .. with occasional "Di"
            emitDoo(1.3 * pitch, 0.2 * span)
            basic.pause(50)
            // mostly "Dum"...
            emitDoo(1.07 * pitch, 0.6 * span)
            basic.pause(300)
        }
        quiet = true
    }
}
function whistle (repeat: number, period: number) {
    if (quiet) {
        quiet = false
        aveTweet = period / repeat
        for (let index = 0; index < repeat; index++) {
            span2 = randint(0.4 * aveTweet, 1.8 * aveTweet)
            emitTweet(randint(600, 1200), span2)
            basic.pause(100)
        }
        quiet = true
    }
}
function abuse (repeat: number, period: number) {
    if (quiet) {
        quiet = false
        aveTweet = period / repeat
        for (let index = 0; index < repeat; index++) {
            emitGrowl(randint(250, 400), randint(0.4 * aveTweet, 1.8 * aveTweet))
            basic.pause(200)
        }
        quiet = true
    }
}
function emitWaah (pitch: number, ms: number) {
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    pitch,
    1.4 * pitch,
    27,
    255,
    0.2 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Curve
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    1.4 * pitch,
    1.1 * pitch,
    255,
    50,
    0.7 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    1.1 * pitch,
    0.3 * pitch,
    50,
    10,
    0.1 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
}
function emitGrowl (pitch: number, ms: number) {
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    0.3 * pitch,
    pitch,
    120,
    200,
    0.15 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    pitch,
    0.9 * pitch,
    200,
    255,
    0.6 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
    WaveShape.Sawtooth,
    0.95 * pitch,
    0.3 * pitch,
    255,
    180,
    0.15 * ms,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
}
let aveTweet = 0
let span = 0
let aveDiDum = 0
let aveSnore = 0
let span2 = 0
let pitch = 0
let aveLaugh = 0
let aveGrumble = 0
let quiet = false
quiet = true
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < -60) {
        basic.showNumber(0)
        giggle(7, 800)
    } else if (input.rotation(Rotation.Pitch) < -30) {
        basic.showNumber(1)
        whistle(15, 3000)
    } else if (input.rotation(Rotation.Pitch) < 0) {
        basic.showNumber(2)
        dumDiDum(8, 3000)
    } else if (input.rotation(Rotation.Pitch) < 30) {
        basic.showNumber(3)
        sleep(5, 7000)
    } else if (input.rotation(Rotation.Pitch) < 60) {
        basic.showNumber(4)
        grumble(6, 6000)
    } else {
        basic.showNumber(5)
        abuse(4, 4000)
    }
    basic.clearScreen()
})
