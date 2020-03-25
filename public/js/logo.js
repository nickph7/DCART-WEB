var velocity = 0;
var theta = 0;
var currentAngle = 0;
var logo;

window.onload = animate;

function animate(){
  // define logo background
  logo = document.getElementsByClassName("logo-back")[0];
  // listen for mouse movement and get cursor location
  if (window.Event) {
	document.captureEvents(Event.MOUSEMOVE);
  };
	document.onmousemove = getCursorXY;
};

function getCursorXY(e) {
  // get current mouse coordinates
	var mouseCoordX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	var mouseCoordY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
  // get center of current logo coordinates
  var logoCoordX = window.scrollX + (logo.getBoundingClientRect().left + logo.getBoundingClientRect().right)/2;
  var logoCoordY = window.scrollY + (logo.getBoundingClientRect().top + logo.getBoundingClientRect().bottom)/2;
  // transform mouse coordinates relative to logo center coordinates
  var relMouseCoordX = mouseCoordX - logoCoordX;
  var relMouseCoordY = logoCoordY - mouseCoordY;
  // calculate current distance from cursor to logo center
  // var dist = Math.sqrt(Math.pow(relMouseCoordX, 2) + Math.pow(relMouseCoordY, 2));
  // calulate angle in RAD of cursor relative to logo
  // NOTE: arctan value as to be adjusted based whether cursor is in quadrant 1, 4 or 2, 3.
  theta = -Math.atan(relMouseCoordY/relMouseCoordX);
  if (relMouseCoordX > 0){
    theta += Math.PI/2;
  }
  else{
    theta += 3 * Math.PI/2;
  }
};

function refreshData()
{
  // Check whether shortest path is clockwise or counter clockwise
  // Determine rotational velocity based on angular distance of logo to cursor to ease the animation
  if(Math.abs(theta - currentAngle)<Math.PI){
    velocity = (theta - currentAngle) / 10;
  }
  else if(theta - currentAngle>0){
    velocity = -((2*Math.PI-theta)+currentAngle) / 10;
  }
  else{
    velocity = ((2*Math.PI-currentAngle)+theta) / 10;
  }
  currentAngle = (currentAngle + velocity)%(2*Math.PI);

  // Change logo current rotation
  if(logo){
    logo.style.transform = "rotate("+ currentAngle +"rad)";
  }

  // Pause for 16ms for a 60fps framerate
  setTimeout(refreshData, 16);
}

refreshData();
