let currentSong=0;

const music=document.querySelector('#audio');
const seekbar=document.querySelector('.seek-bar');
const artist=document.querySelector('.artist');
const songname=document.querySelector('.song-name');
const boxdisk=document.querySelector('.box-disk');
const currenttimes=document.querySelector('.current-time');
const musictime=document.querySelector('.music-time');
const btnplay=document.querySelector('.btn-play');
const btnback=document.querySelector('.btnback');
const btnnext=document.querySelector('.btnnext');
const volume = document.getElementById("volume");
let sound = 0.5;

volume.addEventListener("input", (e) => {
  music.volume = e.target.value;
  //console.log(e.target.value)
});

//volume.addEventListener("cha")

btnplay.addEventListener('click',()=>{
    if(btnplay.className.includes('pause')){
        music.play();
    }else{
        music.pause();
    }
    btnplay.classList.toggle('pause');
    boxdisk.classList.toggle('play');
});

// Cài đặt bài hát

const setSong=(i)=>{
    seekbar.value=0;
    let song=songs[i];
    currentSong=i;
    music.src=song.path;
    songname.innerHTML=song.name;
    artist.innerHTML=song.artist;
    boxdisk.style.backgroundImage=`url('${song.image}')`;

    currenttimes.innerHTML='00:00';
    setTimeout(()=>{
        seekbar.max=music.duration;
        musictime.innerHTML =formatTimes(music.duration);
    }, 300);
}

setSong(0);

const formatTimes=(time)=>{
    let min=Math.floor(time / 60);
    if(min<10){
        min=`0${min}`;
    }
    let sec=Math.floor(time % 60);
    if(sec<10){
        sec=`0${sec}`;
    }
    return `${min}:${sec}`;
}

// Set seek bar
setInterval(() => {
    seekbar.value=music.currentTime;
    currenttimes.innerHTML=formatTimes(music.currentTime);
    if(Math.floor(music.currentTime)==Math.floor(seekbar.max)){
        btnnext.click();
    }
}, 500);

seekbar.addEventListener('change',()=>{
    music.currentTime=seekbar.value;
});

const playMusic=()=>{
    music.play();
    btnplay.classList.remove('pause');
    boxdisk.classList.add('play');
}

// Next and Preview
btnnext.addEventListener('click',()=>{
    if(currentSong>=songs.length-1){
        currentSong=0;
    }else{
        currentSong++;
    }
    setSong(currentSong);
    playMusic();
}); 

btnback.addEventListener('click',()=>{
    if(currentSong<=0){
        currentSong=songs.length-1;
    }else{
        currentSong--;
    }
    setSong(currentSong);
    playMusic();
}); 


var btnOpen = document.querySelector('.open-modal-btn')
var modal = document.querySelector('.modal')
var iconClose = document.querySelector('.modal-header i')
var btnClose = document.querySelector('.modal-footer button')

var tes = document.querySelector('.test')

var nobut = document.querySelector('.no-btn')
var wrapperRect = modal.getBoundingClientRect()
var nobtnRect = nobut.getBoundingClientRect()

nobut.addEventListener('mouseover',()=>{
    // const a = Math.floor(Math.random() * (wrapperRect.width - nobtnRect.width)) + 1;
    // const b = Math.floor(Math.random() * (wrapperRect.height - nobtnRect.height)) + 1;
    var a = Math.floor(Math.random()*800)+1
    var b = Math.floor(Math.random()*400)+1
    nobut.style.left = a + 'px'
    nobut.style.top = b + 'px'

    // nobut.style.left = a+'px'
    // nobut.style.top = b+'px'

    // nobut.style.left = a + "px";
    // nobut.style.top = b + "px";
});

// const x = document.querySelector('button.no-btn')
// x.addEventListener("mouseover", moveHover)






function testthu(e){
    tes.classList.toggle('te')
    
}

function toggleMadal(e){
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleMadal)
btnClose.addEventListener('click', toggleMadal)
// iconClose.addEventListener('click', toggleMadal)
// modal.addEventListener('click', function(e){
//     if(e.target == e.currentTarget){
//         toggleMadal()
//     }
// })



// var tes = document.querySelector('test')

// function testthu(e){
//     tes.classList.toggle('te')

// }
btnClose.addEventListener('click', testthu)

tes.addEventListener('click', testthu)



function changeImage(x,image)
{
    if(x==1)
    {
        image.src = 'anh/anh_2.jpg';
    }
    if(x==2)
    {
        image.src = 'anh/anh_1.jpg';
    }
}

// const typed = new Typed('.multiple-text', {
//     strings: ['Newbie','Programmer'],
//     typeSpeed:100,
//     backSpend:100,
//     backDelay:100,
//     loop:true
// });

// var typed = new Typed('#element', {
//     strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
//     typeSpeed: 50,
//   });

