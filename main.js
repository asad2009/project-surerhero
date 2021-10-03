var canvas=new fabric.Canvas("mycanvas");
x=10;y=10;
blockwidth=30 
blockheight=30
var playerobject="";
var blockobject="";
function playerupdate(){
    fabric.Image.fromUrl("https://i.postimg.cc/zDwfFdYY/player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:y,left:x
        });
        canvas.add(playerobject);
    })
}
function newimage(getimage){
    fabric.Image.fromUrl(getimage,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top:y,left:x
        });
        canvas.add(blockobject);
    })
}