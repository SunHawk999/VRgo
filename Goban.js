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

        let xlinedist = data.width/(data.lines+1);
        let zlinedist = data.depth/(data.lines+1); 
        
        var lineMaterial = new THREE.LineBasicMaterial({color: "#000000"});
        
        for(var i = 0; i < data.lines; i++){
            //Possible way to do this without creating news instance of geometry?
            //Creates multiple geometries this way...
            //Figure out BufferGeometry
            var xlineGeometry = new THREE.BufferGeometry();
            var zlineGeometry = new THREE.BufferGeometry();
            var xpoints = new Float32Array(6);
            var zpoints = new Float32Array(6);

            xpoints = [-(data.width/2 - xlinedist)+(xlinedist*i),
                        data.height/2 + 0.0002,
                        (data.depth/2 - zlinedist),
                       -(data.width/2 - xlinedist)+(xlinedist*i),
                        data.height/2 + 0.0002,
                        -(data.depth/2 - zlinedist)];
            
            zpoints = [-(data.width/2 - xlinedist),
                         data.height/2 + 0.0002,
                        (data.depth/2 - zlinedist)-(zlinedist*i),
                        (data.width/2 - xlinedist),
                        data.height/2 + 0.0002,
                        (data.depth/2 - zlinedist)-(zlinedist*i)];

            xlineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(xpoints, 3));
            var xline = new THREE.Line(xlineGeometry, lineMaterial);
            
            zlineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(zpoints, 3));
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