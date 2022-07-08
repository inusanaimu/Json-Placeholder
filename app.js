window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is fully loaded, fire fetch request!')
})

let rootDiv = document.getElementById('root')
console.log(rootDiv)

const url = 'https://jsonplaceholder.typicode.com/comments'
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
