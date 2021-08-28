/* global TrelloPowerUp */


import { getCurrentAudio, audioPlayerMax, audioPlayer, setAudio } from './audio.js'
import { percentageCalc } from './percentage.js'

var Promise = TrelloPowerUp.Promise;

// Board button icons
var WHITE_ICON =
  "https://cdn.glitch.com/5a4486ec-9ae8-448d-9b9e-18352ad37668%2Fmusic%20(2).png?v=1630144427611";

var BLACK_ICON =
  "https://cdn.glitch.com/5a4486ec-9ae8-448d-9b9e-18352ad37668%2Fmusic%20(1).png?v=1630144302781";

var BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";

var placeholder = function (t, options) {
  console.log("Accessing stage");
};

// Rendering images into the board
var img_1 = new Image();
img_1.src =
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2Fdiamond.png?v=1630138947894";

TrelloPowerUp.initialize({
  // Starts playing audio and prints a modal containing the overview
  "on-enable": function(t, options) {
    var audio = getCurrentAudio();
    audio.play();
    return t.modal({
      url: './intro.html',
      height: 500,
      title: 'Overview of Harmonise'
    });
  },
  // Pauses audio
  "on-disable": function(t, options) {
    var audio = getCurrentAudio();
    audio.pause();
  },
  // EDIT: Should be deleted or replaced with a make task button

  "board-buttons": function (t, opts) {
    t.lists("all").then(function (lists) {

      const percentage = percentageCalc(lists);
      var oldAudio = setAudio(percentage);
      var audio = getCurrentAudio();
      audio.play();
      oldAudio.pause();

      console.log(percentage);
    });
    return [
      {
        text: "Play/Pause",
        icon: BLACK_ROCKET_ICON,
        callback: audioPlayer
      },
      {
        icon: {
          light: BLACK_ICON,
          dark: WHITE_ICON
        },
        text: "Harmonise",
        callback: function(t) {
          return t.modal({
            title: "Harmonise",
            url: "./modal.html",
            accentColor: "#000000"
          });
        }
      }
    ]
  },
  
  
  "card-badges": function (t, opts) {
    let cardAttachments = opts.attachments; // Trello passes you the attachments on the card
        return t
          .card("name")
          .get("name")
          .then(function (cardName) {
            return [
              {
                // Dynamic badges can have their function rerun
                // after a set number of seconds defined by refresh.
                // Minimum of 10 seconds.
                dynamic: function () {
                  // we could also return a Promise that resolves to
                  // this as well if we needed to do something async first
                  t.lists("all").then(function (lists) {

                    const percentage = percentageCalc(lists);
                    var oldAudio = setAudio(percentage);
                    var audio = getCurrentAudio();

                    if (oldAudio != null) {
                      audio.play();
                      oldAudio.pause();
                    }

                    console.log(percentage);
                  });
                  return {
                    refresh: 1,
                  };
                },
              },
              
              
              
              
              
              
            ];
          
          
          
          });

  }
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
// EDIT: To be replaced with the modal containing the band screen

  
//   "board-buttons" : function (t, opts) {
//     return [

      
//       {
//         // we can either provide a button that has a callback function
//         text: "test",
//         icon: BLACK_ROCKET_ICON,
//         callback: audioPlayerMax
//       }
//     ]
//   }
  


  
  
  
  
  

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
