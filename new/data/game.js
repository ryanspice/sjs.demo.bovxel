var Game = {};
Game = {
	name:"Game",
	scrollspeed: 0.05,
	init:function(){
	
		this.Player = Player;
		this.reoccuringalpha = 0;
		this.size = 10;
					if (!App.ext.useragent.ie){
		setTimeout(function(){
			App.client._Main.track0.stop();
			App.client._Main.track1.play();
			},1000)}
		Landscape.init();
		this.win == false;
			this.hud = this.graphics.load("hud","images/hud");
			this.hud.width = App.client.setWidth;
	},
	update:function(app){
	
		if (Landscape.x>-99)
			Landscape.x-=this.scrollspeed;
		//sconsole.log(Snowboarding);
		this.reoccuringalpha++;
		this.Player.update();
	},
	draw:function(app){
		//this.Player.x+=0.1;
		var yview = 100;
		var xview = 90;
		//this.visuals.rect(this.app.client.setWidth/2,this.app.client.setHeight/2,this.app.client.setWidth, this.app.client.setHeight,"000FFF");
		//this.visuals.rect(this.app.client.setWidth/2,this.app.client.setHeight/2,this.app.client.setWidth, this.app.client.setHeight,"FFFFFF");
		
		
		
		//this.visuals.rect_ext(100,this.app.client.setHeight-300,200, 300,"666666",1,0,0);
		
		var d = {x:0,y:0};
		for (var i = 0;i<App.client.setWidth/10;i++)
			for (var ii = 0;ii<App.client.setHeight/10;ii++)
				{
				var bg = 1;

				bg = 0.4*Math.sin(i*ii);
				var a = Math.sin(20*i*ii+this.Player.x);
				var aa = Math.round((this.app.client.Math.Vector.Difference({x:10.3*i,y:10.3*ii},{x:this.Player.x,y:this.Player.y}).x/120)*100)/100;
				var aa2 = Math.round((this.app.client.Math.Vector.Difference({x:10.3*i,y:10.3*ii},{x:this.Player.x,y:this.Player.y}).y/yview)*100)/100;
				var b = (aa+aa2);
				aa = Math.sqrt(aa*aa);
				aa2 = Math.sqrt(aa2*aa2);
				if(this.squareCheck(i,ii)){
								var s = 1.1-(aa+aa2)*0.9;
								
								//this.visuals.rect_ext(0+(10.3*i),0+(10.3*ii),10,10,1,aa2+aa,1,"FFF")
								
								//this.visuals.rect_ext(0+(10.3*i),1+(10.3*ii),10,10,1,0+(aa2+aa),1,"000")
								
								if ((1-(aa2+aa))>0)
								{
								this.visuals.rect_ext(+(10.3*i),1+(10.3*ii),10,10,1,1-(aa2+aa),1,"#040404")
								if (1-(aa2+aa)<0.2)
									{
									if (this.Player.velx!=0)
									this.visuals.rect_ext(
													+(10.3*i),
													1+(10.3*ii),
														10+Math.random()*this.Player.velx,
														10+Math.random()*5+Math.sin(+(10.3*i)),
														1,1-(aa2+aa),1,"#000000");
				var r = (-((10* i)+(0.3*i))+this.Player.x);
				r = r*r/5000;
				if (r<0)
					r = 0;
									this.visuals.rect_ext(
													+(10.3*i),
													1+(10.3*ii),
														0+(this.Player.x-(10.3*i))*0.6,
														10,
														1,1-(aa2+aa),1,"#000000");
														
									}
								
								}
								else
								this.visuals.rect_ext(0+(10.3*i),0+(10.3*ii),10,10,1.0,bg-0.1,1,"#000000")
								//else                                         
								//this.visuals.rect_ext(0+(10.3*i),1+(10.3*ii),10,10,1,1,1,"FFF")     
								
								//this.visuals.rect_ext(0+(10.3*i),0+(10.3*ii),10,10,1,1-aa2+aa,1,"000")
								//this.visuals.rect_ext(0+(10.3*i),0+(10.3*ii),10,10,1,(aa2+aa)*360,1,"000")
								//this.visuals.rect_ext(0+(10.3*i),0+(10.3*ii),10,10,1,1,1,"000")ddd
								//if ((1-(aa2+aa))<0)
								//this.visuals.rect_ext(0+(10.3*i),0+(10.3*ii),10,10,1,0.1,1,"2F2")
																	
																	//if (!Landscape.seen(b))
																	//	Landscape.show(b);
																	//if(i%4==0)
																	//if(ii%4==0)
																	//this.visuals.text(1-Math.round(b*100)/100,
																	////Math.round((this.app.client.Math.Vector.Difference({x:10*i,y:10*ii},{x:this.Player.x,y:this.Player.y}).x/180)*10)/10,
																	//	0+(10.3*i),0+(10.3*ii),"00F");
																	}else
										{
										
										//this.visuals.rect_ext(0+(10.3*i),0+(10.3*ii),10,10,1.01,Math.sin(i/ii),1,"333");
										this.visuals.rect_ext(0+(10.3*i),0+(10.3*ii),10,10,1.01,bg,1,"#333333");
										//this.visuals.rect_ext(0+(10.3*i),0+(10.3*ii),
										//						10,10,
										//							1.01,1-Math.sin(this.x+this.y)*0.5,1,"333");
										
										}
				
				}
		for (var b = Landscape.blocks.length-1;b>=0;--b)
		{
			Landscape.blocks[b].x = Landscape.blocks[b].x + Landscape.x;
			if (Landscape.blocks[b].x<0)
				continue;
			if (Landscape.seen(b)==true)
				{
				var LY = this.app.client.visuals.fixY((10*Landscape.blocks[b].y) + (0.3*Landscape.blocks[b].y));
				var LX = this.app.client.visuals.fixX((10*Landscape.blocks[b].x) + (0.3*Landscape.blocks[b].x));
				var LH = this.app.client.visuals.fixW(10);
				var fx = this.app.client.visuals.fixX(this.Player.x);
				var fy = this.app.client.visuals.fixY(this.Player.y);
				var SI = (10.3*App.client.scale)/2;
				var SI = this.app.client.visuals.fixW(10.3)/2;
				if ((fy>(LY-SI)) && (fy<LY+App.client.delta*SI*1.5) && 
					//(this.Player.x-10<SI* Landscape.blocks[b].x) && (this.Player.x+10>SI* Landscape.blocks[b].x))
					(fx>LX-SI) && (fx<LX+SI))
					this.Player.free = false,this.Player.fall=false,this.Player.y = (10*Landscape.blocks[b].y) + (0.3*Landscape.blocks[b].y);
					//this.Player.free = true;
				var r = (-((10* Landscape.blocks[b].x)+(0.3* Landscape.blocks[b].x))+this.Player.x);
				
				r = r*r/5000;
				if (r<0)
					r = 0;
				if ((this.Player.y-yview<10.3* Landscape.blocks[b].y) && (this.Player.y+yview/2>10.3* Landscape.blocks[b].y) && 
					(this.Player.x-xview*0.7<10.3* Landscape.blocks[b].x) && (this.Player.x+xview*0.7>10.3* Landscape.blocks[b].x))
					{
					this.visuals.rect_ext((10* Landscape.blocks[b].x)+(0.3* Landscape.blocks[b].x),
											0+(10* Landscape.blocks[b].y)+(0.3* Landscape.blocks[b].y),10+5*r/500,10,1+1*r/100,1-1.2*r,1,"#000000");
											
					}
					else
					if (b%2==0){
					this.visuals.rect_ext((10* Landscape.blocks[b].x)+(0.3* Landscape.blocks[b].x),
											0+(10* Landscape.blocks[b].y)+(0.3* Landscape.blocks[b].y),
												10-Math.sin((-Landscape.x-this.Player.x+ Landscape.blocks[b].x)/200),
												10-Math.sin((-this.Player.y+ Landscape.blocks[b].y)/200),
												1,
									0.3-(Math.sin((-this.Player.x+ Landscape.blocks[b].x)/10))*0.1,
														1,"#666666");
														}
					else{
					this.visuals.rect_ext((10* Landscape.blocks[b].x)+(0.3* Landscape.blocks[b].x),
											0+(10* Landscape.blocks[b].y)+(0.3* Landscape.blocks[b].y),
												10-Math.sin((-Landscape.x-this.Player.x+ Landscape.blocks[b].x)/200),
												10-Math.sin((-this.Player.y+ Landscape.blocks[b].y)/200),
												1,
									0.3-(Math.cos((-this.Player.x+ Landscape.blocks[b].x)/10))*0.1,
														1,"#666666");
														}
										
				}
				else
				{
				if ((this.Player.y-yview/2<10.3* Landscape.blocks[b].y) && (this.Player.y+yview/2>10.3* Landscape.blocks[b].y) && 
					(this.Player.x-xview/2<10.3* Landscape.blocks[b].x) && (this.Player.x+xview/2>10.3* Landscape.blocks[b].x))
					{
						this.visuals.rect_ext((10.3* Landscape.blocks[b].x),0+(10.3*Landscape.blocks[b].y),10,10,1.51,0.9-Math.sin(Landscape.blocks[b].x)*0.8,1,"#000000");
						Landscape.show(b);
					if (!App.ext.useragent.ie){
						setTimeout(function(){
							App.client._Main.track2.play();
							},100)}
						this.visuals.rect_ext((10.3* Landscape.blocks[b].x),0+(10.3*Landscape.blocks[b].y),10,10,1.11,0.9-Math.sin(Landscape.blocks[b].x)*0.8,1,"#0000FF");
					}
				}
			
				if ((fy>(LY-SI)) && (fy<LY+SI*1.5) && 
					(fx-(this.Player.velx*App.client.delta)>LX-SI) && (fx-(this.Player.velx*App.client.delta)/2<LX+SI))
					{
						if (Landscape.blocks[b].seen)
						this.visuals.rect_ext((10.3* Landscape.blocks[b].x),0+(10.3*Landscape.blocks[b].y),10,10,1.11,0.9-Math.sin(Landscape.blocks[b].x)*0.8,1,"#000000");
					}
		Landscape.blocks[b].x = Landscape.blocks[b].x - Landscape.x;
		
		}
				
		this.Player.draw(this.visuals);
		this.visuals.image(this.hud,0,App.client.setHeight-this.hud.height*0.8);
		
		
		this.visuals.rect(50,App.client.setHeight-15,50,10,"#AAAAAA");
		
		this.visuals.rect(148,App.client.setHeight-15,50,10,"#AAAAAA");
		
		this.visuals.text(Landscape.getVisible()+"%",125,App.client.setHeight-25,"#FFFFFF");
		
		
		
		this.visuals.text("Level: " +Math.round(-(Landscape.x/Landscape.width)*10)+"%",25,App.client.setHeight-25,"#FFFFFF");
		
		
		
		this.visuals.rect(148,App.client.setHeight-15,Landscape.getVisible()*50,10,"#FF0000");
		
		
		if (-Landscape.x<100)
		this.visuals.rect(50,App.client.setHeight-15,(-Landscape.x/2.05),9,"#FF0000");
			else{
			console.log('eh');
				//this.win = true;
				//this.Player.wins();
			for(var i=0;i<App.client.setWidth/10;i--)
				this.append(-Landscape.x,-5+Math.sin(-i/10)+App.client.setHeight/10.3,0);
		this.visuals.rect(App.client.setWidth/2,App.client.setHeight/2,9,"FF0000");
				}
		return true;
	},
	xdist:function(x){
		return (Math.sqrt((this.Player.x-(10.3*x))*(this.Player.x-(10.3*x)))<160);
	},
	ydist:function(y){
		return Math.sqrt((this.Player.y-(10.3*y))*(this.Player.y-(10.3*y)))<120-5;
	},
	squareCheck:function(i,ii){
		var a = this.xdist(i);
		var b = this.ydist(ii);
		if (a+b==2)
			return {x:i,y:ii};
		if (a+b==1)
			return false;
	},
}