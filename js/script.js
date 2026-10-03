document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("birthdayMusic");

    if (!music) return;

    // Start song at 1:25
    const START_TIME = 116;

    music.addEventListener("loadedmetadata", function () {

        music.currentTime = START_TIME;

        // 🎵 AUTO PLAY
        music.play()
            .then(function () {
                console.log("Music started automatically!");
            })
            .catch(function (error) {
                console.log("Autoplay was blocked by the browser.");
            });

    });

});
