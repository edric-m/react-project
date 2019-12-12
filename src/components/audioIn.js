import React from 'react';
import Worker from './findNote.worker.js';

let recorder; //recordButton, stopButton, 
let recordedChunks = [];
const recordingTime = 1000; //every second
const worker = new Worker();
let createClock;

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
            //worker = new Worker();
            worker.onmessage =  e => {
                //get data from worker
                console.log(e.data);
                //this.setState({results : JSON.stringify(e.data)});
            }
        } else {
            console.log("no worker support");
        }
    }

    async messageWorker() { //does this method need to be async?
        

        recorder.requestData(); //calls recording ready every second
        
        setTimeout(async() => {
            let superBuffer = new Blob(recordedChunks);
            let audioData = await new Response(superBuffer).arrayBuffer();
            
            let ctx = new (window.AudioContext || window.webkitAudioContext)();
            let decodedAudio = await ctx.decodeAudioData(audioData);
            decodedAudio = decodedAudio.getChannelData(0);
            console.log(decodedAudio);
            worker.postMessage(decodedAudio); //send audio data to worker
            recordedChunks = [];
        }, recordingTime + 10);
    }

    listen() {
        //toggle recording state
        let temp = !this.state.recording;
        this.setState({recording : temp});

        if (temp) {
            console.log("start");
            recorder.start();
            this.setUpWorker();
            createClock = setInterval(this.messageWorker, recordingTime);
        } else {
            console.log("end");
            recorder.stop();
            worker.terminate();
            clearInterval(createClock);
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
