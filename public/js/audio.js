var audio = new Audio(
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F7_7.mp3?v=1630136495127"
);
// var audio = new Audio(
//   "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F0_7.mp3?v=1630142429925"
// );
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




var audioTestMax = new Audio(
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2FTest.mp3?v=1630142529797"
);



export function audioPlayerMax() {
  if (audioTestMax.paused) {
    audioTestMax.play();
    audio.pause;
  } else {
    audioTestMax.pause();
    audio.play();
  }
};

