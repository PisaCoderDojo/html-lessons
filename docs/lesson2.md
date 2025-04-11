
# Create a project web page
Here’s a step-by-step guide and script to teach students how to build the Morse code web page (`morse.html`). The guide is structured to help students understand the purpose of each section and how to implement it.

---

## **Step 1: Create the Basic HTML Structure**
Explain to students that every web page starts with a basic HTML structure. This includes the `<!DOCTYPE html>` declaration, `<html>`, `<head>`, and `<body>` tags.

### Code:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>PisaCoderDojo: Codice Morse</title>
    </head>
    <body>
        <h1>Gioca con il codice Morse</h1>
    </body>
</html>
```

---

## **Step 2: Add Links to External Resources**
Teach students how to link external CSS and JavaScript files to style the page and add interactivity.

### Code:
```html
<head>
    <title>PisaCoderDojo: Codice Morse</title>
    <script src="js/index.js"></script> <!-- Link to JavaScript file -->
    <link rel="stylesheet" href="../css/style.css" /> <!-- Link to CSS file -->
</head>
```

---

## **Step 3: Add a Header and Navigation**
Explain how to add a header and a link to navigate back to the projects page.

### Code:
```html
<body>
    <h1>Gioca con il codice Morse</h1>
    <p>Torna ai <a href="projects.html">Progetti</a></p>
</body>
```

---

## **Step 4: Add a List of Required Materials**
Show students how to use an unordered list (`<ul>`) to display the materials needed for the project.

### Code:
```html
<p>Cosa hai bisogno per giocare:</p>
<ul>
    <li>1 scheda con micropython installato</li>
    <li>1 Modulino Buzzer</li>
</ul>
```

---

## **Step 5: Add a Section for Decoding Morse Code**
Teach students how to create a section where users can decode Morse code. This includes a button to play the Morse code and an input field to check the answer.

### Code:
```html
<h2>Decodifica il messaggio in codice morse</h2>
<p>Clicca su Play e decodifica il messaggio in codice morse che senti e riportalo. Verifica se hai fatto giusto cliccando su Verifica</p>
<button id="play">Play</button>
<input type="text" id="answer" placeholder="Inserisci la tua risposta" />
<button id="check">Verifica</button>
```

---

## **Step 6: Add a Section for Encoding Morse Code**
Explain how to create a section where users can encode their own messages in Morse code and send them.

### Code:
```html
<h2>Codifica il tuo messaggio</h2>
<p>Invia un messaggio in codice morse al tuo amico. Lui deve capire il messaggio che gli ha inviato</p>
<input type="text" id="input" placeholder="Enter Morse Code" />
<button id="send">Send</button>
```

---

## **Step 7: Add a Fallback for Unsupported Browsers**
Teach students how to handle cases where the browser does not support the Web Serial API.

### Code:
```html
<div id="notSupported" hidden>
    Serial non supportato dal browser
</div>
```

---

## **Step 8: Style the Page**
Guide students to create a CSS file (`style.css`) to style the page. For example:

### Code (`style.css`):
```css
body {
    font-family: sans-serif;
    font-size: 1.12rem;
    line-height: 1.6;
}

h1 {
    text-align: center;
    font-size: 3rem;
    line-height: 1.1;
}

button {
    padding: 10px 20px;
    font-size: 1rem;
    margin: 5px;
    cursor: pointer;
}

input {
    padding: 10px;
    font-size: 1rem;
    margin: 5px;
}
```

---

## **Step 9: Add JavaScript for Interactivity**
Explain how to use JavaScript to add interactivity, such as playing Morse code, checking answers, and sending messages.

### Code (`index.js`):
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const checkButton = document.getElementById('check');
    const sendButton = document.getElementById('send');
    const answerInput = document.getElementById('answer');
    const inputField = document.getElementById('input');

    playButton.addEventListener('click', () => {
        alert("Playing Morse code...");
    });

    checkButton.addEventListener('click', () => {
        const answer = answerInput.value.trim();
        if (answer === "sos") {
            alert("Correct!");
        } else {
            alert("Incorrect! Try again.");
        }
    });

    sendButton.addEventListener('click', () => {
        const message = inputField.value.trim();
        if (message) {
            alert(`Sending message: ${message}`);
        } else {
            alert("Please enter a message to send.");
        }
    });
});
```

---

## **Step 10: Test and Debug**
Encourage students to test their page in a browser and debug any issues. Remind them to use the browser's developer tools (e.g., `F12` in Chrome) to inspect the page and check for errors.

---

### Final Notes:
- This guide introduces students to basic HTML, CSS, and JavaScript concepts.
- Encourage students to experiment with the design and functionality to make the page their own.
- Explain the importance of accessibility and cross-browser compatibility.
