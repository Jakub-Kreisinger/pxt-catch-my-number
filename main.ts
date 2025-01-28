let cislo: number = 10
let pokusy: number = 0
let playAgain: boolean = true
let tajne_cislo: number = randint(1, 100)
basic.showString("Uhodni cislo")

while (playAgain) {

    if (input.buttonIsPressed(Button.A)) {
        cislo -= 1
        whaleysans.showNumber(cislo)
        pokusy += 1
        }

    if (input.buttonIsPressed(Button.B)) {
        cislo += 1
        whaleysans.showNumber(cislo)
        pokusy += 1
        }
    
    if (input.logoIsPressed()) {

        if (cislo < tajne_cislo) {
        basic.showString("<")}

        if (cislo > tajne_cislo) {
            basic.showString(">")}
    
        if (cislo = tajne_cislo) {
            music.play(music.stringPlayable("", 120), music.PlaybackMode.UntilDone)
        basic.showString("WIN")
        whaleysans.showNumber(pokusy)
        }
}}