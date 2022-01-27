let len = all_songs.length;
let divAllMusic = document.getElementById("all_music");
for (let i = 0; i < len; i++) {
    divAllMusic.innerHTML +=
        `
    <div class="slide musicNow">
        <a href="lovemusic.html?id=${all_songs[i].id}">
            <div style="display: flex; flex-direction: row;padding: 5px 0px;">   
                <p class="all_songs_sl" style="margin-right: 10px;">${all_songs[i].id}. </p>
                <p class="all_songs_name">${all_songs[i].name}</p>
            </div>
        </a>
    </div>
    `;
}



document.getElementById("searchright").addEventListener("keyup", filterSearch);
function filterSearch() {
    let value, name, musicClassName, i;
    value = document.getElementById('searchright').value.toUpperCase();
    musicClassName = document.getElementsByClassName('musicNow');
    for (i = 0; musicClassName.length; i++) {
        name = musicClassName[i].getElementsByClassName('all_songs_name');
        if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
            musicClassName[i].style.display = "flex";
        } else {
            musicClassName[i].style.display = "none";
        }
    }
}




