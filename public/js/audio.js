

var audio = new Audio(
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F7_7.mp3?v=1630136495127"
);
// var audio = new Audio(
//   "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F0_7.mp3?v=1630142429925"
// );
// setAudio();
audio.loop = true;
audio.volume = 1;

export function audioPlayer() {
  // audio.fastseek(30);
  console.log(audio.duration);
  if (audio.paused) {
    // audio.fastSeek(115);
    audio.play();
  } else {
    audio.pause();
  }
};

export function audioPlayer2() {
  audio.play();
};

export function getCurrentAudio() {
  return audio;
}

export function getCompletionPercent() {
  var percent = 0;
  return percentage;
}

export function setAudio() {
  var completion = getCompletionPercent();
  var time = audio.currentTime
  if (completion < 0.05) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F0_7.mp3?v=1630142429925");
  } else if (completion < 0.15) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F1_7.mp3?v=1630142429925");
  } else if (completion < 0.30) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F2_7.mp3?v=1630142429924");
  } else if (completion < 0.50) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F3_7.mp3?v=1630142433900")
  } else if (completion < 0.75) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F4_7.mp3?v=1630142429925")
  } else if (completion < 100) {
    audio = new Audio()
  } else {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F7_7.mp3?v=1630136495127");
  }
  audio.fastSeek(time);
}



var audioTestMax = new Audio(
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2FTest.mp3?v=1630142529797"
);



export function audioPlayerMax() {
  if (audioTestMax.paused) {
    audioTestMax.play();
    
    if (!audio.paused) {
      audio.pause;
      
    }
    
    
  } else {
    audioTestMax.pause();
    //audio.play();
  }
};

