let groceryItems = [
    {
        price: 3.99,
        itemName: "Cornflakes",
        quantityAvailable: 30,
        isSoldOut: false 
    },
    {
       price: 10.99,
       itemName: "Toilet Paper",
       quantityAvailable: 25,
       isSoldOut: false 
   },
   {
       price: 2.15,
       itemName: "Cheese It's",
       quantityAvailable: 0,
       isSoldOut: true 
   },
   {
       price: 2.59,
       itemName: "Lunchables",
       quantityAvailable: 5,
       isSoldOut: false 
   },
   {
       price: 3.85,
       itemName: "Granola",
       quantityAvailable: 30,
       isSoldOut: false 
   },
   {
       price: 2.15,
       itemName: "Apple Sauce",
       quantityAvailable: 23,
       isSoldOut: false 
   },
   {
       price: 1.05,
       itemName: "Chicken Noodle Soup",
       quantityAvailable: 10,
       isSoldOut: false 
   },
   {
       price: 1.89,
       itemName: "Pickles",
       quantityAvailable: 0,
       isSoldOut: true 
   },
   {
       price: .25,
       itemName: "Ramen",
       quantityAvailable: 30,
       isSoldOut: false 
   },
   {
       price: 2.49,
       itemName: "Peanut Butter",
       quantityAvailable: 25,
       isSoldOut: false 
   },
   {
       price: 2.40,
       itemName: "Milk",
       quantityAvailable: 30,
       isSoldOut: false 
   },
   {
       price: 3.05,
       itemName: "Ice Cream",
       quantityAvailable: 10,
       isSoldOut: false 
   },
   {
        price: 1.15,
        itemName: "Cake Mix",
        quantityAvailable: 7,
        isSoldOut: false 
    },
    {
        price: 1.15,
        itemName: "Trail Mix",
        quantityAvailable: 23,
        isSoldOut: false 
    }
   
]


// arrays vs html collection vs node list do not be afraid!


function displayItems(){
    for(i = 0; i < groceryItems.length; i++){
        let cardWrapper = document.querySelector('.cardWrapper') //                     this
        // let card = document.getElementsByClassName('card') notice difference between      and this
        // console.log(groceryItems[i])
    
        // Creating new elements for each card that will hold individual grocery items
        let card = document.createElement('div')
        let cardTitle = document.createElement('h2')
        let cardPrice = document.createElement('p')
        let cardQuantity = document.createElement('p')
        let inStock = document.createElement('p')
        let lineBreak = document.createElement('hr')


        // DOM Styling 
        cardWrapper.style.display = 'flex'
        cardWrapper.style.justifyContent = 'space-evenly'
        cardWrapper.style.flexWrap = 'wrap'
        cardWrapper.style.padding = "10px, 10px, 10px, 10px" 
        card.style.marginTop = '20vh'
        card.style.background = "lavender" 
        card.style.width = "25vw" 
        card.style.textAlign = 'center'
        card.style.backgroundColor = '#ff90b3'

        
        // Adding our grocery data as innerText
        cardTitle.innerText = groceryItems[i].itemName
        cardPrice.innerText = `$${groceryItems[i].price}`
        cardQuantity.innerText = `${groceryItems[i].quantityAvailable} left`
        inStock.innerText = groceryItems[i].isSoldOut ? 'Sold Out' : 'In Stock'

        // console.log(cardQuantity, cardTitle, cardPrice)


        // Appending all created elements to the cardWrapper div on index.html
        cardWrapper.appendChild(card)
        card.appendChild(cardTitle)
        cardTitle.appendChild(cardPrice)
        cardPrice.appendChild(cardQuantity)
        cardQuantity.appendChild(lineBreak)
        lineBreak.appendChild(inStock)
    }
}

displayItems()