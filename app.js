const url = 'https://jsonplaceholder.typicode.com/comments'
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is fully loaded, fire fetch request!')
})

const rootDiv = document.getElementById('root')

function s() {
  rootDiv.innerHTML = ''
  for (let i = 1; i <= 2; i++) {
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

    topicTopic.innerHTML += `Topic${i}:`
    topicBody.innerHTML = ' some'
    contentBody.innerHTML += 'Body:'

    topicTopic.appendChild(topicBody)
    content.append(topic)
    content.append(contentBody)
    topic.append(topicTopic)
    rootDiv.append(content)

    content.addEventListener('click', (e) => {
      topic.classList.toggle('border')
      contentBody.classList.toggle('hide')
    })
  }
}

console.log(content)
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
