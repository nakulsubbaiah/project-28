class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.Width=450;
		this.Height=630;
		this.image=loadImage("tree.png");
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