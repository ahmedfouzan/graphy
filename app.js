const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

const filePath = __dirname + '/public/videos/'
let inputFile = 'QLearning.mp4'
let outputFile = 'QLearning.mp3'

ffmpeg(filePath + inputFile)
  .noVideo()
  .on('end', function() {
    console.log('Finished processing');
  })
  .on('error', function(err) {
    console.log('an error happened: ' + err.message);
  })
  .save(filePath + outputFile)