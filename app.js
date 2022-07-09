// I try writing the minimun code required to run this app.

const url = 'https://jsonplaceholder.typicode.com/comments'
const rootDiv = document.getElementById('root')
let counter = 0
let positon = 0

let comments = []

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is fully loaded, fire fetch request!')
  getData()
})

async function getData() {
  const response = await fetch(url)
  const data = await response.json()
  comments = data
  next(comments)
}

// console.log(comments)

// const comments = fetch(url)
//   .then((res) => res.json())
//   .then((data) => {})

function next() {
  positon += 7
  s(comments)
  // console.log(comments)
}
function prev() {
  positon -= 7
  counter -= 14
  s(comments)
}

function s(arr) {
  rootDiv.innerHTML = ''

  for (; counter < positon; counter++) {
    if (counter >= 500) break
    const content = document.createElement('div')
    const topic = document.createElement('div')
    const topicTopic = document.createElement('h4')
    const topicBody = document.createElement('span')
    const contentBody = document.createElement('div')

    content.setAttribute('class', 'content')
    topic.setAttribute('class', 'topic')
    topicTopic.setAttribute('class', 'topicTopic')
    topicBody.setAttribute('class', 'topicBody')
    contentBody.setAttribute('class', 'contentBody')

    topicTopic.innerHTML += `Topic No ${counter + 1}: `
    topicBody.innerHTML = `${arr[counter].name}`
    contentBody.innerHTML = `Body: ${arr[counter].body}`

    topicTopic.appendChild(topicBody)
    content.append(topic)
    content.append(contentBody)
    topic.append(topicTopic)
    rootDiv.append(content)

    content.addEventListener('click', (e) => {
      topic.classList.toggle('border')
      contentBody.classList.toggle('hide')
      if (rootDiv.innerHTML == '') {
        rootDiv.innerHTML = "seems you'er offine"
      }
    })
  }
}
