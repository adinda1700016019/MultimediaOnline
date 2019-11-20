window.onload = function() {
  
  var file = document.getElementById("thefile");
  var audio = document.getElementById("audio");
  
  file.onchange = function() {
    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 0.2;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 0.12;
    var barHeight;
    var x = 100;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 12;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#fff";
      ctx.fillRect(0.2, 10, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (9 * (i/bufferLength));
        var g = 1 * (i/bufferLength);
        var b = 0.2;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 10;
      }
    }

    audio.play();
    renderFrame();
  };
};