import React from 'react';
import Worker from 'worker-loader!./findNote.js';

let recorder; //recordButton, stopButton, 
let recordedChunks = [];
const recordingTime = 1000; //every second
//const worker;

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
});

class AudioIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recording : false,
            results : []
        };
    }

    setUpWorker() {
        if (window.Worker) {
            const worker = new Worker();
            worker.onmessage =  e => {
                //get data from worker
                console.log(e.data);
                //this.setState({results : JSON.stringify(e.data)});
            }
            worker.postMessage("Hello");
        } else {
            console.log("no worker support");
        }
    }

    listen() {
        //toggle recording state
        let temp = !this.state.recording;
        this.setState({recording : temp});

        if (temp) {
            console.log("start");
            recorder.start();

            this.setUpWorker();

            setTimeout(() => {
                recorder.requestData(); //calls recording ready every second
                //worker.postMessage("hello"); //send audio data to worker
                recordedChunks = [];
            }, recordingTime);
        } else {
            console.log("end");
            recorder.stop();
            //worker.terminate();
        }
    }

    render() {
        return (
            <>
            <button onClick={(e) => this.listen()}>record</button>
            <p>{this.state.results}</p>
            </>
        );
    }
}

export default AudioIn;
