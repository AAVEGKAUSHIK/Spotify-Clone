// Change background color of the range input thumb based on its value
document.getElementById('myRange').addEventListener('input', function() {
    // Get the value and calculate the color stop
    var value = (this.value - this.min) / (this.max - this.min);
    var color = 'linear-gradient(to right, #1ED760 0%, #1ED760 ' + (value * 100) + '%, #636363 ' + (value * 100) + '%, #636363 100%)';
    
    // Apply the color to the range input
    this.style.background = color;
  });

  
  var audio = document.getElementById('audioPlayer');

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Change background color of the range input thumb based on its value
document.getElementById('myRange').addEventListener('input', function() {
  // Get the value and calculate the color stop
  var value = (this.value - this.min) / (this.max - this.min);
  var color = 'linear-gradient(to right, #1ED760 0%, #1ED760 ' + (value * 100) + '%, #636363 ' + (value * 100) + '%, #636363 100%)';
  
  // Apply the color to the range input
  this.style.background = color;
});
