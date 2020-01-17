//Have a function that runs automatically that takes the dimensions of the a-box and then builds
//the lines and points on the box
/*
x:+.025
y:-.025
Do 20 more times
*/


//Create 1 line, for testing
function CreateLines(target){
    var mainelement = document.getElementById(target);
    
    for(var i = 0; i < 19; i++){

        var xline = document.createElement('a-entity');
        var yline = document.createElement('a-entity');
        xline.setAttribute("id", "x"+(i+1));
        xline.setAttribute("line", "start:  "+(-0.225+(0.025*i))+" .1251 .225; end:  "+(-0.225+(0.025*i))+" .1251 -.225; color: black");
        yline.setAttribute("id", "y"+(i+1));
        yline.setAttribute("line", "start: -.225 .1251   "+(0.225-(0.025*i))+"; end: .225 .1251  "+(0.225-(0.025*i))+"; color: black")

        mainelement.appendChild(xline);
        mainelement.appendChild(yline);
    }
}

//Create star points, is this much lines of code necessary?
function CreateStarPoints(target){
    var mainelement = document.getElementById(target);

    //First set of points
    for(var i = -1; i < 2; i++){
        var points1 = document.createElement('a-circle');
        var points2 = document.createElement('a-circle');
        var points3 = document.createElement('a-circle');

        points1.setAttribute("id", i+2);
        points1.setAttribute("position", .15*(i)+" .1252 .15");
        points1.setAttribute("rotation","270 0 0");
        points1.setAttribute("color", "black");
        points1.setAttribute("radius", "0.003");

        points2.setAttribute("id", i+5);
        points2.setAttribute("position", .15*(i)+" .1252 0");
        points2.setAttribute("rotation","270 0 0");
        points2.setAttribute("color", "black");
        points2.setAttribute("radius", "0.003");

        points3.setAttribute("id", i+8);
        points3.setAttribute("position", .15*(i)+" .1252 -.15" );
        points3.setAttribute("rotation","270 0 0");
        points3.setAttribute("color", "black");
        points3.setAttribute("radius", "0.003");

        mainelement.appendChild(points1);
        mainelement.appendChild(points2);
        mainelement.appendChild(points3);
    }
}


function getElementId(){
    console.log(document.getElementById("x 1").getAttribute("line"));
}


//var x = document.getElementById("x 1").getAttribute("line");

//console.log(getElementId());