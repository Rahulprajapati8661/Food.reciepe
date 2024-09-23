//nabvar menu
document.addEventListener('DOMContentLoaded', function() {
    const fabars = document.getElementById('fa-bars');
    const MenuBars = document.querySelector('.menu');

    fabars.addEventListener('click', function(event) {
        MenuBars.style.display = 'block';
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        const isClickedInside = MenuBars.contains(event.target);
        if (!isClickedInside) {
            MenuBars.style.display = 'none';
        }
    });
});
//video play banner
document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    video.muted = true; // Mute the video to prevent autoplay restrictions
    video.autoplay = true;
    video.controls = false; // Hide the controls
    video.addEventListener('ended', function() {
        video.currentTime = 0; // Reset the playback to the beginning
        video.play(); // Play the video again
      });
  });
  
//container button oprat
var container = document.querySelector('.container');
var btnLeft = document.querySelector('.btnleft');
var btnRight = document.querySelector('.btnright');
var scrollAmount = 300;

btnLeft.addEventListener('click', function() {
    container.scrollLeft -= scrollAmount;
    handleButtonOpacity();
});

btnRight.addEventListener('click', function() {
    container.scrollLeft += scrollAmount;
    handleButtonOpacity();
});

function handleButtonOpacity() {

    if (container.scrollLeft === 0) {
        btnLeft.style.opacity = 0.5;
    } else {
        btnLeft.style.opacity = 1;
    }

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        btnRight.style.opacity = 0.5;
    } else {
        btnRight.style.opacity = 1;
    }
}

document.querySelector('.btnleft').addEventListener('click', function() {
    const container = document.querySelector('.container');
    container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

document.querySelector('.btnright').addEventListener('click', function() {
    const container = document.querySelector('.container');
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});
// notification 
document.getElementById('bell-btn').addEventListener('click', function() {
    document.querySelector('.bell-opt').style.display = 'block';
    document.querySelector('.bell-opt').classList.add('show-animation');
});

document.querySelector('.notification-back-btn').addEventListener('click', function() {
    document.querySelector('.bell-opt').style.display = 'none';
});
document.addEventListener('DOMContentLoaded', function() {
    const cameraBtn = document.getElementById('camera-btn');
    const cameraOpt = document.querySelector('.camera-opt');

    cameraBtn.addEventListener('click', function(event) {
        cameraOpt.style.display = 'block';
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        const isClickedInside = cameraOpt.contains(event.target);
        if (!isClickedInside) {
            cameraOpt.style.display = 'none';
        }
    });
});
// camera screen
const cameraScreen = document.querySelector('.cameraScreen');
const cameraBtn = document.getElementById('camera');
const cameraBackBtn = document.getElementById('cmera-back-btn');

// Add click event listener to the camera button
cameraBtn.addEventListener('click', () => {
    cameraScreen.style.display = 'block';
});

// Add click event listener to the camera back button
cameraBackBtn.addEventListener('click', () => {
    cameraScreen.style.display = 'none';
});

// upload files 
var uploadContainer = document.querySelector('.upload-container');
var uploadButton = document.getElementById('upload');
var backButton = document.getElementById('upload-container-back-btn');

// Add event listeners
uploadButton.addEventListener('click', function() {
  uploadContainer.style.display = 'block';
});

backButton.addEventListener('click', function() {
  uploadContainer.style.display = 'none';
});