
// // // STEP 3: Create article cards.
// // // -----------------------
// // // Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// // // Study the response data you get back, closely.
// // // You will be creating a card for each article in the response.
// // // This won't be as easy as just iterating over an array though.
// // //
// // // Write a function that takes a single article object and returns the following markup:
// // //
// // // <div class="card">
// // //   <div class="headline">{Headline of article}</div>
// // //   <div class="author">
// // //     <div class="img-container">
// // //       <img src={url of authors image} />
// // //     </div>
// // //     <span>By {author's name}</span>
// // //   </div>
// // // </div>
// // //
// // // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
// // //
// // // Use your function to create a card for each of the articles, and append each card to the DOM.

 const { default: Axios } = require("axios")



const entryPoint = document.querySelector ('div.cards-container')

function cardMaker(articleObj){

    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement ('div')
    const imgContainer = document.createElement ('div')
    const img = document.createElement ('img')
    const authorName = document.createElement ('span')

    //give class and text

    card.classList.add ('cards')
    headline.classList.add('headline')
    author.classList.add ('author')
    imgContainer.classList.add ('img-container')


    headline.textContent= articleObj.headline
    img.src= articleObj.authorPhoto
    authorName.textContent= articleObj.authorName

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(authorName)
    imgContainer.appendChild(img)


//click event to console.log headlines!
    card.addEventListener ('click', event =>{
        console.log(headline)
      
    });

    return card

}

axios.get ("https://lambda-times-api.herokuapp.com/articles")
  .then(stuff=>{
        const infoArray= Object.values(stuff.data.articles)
        //console.log(infoArray)
    
        infoArray.forEach((item) =>{
            let cardInfo= item;
           //console.log (cardInfo[1]);
           cardInfo.forEach((obj) =>{
            let newCard = cardMaker(obj)
            entryPoint.appendChild(newCard)
                    
            }) 

        })      
    })
    
 .catch(err =>{
        console.log('error',err)
    })