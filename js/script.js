let len = all_songs.length;
let divAllMusic = document.getElementById("all_music");
console.log(all_songs)
for (let i = 0; i < len; i++) {
    divAllMusic.innerHTML +=
        `
    <div class="slide">
        <a href="lovemusic.html?id=${all_songs[i].id}">
            <div style="display: flex; flex-direction: row;padding: 5px 0px;">   
                <p class="all_songs_sl" style="margin-right: 10px;">${all_songs[i].id}. </p>
                <p class="all_songs_name">${all_songs[i].name}</p>
            </div>
        </a>
    </div>
    `;
}


