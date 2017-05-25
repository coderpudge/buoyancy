cc.Class({
    extends: cc.Component,

    properties: {
        float:{
            default:null,
            type:cc.RigidBody
        }

    },

    // use this for initialization
    onLoad: function () {

    },

    onEat:function(){
        var rdm = Math.random()*5
        if(this.float.node.x < -50 || this.float.node.x > 50){
            rdm = - rdm;
        }

        let vec = cc.v2(rdm,-10);
        let velocity =  vec.normalize().mulSelf(800);
        this.float.linearVelocity = velocity;
    },
    onEat2:function(){
        var rdm = Math.random()*10
        let vec = cc.v2(0,-rdm);
        let velocity =  vec.normalize().mulSelf(800);
        this.float.linearVelocity = velocity;
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
