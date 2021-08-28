/* global TrelloPowerUp */

import {
  getCurrentAudio,
  audioPlayerMax,
  audioPlayer,
  setAudio
} from "./audio.js";
import { percentageCalc } from "./percentage.js";

var Promise = TrelloPowerUp.Promise;

// Board button icons
var WHITE_MUSIC =
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2Fmusic-note%20(1).png?v=1630171027228";

var BLACK_MUSIC =
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2Fmusic-note.png?v=1630171028757";

var WHITE_PLAY =
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2Fplay%20(1).png?v=1630171033209";

var BLACK_PLAY =
  "https://cdn.glitch.com/914844dd-5f92-437f-b818-848b7cf5b35a%2Fplay.png?v=1630171033831";


TrelloPowerUp.initialize({
  // Starts playing audio and prints a modal containing the overview
  "on-enable": function(t, options) {
    var audio = getCurrentAudio();
    audio.play();
    return t.modal({
      url: "./intro.html",
      height: 500,
      title: "Harmonise",
    });
  },
  // Pauses audio
  "on-disable": function(t, options) {
    var audio = getCurrentAudio();
    audio.pause();
  },
  // EDIT: Should be deleted or replaced with a make task button

  "board-buttons": function(t, opts) {
    t.lists("all").then(function(lists) {
      // const percentage = percentageCalc(lists);
      // var oldAudio = setAudio(percentage);
      // var audio = getCurrentAudio();
      // audio.play();
      // oldAudio.pause();
      const percentage = percentageCalc(lists);
      var oldAudio = setAudio(percentage);
      var audio = getCurrentAudio();

      if (oldAudio != null) {
        audio.play();
        oldAudio.pause();
      }

      console.log(percentage);
    });
    return [
      {
        text: "Play/Pause",
        icon: {
          light: BLACK_PLAY,
          dark: WHITE_PLAY
        },
        callback: audioPlayer
      },
      {
        icon: {
          light: BLACK_MUSIC,
          dark: WHITE_MUSIC
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
    ];
  },

  "card-badges": function(t, opts) {
    let cardAttachments = opts.attachments; // Trello passes you the attachments on the card
    return t
      .card("name")
      .get("name")
      .then(function(cardName) {
        return [
          {
            // Dynamic badges can have their function rerun
            // after a set number of seconds defined by refresh.
            // Minimum of 10 seconds.
            dynamic: function() {
              // we could also return a Promise that resolves to
              // this as well if we needed to do something async first
              t.lists("all").then(function(lists) {
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
                refresh: 1
              };
            }
          }
        ];
      });
  }
});
