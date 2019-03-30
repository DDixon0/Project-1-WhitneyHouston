// alert("Problem?");


// //Sticky Nav bar code
// window.onscroll = function() {stickyFunc()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;


// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyFunc() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


//Task Bar Nav
function openTNav() {
    document.getElementById("taskbar").style.width = "250px";
}

function closeTNav() {
    document.getElementById("taskbar").style.width = "0";
}



//Song Bar Nav
function openSNav() {
    document.getElementById("songbar").style.width = "250px";
}

function closeSNav() {
    document.getElementById("songbar").style.width = "0";
}




//Resize video Function

// Get the video
var video = document.getElementsByTagName("video")[0];
var wallpaper = document.getElementsByTagName("img")[0];
console.log(wallpaper);


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
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
