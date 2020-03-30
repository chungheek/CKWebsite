document.addEventListener('DOMContentLoaded', getJokeOfTheDay, true);

function getJokeOfTheDay() {
    var req = new XMLHttpRequest();
    req.open('GET', 'https://jokes.p.rapidapi.com/jod', true);
    req.setRequestHeader('x-rapidapi-host', 'jokes.p.rapidapi.com');
    req.setRequestHeader('x-rapidapi-key', '83f591182dmsh93ec1cf4a9efe6fp10c580jsnc657a48d2d91');
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
            const response = JSON.parse(req.responseText);
            const joke = response.contents.jokes[0].joke.text;
            document.getElementById('joke').textContent = joke;
        } else {
            console.log("Error in network request: " + req.statusText);
            document.getElementById('joke').textContent = 'JOKE NOT FOUND!';
        }
    });
    req.send(null);
}

