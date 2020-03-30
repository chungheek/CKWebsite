document.addEventListener('DOMContentLoaded', secretFunction);
document.addEventListener('DOMContentLoaded', decryptString);
document.addEventListener('DOMContentLoaded', getSiteBreach, true);

function secretFunction() {
    const secretBox = document.getElementById("box");
    secretBox.addEventListener('mousedown', () =>
        setTimeout(goToSecret, 2000)
    )
}

function goToSecret() {
    window.location.assign("secret.html");
}

function decryptString() {
    document.getElementById('decryptSubmit').addEventListener('click', function (event) {
        let entry = document.getElementById('decryptionEntry').value;
        let decryptedMessage;
        if (isNaN(entry)) {
            decryptedMessage = caesarDecrypt(entry, 5);
        } else {
            decryptedMessage = deHashNumber(entry);
        }
        const decryptResult = document.getElementById('decryptResult');
        decryptResult.textContent = decryptedMessage;
        event.preventDefault();
    })
}

function caesarDecrypt(input, num) {
    let result = '';
    let string = input.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        let letter = string.charCodeAt(i);
        if (letter >= 97 && letter <= 122) {
            letter = letter - num;
            if (letter < 97) {
                letter = 122 - (97 - letter);
            }
        }
        result += String.fromCharCode(letter);
    }
    return result;
}

function deHashNumber(input) {
    let result = '';
    let string = input.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        let letter = string.charCodeAt(i);
        if (letter >= 48 && letter <= 57) {
            letter = letter - 5;
            if (letter < 48) {
                letter = 58 - (48 - letter);
            }
        }
        result += String.fromCharCode(letter);
    }
    return result;
}

function getSiteBreach() {
    document.getElementById('breachSubmit').addEventListener('click', function (event) {
        var req = new XMLHttpRequest();
        let payload = document.getElementById('breachEntry').value;
        req.open('GET', 'https://haveibeenpwned.com/api/v3/breach/' + payload, true);
        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) {
                const response = JSON.parse(req.responseText);
                const description = response.Description;
                document.getElementById('breachResults').textContent = description;
                document.getElementById('breachResults').style.backgroundColor = 'inherit';
            } else {
                console.log("Error in network request: " + req.statusText);
                document.getElementById('breachResults').textContent = 'NOT FOUND! Try again';
                document.getElementById('breachResults').style.backgroundColor = 'red';
            }
        });
        req.send(null);
        event.preventDefault();
    })
}
