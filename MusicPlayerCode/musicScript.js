
let progress = document.getElementById("progress");
//let song = document.getElementById("songs");
//let ctrlIcon = document.getElementById("ctrlIcon");

// let ctrl = document.getElementsByClassName("ctrlIcon1")
let songs = document.getElementsByClassName("songs1");

//
let ctrl = document.getElementsByClassName("fa-solid fa-play")[0];
console.log("data", ctrl);

// let ctrl = document.getElementById("ctrlIcon1") // Fetch elements with class 'ctrlIcon1'
// console.log("data",ctrl);
// Check if elements exist in the HTMLCollection
// if (ctrl.length > 0) {
//     // Iterate over each element in the HTMLCollection
//     for (let i = 0; i < ctrl.length; i++) {
//         let element = ctrl[i];
//         // Access classList property of each element
//         let classList = element.classList;
//         console.log("ClassList of Element", i + 1, ":", classList);
//         // You can further process the classList as needed
//     }
// } else {
//     console.log("No elements found with class 'ctrlIcon1'");
// }





songs.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}
console.log("found: ", ctrl)

console.log(HTMLCollection.ctrl[0]);

if(ctrl.classList.value.contains('ctrlIcon1')){
    console.log("true it contains");
}else{
    console.log("nope");
}

function playPause() {
    if (ctrl.classList.contains("fa-pause")) {
        songs.pause();
        ctrl.classList.remove("fa-pause");
        ctrl.classList.add("fa-play");
    }
    else {
        songs.play();
        ctrl.classList.add("fa-pause");
        ctrl.classList.remove("fa-play");
    }
}


if(songs.play()){
    setInterval(()=>{
        progress.value = songs.currentTime;
    },500);
}

progress.onchange = function(){
    songs.play();
    songs.currentTime = progress.value;
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");
}



