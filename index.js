document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  
  // const username = document.getElementById('name-input').value
  let joke;

  function fetchJoke(){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
    
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = event.target["name-input"].value
    const newJokeLi = document.createElement('li')
    console.log(username)
      fetchJoke()
      console.log(joke)
    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
  })
  
  fetchJoke()
})



   // if(username === "") return;