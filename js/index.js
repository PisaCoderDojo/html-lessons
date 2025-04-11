document.addEventListener('DOMContentLoaded', () => {
    let writer;

    const playButton = document.getElementById('play');
    const checkButton = document.getElementById('check');
    const answerButton = document.getElementById('answer');

    async function connectToBoard() {
        try {
            port = await navigator.serial.requestPort();
            await port.open({ baudRate: 115200 });
            const textEncoder = new TextEncoderStream();
            textEncoder.readable.pipeTo(port.writable);
            writer = textEncoder.writable.getWriter();
        } catch (error) {
            alert("Error while connecting to the board: " + error);
        }
    }

    playButton.addEventListener('click', async () => {
        try {
            if (!writer) {
                await connectToBoard();
            }
            await writer.write("dojo\n");
        } catch (error) {
            alert("Error while sending data: " + error);
        }
    });

    checkButton.addEventListener('click', async () => {
        const message = answerButton.value.trim();
        if (message === "") {
            alert("Please enter a Morse code message to check.");
            return;
        }
        if (message == "dojo"){
            alert("Correct!");
        }
        else{
            alert("Incorrect! Try again.");
        }
    });


    const sendButton = document.getElementById('send');
    const inputField = document.getElementById('input');

    sendButton.addEventListener('click', async () => {
        try {
            if (!writer) {
                await connectToBoard();
            }
            const message = inputField.value.trim();
            if (message === "") {
                alert("Please enter a Morse code message to send.");
                return;
            }
            await writer.write(message + "\n");
        } catch (error) {
            alert("Error while sending data: " + error);
        }
    });



    // import sys
    // from time import sleep_ms

    // from modulino import ModulinoBuzzer

    // buzzer = ModulinoBuzzer()

    // duration = 250              # duration in millisecond
    // dit = duration
    // dah = 3 * duration

    // pause = duration
    // letterPause = 2 * duration
    // wordPause = 6 * duration

    // MORSE_CODE = {
    //     "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".",
    //     "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---",
    //     "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---",
    //     "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-",
    //     "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--",
    //     "z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
    //     "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
    //     "0": "-----", " ": " "  # Space for word separation
    // }

    // def play_morse_code(symbol):
    //     """Play a single Morse code symbol (dit or dah)."""
    //     if symbol == ".":
    //         buzzer.tone(440, dit, True)
    //     elif symbol == "-":
    //         buzzer.tone(440, dah, True)
    //     sleep_ms(pause)


    // while True:
    //     print("Insert the message:")
    //     data = sys.stdin.readline()
    //     for letter in data:
    //     if letter == " ":
    //         sleep_ms(wordPause)
    //     elif letter in MORSE_CODE:
    //         morse = MORSE_CODE[letter]
    //         for symbol in morse:
    //             play_morse_code(symbol)
    //         sleep_ms(letterPause)
    //     else:
    //         print(f"Character '{letter}' not supported.")



});
