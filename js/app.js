// init controller
var controller = new ScrollMagic.Controller();

// create a scene


var scene_1 = new ScrollMagic.Scene({
        duration: 100, // the scene should last for a scroll distance of 100px
        offset: 50 // start this scene after scrolling for 50px
    })
    .setPin(".main_1 h1") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

var scene_2 = new ScrollMagic.Scene({
        duration: 200, // the scene should last for a scroll distance of 100px
        offset: 400 // start this scene after scrolling for 50px
    })
    .setPin(".main_2") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

var scene_3 = new ScrollMagic.Scene({
        duration: 200, // the scene should last for a scroll distance of 100px
        offset: 1200 // start this scene after scrolling for 50px
    })
    .setPin(".main_3") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

var scene_3 = new ScrollMagic.Scene({
        duration: 200, // the scene should last for a scroll distance of 100px
        offset: 1950 // start this scene after scrolling for 50px
    })
    .setPin(".main_4") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller


var scene_3 = new ScrollMagic.Scene({
        duration: 200, // the scene should last for a scroll distance of 100px
        offset: 3350 // start this scene after scrolling for 50px
    })
    .setPin(".main_5") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller