var Promise = TrelloPowerUp.Promise;




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
      }
    ];
  },
  "board-buttons": function (t, opts) {
    return t.lists("all").then(function (lists) {
      console.log(JSON.stringify(lists, null, 2));
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




