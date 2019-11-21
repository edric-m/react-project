import React from 'react';

let recorder; //recordButton, stopButton, 
let recordedChunks = [];

class AudioIn extends React.Component {

    logStream() {
        let superBuffer = new Blob(recordedChunks);
        superBuffer.arrayBuffer().then(function(result) {
            let view = new Int8Array(result);
            console.log(view);
        });
    }

    render() {
        function recordingReady(e) {
            if (e.data.size > 0) {
                recordedChunks.push(e.data);
            } else {
            // ...
            }
        }
        
        navigator.mediaDevices.getUserMedia({
            audio: true, video: false
          })
          .then(function (stream) {
            recorder = new MediaRecorder(stream);
            recorder.ondataavailable = recordingReady;
            // listen to dataavailable, which gets triggered whenever we have
            // an audio blob available
            recorder.start();

            setTimeout(() => {
                recorder.stop();
            }, 2000);

        });

        return (
            <>
            <audio autoPlay></audio>
            <button onClick={(e) => this.logStream()}>log stream</button>
            </>
        );
    }
}

export default AudioIn;
