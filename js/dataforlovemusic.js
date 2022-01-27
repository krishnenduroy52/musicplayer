const loveMusic = document.getElementById("lovems");

let nowPlaying = id - 1;

let playMusic = () => {
    loveMusic.innerHTML =
        `
            <img src="/img/${all_songs[nowPlaying].img}.jpg" alt="">
            <p align="center">${all_songs[nowPlaying].name}</p>
            <p align="center">${all_songs[nowPlaying].singer}</p>
        `;

    const progressArea = document.querySelector(".progress-area");

    progressArea.innerHTML =
        `
        <audio id="player" autoplay src="./all_songs/song/${all_songs[nowPlaying].path}.mp3"></audio>
        <div class="player">
            <div class="control">
                <i class="fas fa-play" id="playbtn"></i>
            </div>
            <div class="info">
                <p>${all_songs[nowPlaying].name}</p>
                <div class="bar">
                    <div id="progress"></div>
                </div>
            </div>

            <p id="current">0:00</p>
        </div>
        `;


    var player = document.getElementById("player");
    let progress = document.getElementById("progress");
    let playbtn = document.getElementById("playbtn");

    var playpause = function () {
        if (player.paused) {
            player.play();
        } else {
            player.pause();
        }
    }

    playbtn.addEventListener("click", playpause);

    player.onplay = function () {
        playbtn.classList.remove("fa-play");
        playbtn.classList.add("fa-pause");
    }

    player.onpause = function () {
        playbtn.classList.add("fa-play");
        playbtn.classList.remove("fa-pause");
    }

    let prog;
    player.ontimeupdate = function () {
        var ct = player.currentTime;
        ctime = ct;
        var duration = player.duration;
        current.innerHTML = timeFormat(ct);
        //progress
        prog = Math.floor((ct * 100) / duration);
        progress.style.setProperty("--progress", prog + "%");
    }

    function timeFormat(ct) {
        minutes = Math.floor(ct / 60);
        seconds = Math.floor(ct % 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return minutes + ":" + seconds;
    }
}

playMusic()

var music = document.getElementById("player");
$("#player").bind("ended", function () {
    nowPlaying = nowPlaying + 1;
    if(nowPlaying >= all_songs.length){
        nowPlaying = 0;
    }
    playMusic();
});