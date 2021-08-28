var audioTestMax = new Audio(
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2FTest.mp3?v=1630142529797"
);



var audioPlayerMax = function() {
  if (audioTestMax.paused) {
    audioTestMax.play();
  } else {
    audioTestMax.pause();
  }
};