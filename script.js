document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');

    audioPlayer.addEventListener('play', function () {
        console.log('Playing...');
    });

    audioPlayer.addEventListener('pause', function () {
        console.log('Paused...');
    });

    audioPlayer.addEventListener('ended', function () {
        console.log('Track finished...');
    });
});

