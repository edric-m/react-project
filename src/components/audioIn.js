import React from 'react';

let recorder; //recordButton, stopButton, 
let recordedChunks = [];
const recordingTime = 1000; //every second
let clock;
let bufferSize = 400000;
let bufferPos = 0;
let notes = [
    {note : "C" , freq : 16.35, powerTotal : 0},//32.7032},
    {note : "C#", freq : 17.32, powerTotal : 0},//34.6478},
    {note : "D", freq : 18.35, powerTotal : 0},//36.7081},
    {note : "D#", freq : 19.45, powerTotal : 0},//38.8909},
    {note : "E", freq : 20.6, powerTotal : 0},//41.2034},
    {note : "F", freq : 21.83, powerTotal : 0},//43.6535},
    {note : "F#", freq : 23.12, powerTotal : 0},//46.2493},
    {note : "G", freq : 24.5, powerTotal : 0},//48.9994},
    {note : "G#", freq : 25.96, powerTotal : 0},//51.9131},
    {note : "A" , freq : 27.5, powerTotal : 0},//55},
    {note : "A#", freq : 29.14, powerTotal : 0},//58.2705},
    {note : "B", freq : 30.87, powerTotal : 0}//61.7354}
];

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

    async processData() {
        recorder.requestData();
        let superBuffer = new Blob(recordedChunks);
        let audioData = await new Response(superBuffer).arrayBuffer();
        let ctx = new (window.AudioContext || window.webkitAudioContext)();
        let decodedAudio = await ctx.decodeAudioData(audioData);
        decodedAudio = decodedAudio.getChannelData(0);

        result = await findNotePromise(decodedAudio);

        console.log(result);
        //this.setState({results : result});
    }

    findNotePromise(decodedAudio) {
        return new Promise(resolve => {
            let result = [];

            result = this.FindNote(decodedAudio);

            resolve(result);
        });
    }

    FindNote = ( chunk ) => {
        let result = [];

        for ( let i = 0; i < 12; i++ ) {
            let re = 0; //these two should be a running total
            let im = 0;
            for ( let k = 1; k < 128; k*=2 ) {
                for ( let n = 0; n < chunk.length; n++) {
                    bufferPos += n;
                    if (bufferPos === buffersize) {
                        bufferPos = 0;
                    } 
                    const angle = (Math.PI * 2 * notes[i].freq * k * bufferPos) / bufferSize; //n is buffer que position, N is buffer size
                    re += chunk[n] * Math.cos(angle);
                    im -= chunk[n] * Math.sin(angle);
                }
            }
            //calculate power for this note, then append it to the return variable
            let pwr = (Math.pow(re,2) + Math.pow(im,2)) / bufferSize;
            let tempNote = notes[i].note;
            result.push({tempNote,pwr});
        }
        
        //for audio chunk 
        return result; //maybe remove frequencies from object
    }

    messageWorker() { //does this method need to be async?
        

        recorder.requestData(); //calls recordingReady every second
        
        setTimeout(async() => {
            let superBuffer = new Blob(recordedChunks);
            let audioData = await new Response(superBuffer).arrayBuffer(); 
            //let ctx = new (window.AudioContext || window.webkitAudioContext)(); 
            //let decodedAudio = await ctx.decodeAudioData(audioData);
            //decodedAudio = decodedAudio.getChannelData(0);
            console.log(audioData);
            worker.postMessage(audioData, [audioData]); //send audio data to worker
            recordedChunks = [];
        }, 10);
    }

    listen() {
        //toggle recording state
        let temp = !this.state.recording;
        this.setState({recording : temp});

        if (temp) {
            console.log("start");
            recorder.start();
            clock = setInterval(this.processData, recordingTime);
        } else {
            console.log("end");
            recorder.stop();
            clearInterval(clock);
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
