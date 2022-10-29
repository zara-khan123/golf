var canvas = new fabric.Canvas('myCanvas');
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("hole.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y))
	{
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have Hit the goal!!!!😎";
		document.getElementById("myCanvas").innerHTML.style.borderColor= "red" ;
	}
	else
	{
		if(keyPressed == '84')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '71')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '70')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '72')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
	if(ball_y =>100)
	{
		ball_y = ball_y - block_image_height;
		canvas.remove(ball_obj);
		new_image();	
	}
	}

	function down()
	{
		if(ball_y <=400)
		{
			ball_y = ball_y + block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x => 100)
		{
			ball_x = ball_x - block_image_height;
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <= 1000)
		{
			ball_x = ball_x + block_image_height;
			canvas.remove(ball_obj);
			new_image();	
		}
	}
	
}
