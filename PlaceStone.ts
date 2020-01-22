//TODO: Have some code that translates .sgf file coords to goban coords, i.e 
// [aa] to some number, also have it scale with goban size 

//Code to place stones on board
function PlaceStone(target: string, stoneclr: string, position: number[]){
    //Make the stones be childs of the Goban tags
    let goban = document.getElementById(target);
    let stone = document.createElement('a-gltf-model');
    stone.setAttribute("src", stoneclr);
    stone.setAttribute("position", position[0].toString()+" "+position[1].toString()+" "+position[2].toString());

    goban.appendChild(stone);
}