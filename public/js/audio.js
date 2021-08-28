var audio = new Audio(
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F7_7.mp3?v=1630136495127"
);


 

    
export function audioPlayer() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

export function audioPlayer2() {
  audio.play();
};





var audioTestMax = new Audio(
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2FTest.mp3?v=1630142529797"
);



export function audioPlayerMax() {
  if (audioTestMax.paused) {
    audioTestMax.play();
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  } else {
    audioTestMax.pause();
    audio.play();
  }
};

