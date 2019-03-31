
//Task Bar Nav
function openTNav() {
  document.getElementById("taskbar").style.width = "300px";
}

function closeTNav() {
  document.getElementById("taskbar").style.width = "0";
}



//Song Bar Nav
function openSNav() {
  document.getElementById("songbar").style.width = "300px";
}

function closeSNav() {
  document.getElementById("songbar").style.width = "0";
}


//Resize Function

// Get the video/ wallpaper
var video = document.getElementsByTagName("video")[0];
var wallpaper = document.getElementsByTagName("img")[0];
console.log(wallpaper);


// Change image and resize video
function videoResize() {
  if (window.innerWidth <= 600) {
    video.width = 320;
    video.height = 240;
    wallpaper.src="Images/whitney-houston-vertical-image.jpg";
  } else {
    video.width = 640;
    video.height = 480;
    wallpaper.src="Images/whitney-houston-horizontal-image.jpg"
  }
}
