/* global TrelloPowerUp */


import { getCurrentAudio, audioPlayerMax, audioPlayer, setAudio } from './audio.js'
import { percentageCalc } from './percentage.js'


var Promise = TrelloPowerUp.Promise;

var BLACK_ROCKET_ICON =
  "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421";



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
      url: '../../views/intro.html',
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
  "card-buttons": function(t, options) {
    return [
      {
        text: "Hello World!",
        icon: BLACK_ROCKET_ICON,
        callback: audioPlayer
      },{
        text: "Goodbye World!",
        icon: BLACK_ROCKET_ICON,
        callback: audioPlayer
      }
    ];
  },
  "board-buttons": function (t, opts) {
    return t.lists("all").then(function (lists) {
      
      const percentage = percentageCalc(lists);
      setAudio(percentage);
      
      console.log(percentage);
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
