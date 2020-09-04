
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
//   <div class="tabs">
// <div class="topics">
// <span class="title">TRENDING TOPICS:</span>
// <!-- 2. PLACE TABS HERE -->
// </div>
// </div>

//{"topics":["javascript","bootstrap","technology","jquery","node.js"]}

const { default: Axios } = require("axios")

const entryPoint = document.querySelector ('.span')
const topics = document.querySelector ('.topics')
const span = document.querySelector ('.title')

function tabMaker(topic){
const newTab = document.createElement ('div')
newTab.classList.add ('tab')

topics.appendChild(newTab)    

newTab.textContent= topic


return newTab
}

axios.get ('https://lambda-times-api.herokuapp.com/topics')
.then (stuff =>{
    const tabArray= stuff.data.topics
    tabArray.forEach(topic =>{
    const tab = tabMaker (topic)
})
})
.catch(err =>{
    console.log('error',err)
})

