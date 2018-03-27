var StartLayer=cc.Layer.extend({
    ctor:function(){
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.RED));
        var label = new cc.LabelTTF('这是第一个场景',"",50);
        label.x = size.width*0.5;
        label.y = size.height*0.7;
        this.addChild(label);
        var menuItem = new cc.MenuItemFont("切换到第一场景",function(){
            cc.director.runScene(new MainScene());
            // cc.director.runScene(new cc.TransitionProgressInOut(2,new StartScene()));
        },this);
        var menu = new cc.Menu(menuItem);
        this.addChild(menu);
        menu.y = size.height*0.3;
        return true;

    }
});


var StartScene =cc.Scene.extend({
    ctor:function(){
        this._super();
        var layer = new StartLayer();
        this.addChild(layer);
    }
});
