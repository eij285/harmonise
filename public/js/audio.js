
// Initialise audio at the very beginning and immediately set it based on percentage completion
var lastCompletion = 0;

var audio = new Audio(
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F0_7.mp3?v=1630142429925"
);
setAudio();
audio.loop = true;
audio.volume = 1;

var lastCompletion = 0;

// Play/pause audioPlayer
export function audioPlayer() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

// Returns current audio to other files
export function getCurrentAudio() {
  return audio;
};


export function getCompletionPercent() {
  var percent = 0.60;
  return percent;
}

// Sets the audio based on completion percentage
export function setAudio(completion) {
  
  // Does not set audio if completion is the same
  if (completion == lastCompletion) {
    return null;
  }
  lastCompletion = completion;
  
  // Stores time so that we can fastSeek the next track to it
  var time = audio.currentTime;
  
  // Switch statements
  var audioPointer = audio
  console.log("Current completion:")
  console.log(completion)
  if (completion < 0.05 || completion == null) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F0_7.mp3?v=1630142429925");
    document.getElementById("alien1").style.visibility = "hidden";
  } else if (completion < 0.15) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F1_7.mp3?v=1630142429925");
  } else if (completion < 0.25) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F2_7.mp3?v=1630142429924");
  } else if (completion < 0.40) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F3_7.mp3?v=1630142433900");
  } else if (completion < 0.60) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F4_7.mp3?v=1630142429925");
  } else if (completion < 0.80) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F5_7.mp3?v=1630142436514");
  } else if (completion < 1) {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F6_7.mp3?v=1630159451702");
  } else {
    audio = new Audio("https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F7_7.mp3?v=1630136495127");
  }
  
  audio.loop = true;
  audio.currentTime = time;
  audio.volume = 1;
  return audioPointer
};


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

