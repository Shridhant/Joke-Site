const jokeDiv = document.querySelector('#d1');
const jokeBtn = document.querySelector('#btn');

jokeBtn.addEventListener('click', jokeFn);

function jokeFn() {
    fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(data => {
            console.log('Received joke data:', data);
            if (data && data.setup && data.punchline) {
                const joke = `${data.setup} ${data.punchline}`; // Combine setup and punchline
                jokeDiv.innerHTML = `<p>${joke}</p>`;
            } else {
                jokeDiv.textContent = 'Failed to retrieve joke. Please try again.';
                console.error('Invalid joke data:', data);
            }
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
            jokeDiv.textContent = 'Failed to fetch joke. Please try again.';
        });
}
