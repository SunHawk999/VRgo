/*Create matrices and entities for sgf formating and stone placement*/
function MakePointEntities(target: string, linenumber: number, width: number, height: number, depth: number){
    let mainelement: any = document.getElementById(target);
    let letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's']; 
    
    //How to do this loop correctly?
    for(let i = 0; i < (linenumber); i++)
        for(let j =0; j < (linenumber); j++){
            let point = document.createElement('a-circle');
            point.setAttribute('id', letters[i]+letters[j]);
            point.setAttribute('color', 'blue');
            point.setAttribute('radius', '.001');
            point.setAttribute('rotation', '270 0 0');
            point.setAttribute('segments', '1');
            var xpoint = ((-width/2)+(width/(linenumber+1))) + (i*(width/(linenumber+1)));
            var zpoint = ((-depth/2)+(depth/(linenumber+1))) + (j*(depth/(linenumber+1)));
            point.setAttribute('position', xpoint+" "+(height/2)+" "+ zpoint);
            mainelement.appendChild(point);
        }
}