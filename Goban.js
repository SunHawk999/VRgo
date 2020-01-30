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
        //Loop here for that...
        var lineMaterial = new THREE.LineBasicMaterial({color: "#000000"});
        var lineGeometry = new THREE.Geometry();
        lineGeometry.vertices.push(new THREE.Vector3(0, 0, 0));
        lineGeometry.vertices.push(new THREE.Vector3(1, 1, 1));
        var line = new THREE.Line(lineGeometry, lineMaterial);
        object.add(line); 
        
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

        //Material related properties change
        if(data.color !== oldData.color){
            el.getObject3D('mesh').material.color = new THREE.Color(data.color);
        }
    },

    remove: function(){
        this.el.removeObject3D('mesh');
    }
});