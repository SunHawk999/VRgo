//Have code make goban, make based on size, 9x9, 13x13, 19x19
function MakeGoban(lines: number, width: number, depth: number, height: number, position: number[], rotation: number[], color: string, wireframe: boolean): void{
    let Goban = document.createElement('a-box');
    Goban.setAttribute("id", "Goban"+lines);
    Goban.setAttribute("width", width.toString());
    Goban.setAttribute("depth", depth.toString());
    Goban.setAttribute("height", height.toString());
    Goban.setAttribute("position", position[0]+" "+position[1]+" "+position[2]);
    Goban.setAttribute("rotation", rotation[0]+" "+rotation[1]+" "+rotation[2]);
    Goban.setAttribute("color", color);
    Goban.setAttribute("wireframe", wireframe.toString());

    document.getElementById('scene').appendChild(Goban);
}


//Have a function that runs automatically that takes the dimensions of the a-box and then builds
//the lines and points on the box
/*
x:+.025
y:-.025
Do 20 more times
*/

function GetElementAttribute(eltarget: string, elattribute: string): string{
    return document.getElementById(eltarget).getAttribute(elattribute);
}

//Create 1 line, for testing
function CreateLines(target: string, lines: number): any{
    let mainelement: any = document.getElementById(target);
    let height: any = GetElementAttribute(target, "height");
    let width: any = GetElementAttribute(target, 'width');
    let depth: any = GetElementAttribute(target, 'depth');

    //Right way to label these?
    let xlinedist: number = width/(lines+1);
    let zlinedist: number = depth/(lines+1);   

    for(let i: number = 0; i < lines; i++){

        let xline = document.createElement('a-entity');
        let zline = document.createElement('a-entity');
        xline.setAttribute("id", "x"+(i+1));
        xline.setAttribute("line", "start: "+(-(width/2 - xlinedist)+(xlinedist*i))+" "+(height/2 + 0.0002)+" "+(width/2 - xlinedist)+"; end: "+(-(width/2 - xlinedist)+(0.025*i))+" "+(height/2 + 0.0002)+" "+-(width/2 - xlinedist)+"; color: black");
        zline.setAttribute("id", "z"+(i+1));
        zline.setAttribute("line", "start: "+-(depth/2 - zlinedist)+" "+((height)/2 + 0.0002)+" "+((depth/2 - zlinedist)-(zlinedist*i))+"; end: "+(depth/2 - zlinedist)+" "+(height/2 + 0.0002)+" "+((depth/2 - zlinedist)-((zlinedist)*i))+"; color: black")

        mainelement.appendChild(xline);
        mainelement.appendChild(zline);
    }
}

//Create star points, is this much lines of code necessary?
function CreateStarPoints(target: string): any{
    let mainelement: any = document.getElementById(target);
    let height: any = GetElementAttribute(target, "height");

    //First set of points
    for(let i: number = -1; i < 2; i++){
        var points1 = document.createElement('a-circle');
        var points2 = document.createElement('a-circle');
        var points3 = document.createElement('a-circle');
        
        points1.setAttribute("id", String(i+2));
        points1.setAttribute("position", .15*(i)+" "+(height/2 + 0.0002)+" .15");
        points1.setAttribute("rotation","270 0 0");
        points1.setAttribute("color", "black");
        points1.setAttribute("radius", "0.003");

        points2.setAttribute("id", String(i+5));
        points2.setAttribute("position", .15*(i)+" "+(height/2 + 0.0002)+" 0");
        points2.setAttribute("rotation","270 0 0");
        points2.setAttribute("color", "black");
        points2.setAttribute("radius", "0.003");

        points3.setAttribute("id", String(i+8));
        points3.setAttribute("position", .15*(i)+" "+(height/2 + 0.0002)+" -.15" );
        points3.setAttribute("rotation","270 0 0");
        points3.setAttribute("color", "black");
        points3.setAttribute("radius", "0.003");

        mainelement.appendChild(points1);
        mainelement.appendChild(points2);
        mainelement.appendChild(points3);
    }
}