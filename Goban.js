AFRAME.registerComponent('goban', {
    schema: {
        width: {type: 'number', default: 0.5},
        height: {type: 'number', default: 0.2},
        depth: {type: 'number', default: 0.5},
        lines: {type: 'number', default: 19},
        color: {type: 'color', default: '#a87b2d'}
    },

    init: function(){
        //Code for goban shape
        let object = this.el.object3D;

        var data = this.data;
        //var el = this.el;
        this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
        this.material = new THREE.MeshStandardMaterial({color: data.color});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        object.add(this.mesh);

        //Code for grid
        //With GridHelper...
        //Lower fps?
        /*
        var size = .475;
        var grid = new THREE.GridHelper(size, data.lines-1);
        grid.position.y = data.height/2 + .0002;
        object.add(grid);
        */

        //Loop here for that...
        let xlinedist = data.width/(data.lines+1);
        let zlinedist = data.depth/(data.lines+1); 
        
        var lineMaterial = new THREE.LineBasicMaterial({color: "#000000"});
        
        for(var i = 0; i < data.lines; i++){
            //Possible way to do this without creating news instance of geometry?
            //Creates multiple geometries this way...
            //Figure out BufferGeometry
            var xlineGeometry = new THREE.Geometry();
            var zlineGeometry = new THREE.Geometry();
            //xlines
            xlineGeometry.vertices.push(new THREE.Vector3(-(data.width/2 - xlinedist)+(xlinedist*i), data.height/2 + 0.0002, (data.depth/2 - zlinedist)));
            xlineGeometry.vertices.push(new THREE.Vector3(-(data.width/2 - xlinedist)+(xlinedist*i), data.height/2 + 0.0002, -(data.depth/2 - zlinedist)));
            //zlines
            zlineGeometry.vertices.push(new THREE.Vector3(-(data.width/2 - xlinedist), data.height/2 + 0.0002, (data.depth/2 - zlinedist)-(zlinedist*i)));
            zlineGeometry.vertices.push(new THREE.Vector3((data.width/2 - xlinedist), data.height/2 + 0.0002, (data.depth/2 - zlinedist)-(zlinedist*i)));
            
            var xline = new THREE.Line(xlineGeometry, lineMaterial);
            var zline = new THREE.Line(zlineGeometry, lineMaterial);
            object.add(xline);
            object.add(zline); 
        }
    },

    update: function(oldData){
        var data = this.data;
        var el = this.el;

        //If 'oldData is empty then this means we're in the init process
        //No need to update
        if (Object.keys(oldData).length === 0){return;}

        //Geometry-related properties changed. Update the geometry
        if(data.width !== oldData.width || 
           data.height !== oldData.height ||
           data.depth !== oldData.depth){
                el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);
        }

        //Update for grid related changes
        if(data.lines !== oldData.lines){
            
        }

        //Material related properties change
        if(data.color !== oldData.color){
            el.getObject3D('mesh').material.color = new THREE.Color(data.color);
        }
    },

    remove: function(){
        this.el.removeObject3D('mesh');
    }
});