window.addEventListener("load", () => {
    const Audio = document.querySelectorAll(".Audio");
    const AudioKey = document.querySelectorAll(".AudioKeys div");
    const AudioBall = document.querySelector(".AudioBall");
    const colours = [
      "#60d390",
      "#d36060",
      "#c060d3",
      "#d3d160",
      "#606bd3",
      "#60c2d3"
    ];
  
    AudioKey.forEach((key, index) => {
      key.addEventListener("click", function() {
        Audio[index].currentTime = 0;
        Audio[index].play();
        createAudioBall(index);
      });
    });
  
    const createAudioBall = index => {
      //Create AudioBall
      const Ball = document.createElement("div");
      AudioBall.appendChild(Ball);
      Ball.style.backgroundColor = colours[index];
      Ball.style.animation = `jump 1s ease`;
      Ball.addEventListener("animationend", function() {
        AudioBall.removeChild(this);
      });
    };
  });