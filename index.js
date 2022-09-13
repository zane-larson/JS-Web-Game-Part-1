
// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)

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

newImage('assets/green-character.gif', 100, 100)

newImage('assets/tree.png', 200, 300)

newImage('assets/pillar.png', 350, 100)

newImage('assets/pine-tree.png', 450, 200)

newImage('assets/crate.png', 150, 200)

newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)

//make items dissapear when clicked

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', function(){
        object.remove()
    })
}
//add shield and staff images

newItem('assets/sheild.png', 165, 185)

newItem('assets/staff.png', 600, 100)