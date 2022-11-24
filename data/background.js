
var Snowboarding = {Menu:{}};
Snowboarding.Menu = {
	name:"Menu",
	init:function() {
		this.StartDelay = 100;
		this.app.ext.debug.toggle("off");
		this.visuals.background_set("#000000");
		this.background = this.graphics.load("eh","images/background");
		this.background1 = this.graphics.load("eh1","images/begin");
		this.background2 = this.graphics.load("eh2","images/logo");
		this.sb1 = this.graphics.load("s1","images/steveBG1");
		this.sb2 = this.graphics.load("s2","images/steveBG2");
		this.sb3 = this.graphics.load("s3","images/steveBG3");
		this.sb1.height = 768;
		this.sb2.height = 768;
		this.sb3.height = 768;
		this.f1  = this.graphics.load("f1","images/steveFog1");
		this.f2  = this.graphics.load("f2","images/steveFog2");
		this.f3  = this.graphics.load("f3","images/steveFog3");
		this.c1  = this.graphics.load("c3","images/ryanCG1");
		this.c2  = this.graphics.load("c3","images/ryanCG2");
		this.h = 1;
		this.v = 0.5;
		this.x = 0;
		this.y = 0;
		this.s = 1;
		this.ss = 0;
		this.FogY = 0;
		this.FogY2 = 0;
		this.fader = 0;
		this.fade = false;
		for (var _R=0; _R<_Rain.size;++_R){
			_RainParticles[_R] = Object.create(_Rain.prototype);			
			_RainParticles[_R].x = (Math.random()*this.app.client.setWidth);			
			_RainParticles[_R].y = 0;			
			_RainParticles[_R].a = 0;			
			_RainParticles[_R].l = 0+Math.round(Math.random()*3);			
			_RainParticles[_R].n = 6;			
			_RainParticles[_R].r = 360/6;			
			_RainParticles[_R].rr =(1+Math.random()*3);			
			(Math.random()>0.5)?_RainParticles[_R].dir=1:_RainParticles[_R].dir=-1;			
			_RainParticles[_R].pow=Math.random()*200;			
						
			_RainParticles[_R].delay = Math.random()*400;			
			}
		return true;
		},
	chk:function(result){
		if (result == Number.POSITIVE_INFINITY || result == Number.NEGATIVE_INFINITY)
			return true;
	},
	update:function() {
		if (this.chk(this.app.client.delta))
			this.app.client.delta = 0;
		this.y+=(this.v*this.s)*(this.app.client.delta);
		if (this.y<-this.background.width/4)
			if(this.v<1)
				this.v +=0.001*(this.app.client.delta);
		if (this.y>this.background.width/4)
			if(this.v>-1)
				this.v -= 0.001*(this.app.client.delta);
		if ((App.ext.input.key))
			App.ext.input.keyPower>0?this.app.ext.debug.toggle("off"):this.app.ext.debug.toggle("lite");
		this.FogY-=1*this.app.client.delta;
		this.FogY2 =(1+Math.sin(00+this.FogY/180)*0.5);
		this.FogY3 = 0.5+this.FogY2;
		this.FogY4 =(0.6+Math.sin(00+this.FogY/90)*0.5);
		for (var _R=0; _R<_Rain.size;++_R)
			_RainParticles[_R].update();
		return;
	},
	draw:function() {
		this.visuals.image_ext(this.background,this.app.client.width/2-this.background.width/2+Math.sin(this.y/this.app.client.setWidth)*200,0,1.5,1,0);
		for (var _R=0; _R<_Rain.size;++_R)
			_RainParticles[_R].draw(this.visuals,0),_RainParticles[_R].x-=1;
		this.visuals.image(this.sb3,this.app.client.width/2-this.sb3.width/2+Math.sin(this.y/this.app.client.setWidth)*300,25);
		this.visuals.image_ext(this.f2,this.app.client.setWidth/2-Math.sin(this.y/this.app.client.setWidth)*900,this.app.client.setHeight/1.4-Math.sin(this.FogY/100)*13,1,1,1);
		this.visuals.image_ext(this.f2,this.app.client.setWidth/2+Math.sin(this.y/this.app.client.setWidth)*900,this.app.client.setHeight/1.4-Math.sin(this.FogY/100)*13,1,1,1);
		for (var _R=0; _R<_Rain.size;++_R)
			_RainParticles[_R].draw(this.visuals,1),_RainParticles[_R].x+=1;
		this.visuals.image(this.sb2,this.app.client.width/2-this.sb2.width/2+Math.sin(this.y/this.app.client.setWidth)*600,0);
		this.visuals.image_ext(this.f1,this.app.client.width/2-Math.sin(this.y/this.app.client.setWidth)*800,this.app.client.setHeight-this.f1.height/2-Math.sin(this.FogY/100)*13,1,1,1);
		this.visuals.image_ext(this.f1,this.app.client.width/2+Math.sin(this.y/this.app.client.setWidth)*800,this.app.client.setHeight-this.f1.height/2-Math.sin(this.FogY/100)*13,1,this.FogY3,1);
		this.visuals.image_ext(this.f2,this.app.client.setWidth/2+Math.sin(this.y/this.app.client.setWidth)*300,
										this.app.client.setHeight-this.f2.height/3-Math.sin(this.FogY/100)*13,
										this.FogY3,this.FogY4,1);
		this.visuals.image_ext(this.f2,this.app.client.setWidth/2-Math.sin(this.y/this.app.client.setWidth)*300,
										this.app.client.setHeight-this.f2.height/3-Math.sin(this.FogY/100)*13,
										this.FogY3,this.FogY4,1);
		for (var _R=0; _R<_Rain.size;++_R)
			_RainParticles[_R].draw(this.visuals,2);
		this.visuals.image(this.sb1,this.app.client.width/2-this.sb1.width/2+Math.sin(this.y/this.app.client.setWidth)*600,0);
		this.visuals.image_rotate(this.background2,0,0,0.5+Math.sin(this.y/180)*0.1,1,0);
		this.visuals.image_rotate(this.background2,this.background2.width,this.background2.height,1+Math.sin(this.y/30)*0.1,Math.sin(this.y/30)*7,1,0,0);
		for (var _R=0; _R<_Rain.size;++_R)
			_RainParticles[_R].draw(this.visuals,3);
		this.visuals.image_ext(this.c1,this.app.client.width/2+Math.sin(this.y/this.app.client.setWidth)*900,this.app.client.setHeight/2-this.c1.height/2,1,0.5,1);
		this.visuals.image_ext(this.c2,this.app.client.width/2+Math.sin(this.y/this.app.client.setWidth)*700,this.app.client.setHeight/2-this.c1.height/2,1, 0.5,1);
		this.visuals.rect_gradient(this.app.client.setWidth/2,this.app.client.setHeight/2,this.app.client.setWidth,this.app.client.setHeight,1,0.5,1,"transparent","#5e5fdf",0);
		this.visuals.rect_gradient(this.app.client.setWidth/2,this.app.client.setHeight*0.75,this.app.client.setWidth,this.app.client.setHeight/2,1,0.3,1,"transparent","#FFFFFF",0);
		return;		
	}
};