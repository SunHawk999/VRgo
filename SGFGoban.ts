/*Create matrices and entities for sgf formating and stone placement*/

function MakePointEntities(target: string, linenumber: number, width: number, depth: number){
    let letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's']; 
    let widthpoint: number = width;
    let depthpoint: number = width;

    //How to do this loop correctly?
    for(let i = 0; i < (linenumber); i++)
        for(let j =0; j < (linenumber); j++){
            let point = document.createElement('a-circle');
            point.setAttribute('id', letters[i]+letters[j]);
            point.setAttribute('radius', '1');
            point.setAttribute('position', widthpoint+" "+0+" "+depthpoint);

        }

}