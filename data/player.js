var Landscape = Object.create(
		{
		x:0,
		yyy:1,
		width:10,
		door:false,
		jitter:0,
		init:function(){
			this.yyy = 1+Math.random()*20;
			//for(var i=45;i>0;i--)
			//	this.append(1,i,0);
			
			//for(var i=45;i>0;i--)
			//	this.blocks.push(Object.create({x:-0+App.client.setWidth/10.3,y:i,seen:0}));
				
				
			for(var i=(App.client.setWidth/7);i>0;i--)
				this.append(i,-5+Math.sin(-i/10)+App.client.setHeight/10.3,0);
				
			for(var i=App.client.setWidth;i>0;i--)
				this.append(i,-15+Math.sin(-i/10)*5+App.client.setHeight/10.3,0);
				
			for (var i=this.array.length-1;i>0;--i)
				this.append(this.array[i][0],this.array[i][1],this.array[i][2]);
				
				
				
			
			for (var i=90;i>0;--i)
				this.append(i,this.yyy+i/3,0);
			for (var i=40;i>0;--i)
				this.append(10+i,i/2,0);
			for (var i=40;i>0;--i)
				this.append(5+i,i-0.5,0);
				
		},
		getVisible:function(){
			var s = 0;
			for (var i=this.blocks.length-1;i>0;--i)
				if (this.blocks[i].seen)
					s++;
			return Math.round((s/this.blocks.length)*100)/100;
		},
		append:function(a,b,c){
			this.blocks.push(Object.create({x:a,y:b,seen:c}));
		},
		loop:function(){
		
		},
		seen:function(b){
			return this.blocks[b].seen;
		},
		show:function(b){
			return this.blocks[b].seen = true;
		},
		blocks:[{x:0,y:0,seen:0},{x:1,y:0,seen:0},{x:1,y:1,seen:0},{x:0,y:1,seen:0}],
		array:[
				    [1 ,1 ,0],
				    [2 ,2 ,0],
				    [3 ,3 ,0],
				    [4 ,4 ,0],
				    [5 ,5 ,0],
				    [6 ,6 ,0],
				    [7 ,7 ,0],
				    [8 ,8 ,0],
				    [9 ,9 ,0],
				    [10,10,0],
				    [11,11,0]
				]
		}
	);

