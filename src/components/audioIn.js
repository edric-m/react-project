import React from 'react';

let recorder; //recordButton, stopButton, 
let recordedChunks = [];

const notes = [
    {note : "C" , freq : 16.35},//32.7032},
    {note : "C#", freq : 17.32},//34.6478},
    {note : "D", freq : 18.35},//36.7081},
    {note : "D#", freq : 19.45},//38.8909},
    {note : "E", freq : 20.6},//41.2034},
    {note : "F", freq : 21.83},//43.6535},
    {note : "F#", freq : 23.12},//46.2493},
    {note : "G", freq : 24.5},//48.9994},
    {note : "G#", freq : 25.96},//51.9131},
    {note : "A" , freq : 27.5},//55},
    {note : "A#", freq : 29.14},//58.2705},
    {note : "B", freq : 30.87}//61.7354}
];

class AudioIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            identifiedNotes: []
        };
    }

    addHarmonics (x, freq) {
        let N = x.length;
        let total = 0;

        for (let k = 1; (k * freq) < N; k*=2) {
            let re = 0;
            let im = 0;
            for (let n = 0; n < N; n++) {
                const angle = (Math.PI * 2 * freq * k * n) / N;
                re += x[n] * Math.cos(angle);
                im -= x[n] * Math.sin(angle);
            }
            //let amp = (Math.sqrt(Math.pow(re,2) + Math.pow(im, 2)) * 2) / N;
            let pwr = (Math.pow(re,2) + Math.pow(im,2)) / N; //may be better to determine based on power
            //maybe use a combination of amp and pwr
            total += pwr;
        }
        return total;
    }
    dft(x) {
        let returnList = [];

        for(let i = 0; i < notes.length; i++) {
            let weight = this.addHarmonics(x, notes[i].freq);
            let note = notes[i].note;
            returnList.push({ note, weight });
        }

        return returnList;
    }

    async logStream() {
        let superBuffer = new Blob(recordedChunks);
        let audioData = [];
        let decodedAudio = [];
        let freq = [];

        //console.log(recordedChunks);

        audioData = await new Response(superBuffer).arrayBuffer();
        //audioData = new Uint8Array(audioData);

        let ctx = new (window.AudioContext || window.webkitAudioContext)();
        decodedAudio = await ctx.decodeAudioData(audioData);

        decodedAudio = decodedAudio.getChannelData(0);
        //console.log(decodedAudio);

        console.log("analysing...");
        freq = this.dft(decodedAudio);
        console.log(freq);

        //this.setState({identifiedNotes : freq});

        //clear recorded audio for reuse
        recordedChunks = [];
    }

    record() {
        recorder.start();
        console.log("recording...");
            setTimeout(() => {
                recorder.stop();
                console.log("recording finished!");
            }, 8000);
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
        });

        return (
            <>
            <audio autoPlay></audio>
            <button onClick={(e) => this.logStream()}>log stream</button>
            <button onClick={(e) => this.record()}>record</button>
            </>
        );
    }
}

export default AudioIn;
