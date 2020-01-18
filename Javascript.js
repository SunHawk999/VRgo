//Have a function that runs automatically that takes the dimensions of the a-box and then builds
//the lines and points on the box
/*
x:+.025
y:-.025
Do 20 more times
*/

//Return the chosen attribute of a chosen element
function GetElementAttribute(eltarget, elattribute){
    return document.getElementById(eltarget).getAttribute(elattribute);
}

//Create 1 line, for testing
function CreateLines(target){
    var mainelement = document.getElementById(target);
    
    var height = GetElementAttribute("Goban", "height");
    var width = GetElementAttribute("Goban", "width");
    var depth = GetElementAttribute("Goban", "depth");
    
    for(var i = 0; i < 19; i++){

        var xline = document.createElement('a-entity');
        var yline = document.createElement('a-entity');
        xline.setAttribute("id", "x"+(i+1));    //x y z
        xline.setAttribute("line", "start:  "+(-(width/2 - width/20)+((width/20)*i))+"  "+(height/2 + 0.0002)+" "+(depth/2 - depth/20)+"; end:  "+(-(width/2 - width/20)+((width/20)*i))+" "+(height/2 + 0.0002)+" "+-(depth/2 - depth/20)+"; color: black");
        yline.setAttribute("id", "y"+(i+1));
        yline.setAttribute("line", "start: "+-(width/2 - width/20)+" "+(height/2 + 0.0002)+"  "+((depth/2 - depth/20)-((depth/20)*i))+"; end: "+(width/2 - width/20)+" "+(height/2 + 0.0002)+"  "+((depth/2 - depth/20)-((depth/20)*i))+"; color: black")

        mainelement.appendChild(xline);
        mainelement.appendChild(yline);
    }
}

//Create star points, is this much lines of code necessary?
function CreateStarPoints(target){
    var mainelement = document.getElementById(target);
    var height = GetElementAttribute("Goban", "height");
    var width = GetElementAttribute("Goban", "width");
    var depth = GetElementAttribute("Goban", "depth");

    //First set of points
    for(var i = -1; i < 2; i++){
        var points1 = document.createElement('a-circle');
        var points2 = document.createElement('a-circle');
        var points3 = document.createElement('a-circle');

        points1.setAttribute("id", i+2);
        points1.setAttribute("position", (width/20 * 6)*(i)+" "+(height/2 + 0.0002)+" "+(depth/20 * 6));
        points1.setAttribute("rotation","270 0 0");
        points1.setAttribute("color", "black");
        points1.setAttribute("radius", Math.sqrt(Math.pow(width,2) + Math.pow(depth,2)) * 0.004243);

        points2.setAttribute("id", i+5);
        points2.setAttribute("position", (width/20 * 6)*(i)+" "+(height/2 + 0.0002)+" 0");
        points2.setAttribute("rotation","270 0 0");
        points2.setAttribute("color", "black");
        points2.setAttribute("radius", Math.sqrt(Math.pow(width,2) + Math.pow(depth,2)) * 0.004243);

        points3.setAttribute("id", i+8);
        points3.setAttribute("position", (width/20 * 6)*(i)+" "+(height/2 + 0.0002)+" "+-(depth/20 * 6));
        points3.setAttribute("rotation","270 0 0");
        points3.setAttribute("color", "black");
        points3.setAttribute("radius", Math.sqrt(Math.pow(width,2) + Math.pow(depth,2)) * 0.004243);

        mainelement.appendChild(points1);
        mainelement.appendChild(points2);
        mainelement.appendChild(points3);
    }
}