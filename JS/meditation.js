const AudioTrack = document.querySelector(".AudioTrack");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const Fill = document.querySelector(".circle-fill circle");
const MeditationTrack = document.querySelectorAll(".audio-picker button");
const timeDisplay = document.querySelector(".time-display");
const FillColour = Fill.getTotalLength();
const timeSelect = document.querySelectorAll(".time-select button");
let fakeDuration = 600;

Fill.style.strokeDashoffset = FillColour;
Fill.style.strokeDasharray = FillColour;
timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
  fakeDuration % 60
)}`;

MeditationTrack.forEach(track => {
  track.addEventListener("click", function() {
    AudioTrack.src = this.getAttribute("data-sound");
    checkPlaying(AudioTrack);
  });
});

play.addEventListener("click", function() {
  checkPlaying(AudioTrack);
});

replay.addEventListener("click", function() {
    restartAudio(AudioTrack);
    
  });


const restartAudio = AudioTrack =>{
    let currentTime = AudioTrack.currentTime;
    AudioTrack.currentTime = 0;
    console.log("restart")

}

timeSelect.forEach(option => {
  option.addEventListener("click", function() {
    fakeDuration = this.getAttribute("data-time");
    timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
      fakeDuration % 60
    )}`;
  });
});

const checkPlaying = AudioTrack => {
  if (AudioTrack.paused) {
    AudioTrack.play();
    play.src = "icons/pause.svg";
  } else {
    AudioTrack.pause();
    play.src = "icons/play.svg";
  }
};

AudioTrack.ontimeupdate = function() {
  let currentTime = AudioTrack.currentTime;
  let elapsed = fakeDuration - currentTime;
  let seconds = Math.floor(elapsed % 60);
  let minutes = Math.floor(elapsed / 60);
  timeDisplay.textContent = `${minutes}:${seconds}`;
  let progress = FillColour - (currentTime / fakeDuration) * FillColour;
  Fill.style.strokeDashoffset = progress;

  if (currentTime >= fakeDuration) {
    AudioTrack.pause();
    AudioTrack.currentTime = 0;
    play.src = "./svg/play.svg";

  }
};