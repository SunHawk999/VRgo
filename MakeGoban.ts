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

//Find attribute of specific element
function GetElementAttribute(eltarget: string, elattribute: string): string{
    return document.getElementById(eltarget).getAttribute(elattribute);
}

//Create lines on board based on dimensions of board
function CreateLines(target: string, lines: number): any{
    let mainelement: any = document.getElementById(target);
    let height: any = GetElementAttribute(target, "height");
    let width: any = GetElementAttribute(target, 'width');
    let depth: any = GetElementAttribute(target, 'depth');

    let xlinedist: number = width/(lines+1);
    let zlinedist: number = depth/(lines+1);   

    for(let i: number = 0; i < lines; i++){

        let xline = document.createElement('a-entity');
        let zline = document.createElement('a-entity');
        xline.setAttribute("id", "x"+(i+1));
        xline.setAttribute("line", "start: "+(-(width/2 - xlinedist)+(xlinedist*i))+" "+(height/2 + 0.0002)+" "+(depth/2 - zlinedist)+"; end: "+(-(width/2 - xlinedist)+(xlinedist*i))+" "+(height/2 + 0.0002)+" "+-(depth/2 - zlinedist)+"; color: black");
        zline.setAttribute("id", "z"+(i+1));
        zline.setAttribute("line", "start: "+-(width/2 - xlinedist)+" "+(height/2 + 0.0002)+" "+((depth/2 - zlinedist)-(zlinedist*i))+"; end: "+(width/2 - xlinedist)+" "+(height/2 + 0.0002)+" "+((depth/2 - zlinedist)-((zlinedist)*i))+"; color: black")

        mainelement.appendChild(xline);
        mainelement.appendChild(zline);
    }
}

//Create star points
//TODO: Make it so that certain points are made for specific line numbers, 
//i.e. 19x19, 9x9.
function CreateStarPoints(target: string, lines: number): any{
    let mainelement: any = document.getElementById(target);
    let height: any = GetElementAttribute(target, "height");
    let width: any = GetElementAttribute(target, 'width');
    let depth: any = GetElementAttribute(target, 'depth');
    
    let sections: number;
    //Switch cases for line ratios
    switch(lines){
    case(9):
        sections = 2;
        break;
    case(13):
        sections = 3;
        break;
    case(19):
        sections = 6;
        break;
    default:
        console.log("Invalid lines input, check linenumber for MakeGoban().");
        break;
    }
    //Draw points for boards less than or equal to nine lines
    if(lines == 9){
        let xPoint: number = (width/(lines+1)) * sections;
        let zPoint: number = (depth/(lines+1)) * sections;
        let points: number[] = [-1, 1];

        //Draw points
        for(let i of points){
            var points1 = document.createElement('a-circle');
            var points3 = document.createElement('a-circle');
            
            points1.setAttribute("id", String(i+2));
            points1.setAttribute("position", xPoint*(i)+" "+(height/2 + 0.0002)+" "+zPoint);
            points1.setAttribute("rotation","270 0 0");
            points1.setAttribute("color", "black");
            points1.setAttribute("radius", "0.003");

            points3.setAttribute("id", String(i+8));
            points3.setAttribute("position", xPoint*(i)+" "+(height/2 + 0.0002)+" "+-zPoint );
            points3.setAttribute("rotation","270 0 0");
            points3.setAttribute("color", "black");
            points3.setAttribute("radius", "0.003");

            mainelement.appendChild(points1);
            mainelement.appendChild(points3);
        }
            var points2 = document.createElement('a-circle');
            points2.setAttribute("id", String(3));
            points2.setAttribute("position","0 "+(height/2 + 0.0002)+" 0");
            points2.setAttribute("rotation","270 0 0");
            points2.setAttribute("color", "black");
            points2.setAttribute("radius", "0.003");
            mainelement.appendChild(points2);
    }
    
    //Draw points for boards more than nine lines
    else{
        let xPoint: number = (width/(lines+1)) * sections;
        let zPoint: number = (depth/(lines+1)) * sections;

        //Draw points
        for(let i: number = -1; i < 2; i++){
            var points1 = document.createElement('a-circle');
            var points2 = document.createElement('a-circle');
            var points3 = document.createElement('a-circle');
            
            points1.setAttribute("id", String(i+2));
            points1.setAttribute("position", xPoint*(i)+" "+(height/2 + 0.0002)+" "+zPoint);
            points1.setAttribute("rotation","270 0 0");
            points1.setAttribute("color", "black");
            points1.setAttribute("radius", "0.003");

            points2.setAttribute("id", String(i+5));
            points2.setAttribute("position", xPoint*(i)+" "+(height/2 + 0.0002)+" 0");
            points2.setAttribute("rotation","270 0 0");
            points2.setAttribute("color", "black");
            points2.setAttribute("radius", "0.003");

            points3.setAttribute("id", String(i+8));
            points3.setAttribute("position", xPoint*(i)+" "+(height/2 + 0.0002)+" "+-zPoint );
            points3.setAttribute("rotation","270 0 0");
            points3.setAttribute("color", "black");
            points3.setAttribute("radius", "0.003");

            mainelement.appendChild(points1);
            mainelement.appendChild(points2);
            mainelement.appendChild(points3);
        }
    }
}