
let dishList = document.getElementById('listBox')
let currentDisplayedList = "ALL"
let sortAllButton = document.getElementById('allButton')
let sortStartersButton = document.getElementById('startersButton')
let sortEntreesButton = document.getElementById('entreesButton')
let sortDessertsButton = document.getElementById('dessertsButton')
let listTitle = document.getElementById('listTitle')

let starterDishes = dishes.filter(function (dish) { return dish['course'] == 'Starters' })
console.log(starterDishes)
let entreeDishes = dishes.filter(function (dish) { return dish['course'] == 'Entrees' })
console.log(entreeDishes)
let dessertDishes = dishes.filter(function (dish) { return dish['course'] == 'Desserts' })
console.log(dessertDishes)

let starterItems = starterDishes.map(function (dish) {

    let menuItem = `<li class='listItem'>
        <div class="itemText">
            <h3 class="itemName">${dish['title']}</h3>
            <h3>$${dish['price']}</h3>
            <p>${dish['description']}</p>
        </div>
        
        <img src=${dish['imageURL']} alt="">
        
    </li>`


    return menuItem
})


let entreeItems = entreeDishes.map(function (dish) {
    let menuItem = `<li class='listItem'>
        <div class="itemText">
            <h3 class="itemName">${dish['title']}</h3>
            <h3>$${dish['price']}</h3>
            <p>${dish['description']}</p>
        </div>
        
        <img src=${dish['imageURL']} alt="">
        
    </li>`


    return menuItem
})

let dessertItems = dessertDishes.map(function (dish) {
    let menuItem = `<li class='listItem'>
        <div class="itemText">
            <h3 class="itemName">${dish['title']}</h3>
            <h3>$${dish['price']}</h3>
            <p>${dish['description']}</p>            
        </div>
        
        <img src=${dish['imageURL']} alt="">
        
    </li>`


    return menuItem
})
starterItems = starterItems.join('')
entreeItems = entreeItems.join('')
dessertItems = dessertItems.join('')
allItems = starterItems + entreeItems + dessertItems

console.log(starterItems)
function displayList() {

    if (currentDisplayedList == 'ALL') {

        dishList.innerHTML = allItems
    }
    if (currentDisplayedList == 'STARTER') {
        dishList.innerHTML = starterItems
    }
    if (currentDisplayedList == 'ENTREE') {
        dishList.innerHTML = entreeItems
    }
    if (currentDisplayedList == 'DESSERT') {
        dishList.innerHTML = dessertItems
    }
}

sortAllButton.addEventListener('click', function () {
    listTitle.innerHTML = 'All Menu Items'
    currentDisplayedList = 'ALL'
    displayList()
})
sortStartersButton.addEventListener('click', function () {
    listTitle.innerHTML = 'Starters'
    currentDisplayedList = 'STARTER'
    displayList()
})
sortEntreesButton.addEventListener('click', function () {
    listTitle.innerHTML = 'Entrees'
    currentDisplayedList = 'ENTREE'
    displayList()
})
sortDessertsButton.addEventListener('click', function () {
    listTitle.innerHTML = 'Desserts'
    currentDisplayedList = 'DESSERT'
    displayList()
})

listTitle.innerHTML = 'All Menu Items'
displayList()
//dishList.insertAdjacentHTML('beforeend', dishItems)