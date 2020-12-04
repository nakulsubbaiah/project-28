class Boy
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=280;
		this.Height=330;
		this.image=loadImage("boy.png");
		this.Body=Bodies.rectangle(this.x, this.y, this.Width, this.Height )
	}
	display()
	{
			var pos=this.Body.position;
			
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			fill(255)
			image(this.image, 0,0,this.Width, this.Height)
			pop()

	}

}