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
function CreateLines(target: string): any{
    let mainelement: any = document.getElementById(target);
    let height: any = GetElementAttribute("Goban", "height");
    
    for(let i: number = 0; i < 19; i++){

        let xline = document.createElement('a-entity');
        let yline = document.createElement('a-entity');
        xline.setAttribute("id", "x"+(i+1));
        xline.setAttribute("line", "start: "+(-0.225+(0.025*i))+" "+(height/2 + 0.0002)+" .225; end: "+(-0.225+(0.025*i))+" "+(height/2 + 0.0002)+" -.225; color: black");
        yline.setAttribute("id", "y"+(i+1));
        yline.setAttribute("line", "start: -.225 "+((height)/2 + 0.0002)+" "+(0.225-(0.025*i))+"; end: .225 "+(height/2 + 0.0002)+" "+(0.225-(0.025*i))+"; color: black")

        mainelement.appendChild(xline);
        mainelement.appendChild(yline);
    }
}

//Create star points, is this much lines of code necessary?
function CreateStarPoints(target: string): any{
    let mainelement: any = document.getElementById(target);
    let height: any = GetElementAttribute("Goban", "height");

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