var Player = Object.create({
	x:25,
	y:0,
	w:10,
	h:20,
	canJump:false,
	gravity:6,
	weight:115,
	jumpvel:0,
	jumpspeed:115/7,
	jumpfall:5,
	speed:10,
	velx:0,
	vely:0,
	newx:0,
	newy:0,
	lastx:0,
	lasty:0,
	fall:false,
	free:true,
		win:false,
	wins:function(){
		console.log('eh');
	},
	update:function(){
		
		if ((!App.ext.input.pressed^!App.ext.input.kpressed)){
		//	if (Math.random()*4>2)Landscape.append(this.x+20,this.y/10,0);
			//Landscape.append(this.x,this.y/10,1);
				
				
			this.speed++;
			if ((App.ext.input.keyPower>0))
				this.velx-=App.client.delta*(this.weight/this.gravity/111.1147) * this.speed;
				else
			if ((App.ext.input.keyPower<0))
				this.velx+=App.client.delta*(this.weight/this.gravity/111.1147) * this.speed;
				else
				this.velx+=App.client.delta*(this.weight/this.gravity/111.1147) * (this.speed*(App.ext.input.dist.x/2))/this.weight;
			}
			if ((this.velx>5))
				this.velx=5;
				else
				if ((this.velx<-5))
					this.velx=-5;
		if ((!this.free)&&(App.ext.input.pressed))
		{
			if (App.ext.input.dist.y<-100)
					this.jumpvel=-App.client.delta*this.jumpspeed,this.velx+=App.client.delta*this.speed*(App.ext.input.dist.x/1000),this.free=true,this.fall=true;
			if ((App.ext.input.dist.y>150)&&(this.fall==false))
					this.fall=true,this.jumpvel=App.client.delta*this.jumpfall,this.velx+=App.client.delta*this.speed*(App.ext.input.dist.x/1000),this.free=true;
		}
		if ((!this.free))
			{
			if ((App.ext.input.keydown))
					this.jumpvel=App.client.delta*this.jumpfall,this.free=true;
			if ((App.ext.input.keyup))
					this.jumpvel=-App.client.delta*this.jumpspeed,this.free=true;
			}
		this.vely =( (this.jumpvel) + (this.weight/100) * (this.gravity));
		
		if (this.y+this.vely>200+App.client.setHeight-this.vely)
			this.y = -200 - this.vely;
			else
		if (this.y+this.vely<-200)
			this.y = -200;
			else
		if (this.free)
			this.y += this.vely;

		if (this.x+this.velx<25)
			this.velx=-this.velx;
			else
		if (this.x+this.velx>App.client.setWidth-25)
			this.velx = -this.velx,this.free=true;
			else
			this.x += this.velx;
		
		this.speed*=0.8;
		this.velx*=0.8;
		this.vely*=0.8;
		this.jumpvel*=0.9;	
		
		this.free = true;
		
		this.newx = this.x;
		this.newy = this.y;
		this.x = this.lastx;
		this.y = this.lasty;
		this.x = this.newx;
		this.y = this.newy;
			return;
	},
	draw:function(v){
	
		var s = 5;
		this.y -=s;
		v.rect_ext(-Math.cos(this.x/5)*3+this.x,-Math.sin(this.x/5)*1+this.y-2,this.w/3,this.h/2,1,1,0,"#666666");
		v.rect_ext(Math.cos(this.x/5)*3+this.x,-Math.cos(this.x/5)*1+this.y-2,this.w/3,this.h/2,1,1,0,"#777777");

		v.rect_ext(this.x+this.w*0.2,Math.cos(this.x/5)*0.8+this.y-this.h/2-this.jumpvel,this.w,this.h,1,1,1,"#888888");
	
		v.line(-Math.cos(this.x/5)*3+-this.w/2+this.x+this.jumpvel,this.y+this.jumpvel,1+this.x-this.w/2.5,this.y-this.h*0.7,"#FFFFFF",1);
		v.line(Math.cos(this.x/5)*3+this.w+this.x-this.jumpvel,this.y+this.jumpvel,+this.x+this.w/1.5,this.y-this.h*0.7,"#FFFFFF",1);
		


		v.rect_ext((-this.x+App.ext.input.x)/200+this.x-this.w/2,(App.ext.input.y/110)+this.y-this.h*1.3-this.jumpvel,this.w/1.1,this.h/2,1,1,0,"#DDDDDD");
		
		
		for (var i = 0; i<10;i++)
			if (i%2==0)
			v.rect_ext(i*1+(-this.x+App.ext.input.x)/200+this.x-this.w/2,(App.ext.input.y/110)+this.y-this.h*1.3-this.jumpvel,this.w*0.1,this.h*0.1,1,1,0,"#000000");
			
			
			v.rect_ext(2+(-this.x+App.ext.input.x)/200+this.x-this.w/2,4+(App.ext.input.y/110)+this.y-this.h*1.3-this.jumpvel,this.w*0.1,this.h*0.1,1,1,0,"#000000");
			v.rect_ext(2+(-this.x+App.ext.input.x)/200+this.x,		   4+(App.ext.input.y/110)+this.y-this.h*1.3-this.jumpvel,this.w*0.1,this.h*0.1,1,1,0,"#000000");
			
			v.rect_ext(2.2+(-this.x+App.ext.input.x)/200+this.x-this.w/2,4+(+App.ext.input.y)/100+this.y-this.h*1.3-this.jumpvel,this.w*0.05,this.h*0.05,1,1,0,"#FFFFFF");
			v.rect_ext(2.2+(-this.x+App.ext.input.x)/200+this.x			,4+(+App.ext.input.y)/100+this.y-this.h*1.3-this.jumpvel,this.w*0.05,this.h*0.05,1,1,0,"#FFFFFF");
			
			v.rect_ext(2+(-this.x+App.ext.input.x)/200+this.x-this.w/4,4+(App.ext.input.y/110)+this.y-this.h*1.1-this.jumpvel,this.w*0.1,this.h*0.05,1,1,0,"#000000");
		v.line(2+(-this.x+App.ext.input.x)/200+this.x-this.w/4,4+(App.ext.input.y/110)+this.y-this.h*1.1-this.jumpvel,2+(-this.x+App.ext.input.x)/200+this.x-this.w/4,4+(App.ext.input.y/90)+this.y-this.h*1.0,"#FFFFFF",1);
		this.y +=s;
	}
});
