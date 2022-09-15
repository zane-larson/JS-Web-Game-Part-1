
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

function backdrop(source, bottom){
    for(let i= 0; i<window.innerWidth; i = i +99){
        let background = newImage(source, [i], bottom);
    }
}
for(let i=0; i<=400; i = i+99){
    let grass = backdrop("assets/grass.png", [i]);
}
for(let i=500; i<window.innerHeight; i = i+99){
    let sky = backdrop("assets/sky.png", [i]);
}


//function to add images into game
function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}
//add images with function to game

let greenChar = newImage('assets/green-character.gif', 100, 100)

let tree = newImage('assets/tree.png', 200, 300)

newImage('assets/pillar.png', 350, 100)

newImage('assets/pine-tree.png', 450, 200)

newImage('assets/crate.png', 150, 200)

newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)

//make items dissapear when clicked


//add shield and staff images

let Ishield = newItem('assets/sheild.png', 165, 185)

newItem('assets/staff.png', 600, 100)



function newItem(url, left, bottom) {
    let item = newImage(url, left, bottom)
    item.addEventListener('click', function () {
        item.remove()
        // let inventoryItem = document.createElement('img')
        // inventoryItem.src = url
        // inventory.append(inventoryItem)
        addToInventory(url)
        
    })
}

function newInventory() {
    let inventory = document.createElement('div')

    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return (inventory)
    
}
newInventory()

let inv = newInventory()

function addToInventory(url){
    let inventoryItem = document.createElement('img')
    inventoryItem.src = url
    inv.append(inventoryItem)
    inventoryItem.addEventListener('click', function (){
        inventoryItem.remove()
        newItem(url, 165, 185)

    })
}



function move(image){
    image.style.position = 'fixed'
    
    function moveToCoordinates(left, bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }

    
    return {
        to: moveToCoordinates
    }
}
let thingThatMoveReturns = move(greenChar)
thingThatMoveReturns.to
thingThatMoveReturns.to(300, 300)



let direction = null;
move(greenChar).to(100, 250)

let x = 100;
let y = 250;
function moveCharacter(character){
if(direction === 'west'){
    x = x - 1
}
if(direction === 'north'){
    y = y + 1
}
if(direction === 'east'){
    x = x + 1
}
if(direction === 'south'){
    y = y - 1
}
character.style.left = x + 'px'
character.style.bottom = y + 'px'
}
setInterval(moveCharacter, 1, greenChar)                                    

document.addEventListener('keydown', function(e){      
    if(e.repeat) return;
    
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})

document.addEventListener('keyup', function(e){
    direction = null
})
