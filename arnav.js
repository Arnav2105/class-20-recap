function touching() {
    if((moving.x-fixed.x<moving.width/2+fixed.width/2)&&(fixed.x-moving.x<moving.width/2+fixed.width/2)&& (moving.y-fixed.y<moving.height/2+fixed.height/2)&& (fixed.y-moving.y<moving.height/2+fixed.height/2)) 
    {
      fixed.shapeColor= "red";
      moving.shapeColor = "blue";
    }
    else 
    {
      fixed.shapeColor = "green";
      moving.shapeColor = "orange";
    }
}