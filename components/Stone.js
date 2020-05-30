AFRAME.registerComponent('stone', {
    schema: {
        //Base size off of standard go stones
        size: {type: 'number', default: 1},
        width: {type: 'number', default: .01},
        height: {type: 'number', default: 0.0045},
        color: {type: 'string', default: 'blk'}
    },

    init: function(){
        var points = [];
        let object = this.el.object3D;
        data = this.data;
        for(var i = 0; i <= 2*Math.PI; i += Math.PI*0.1){
            points.push(new THREE.Vector2(Math.sin(i/2)*data.width, Math.cos(i/2)*data.height));
        }
        this.geometry = new THREE.LatheBufferGeometry(points);
        this.material = new THREE.MeshLambertMaterial({color:"#000000"});
        this.lathe = new THREE.Mesh(this.geometry, this.material);
        object.add(this.lathe);
    },

    update: function(){

    },

    remove: function(){

    }

});