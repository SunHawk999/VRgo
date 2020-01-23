/*Create matrices and entities for sgf formating and stone placement*/

function MakePointEntities(target: string, linenumber: number, width: number, height: number, depth: number){
    let mainelement: any = document.getElementById(target);
    let letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's']; 
    
    //How to do this loop correctly?
    for(let i = 0; i < (linenumber-1); i++)
        for(let j =0; j < (linenumber-1); j++){
            let point = document.createElement('a-circle');
            point.setAttribute('id', letters[i]+letters[j]);
            point.setAttribute('color', 'blue');
            point.setAttribute('radius', '.001');
            point.setAttribute('rotation', '270 0 0');
            //console.log( ((-width/2)+(width/linenumber)) + (i*(width/linenumber))+" "+0.01+" "+((-depth/2)+(depth/linenumber)) + (j*(depth/linenumber)));
            point.setAttribute('position', ((-width/2)+(width/(linenumber+1))) + (i*(width/(linenumber+1)))+" "+(height/2)+" "+((-depth/2)+(depth/(linenumber+1))) + (j*(depth/(linenumber+1))));
            mainelement.appendChild(point);
        }
}