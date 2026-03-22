document.querySelector('#getJoke').addEventListener('click', getJoke)

function getJoke() {
  fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(res => res.json())
    .then(data => {
      document.querySelector('#setup').innerText = data.setup
      document.querySelector('#punchline').innerText = data.punchline
    })
    .catch(err => {
      console.log(err)
    })
}