/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";

var audio = new Audio(
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2F7_7.mp3?v=1630136495127"
);

var audioPlayer = function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};


var audioPlayer2 = function() {

    audio.play();

};




TrelloPowerUp.initialize({
  "on-enable": function(t, options) {
    return [
      {
        callback: audioPlayer2
      }
      
    ]
  },
  "card-buttons": function(t, options) {
    return [
      {
        text: "Hello World!",
        icon: BLACK_ROCKET_ICON,
        callback: audioPlayer
      }
    ];
  }

  // Start adding handlers for your capabilities here!
  // "card-buttons": function(t, options) {
  //   return t.set("member", "shared", "hello", "world").then(function() {
  //     return [
  //       {
  //         icon: BLACK_ROCKET_ICON,
  //         text: "Estimate Size",
  //         callback: function(t) {
  //           return t.popup({
  //             title: "Estimation",
  //             url: "estimate.html"
  //           });
  //         }
  //       }
  //     ];
  //   });
  // }
});
