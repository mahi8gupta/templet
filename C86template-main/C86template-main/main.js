var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        block_image_oject = Img;
        block_image_oject.scaleToWidth(400);

        block_image_oject.scaleToHeight(310);
        block_image_oject.set({
            top:0,
            left:0
        });
        canvas.add(bock_image_object);
    });
	
	
}

function playSound(){
    x.playSound();
	
}
