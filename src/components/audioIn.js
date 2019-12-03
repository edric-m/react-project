import React from 'react';

let recorder; //recordButton, stopButton, 
let recordedChunks = [];

const notes = [
    {note : "C" , freq : 32.7032},
    {note : "C#", freq :  34.6478},
    {note : "D", freq : 36.7081},
    {note : "D#", freq :  38.8909},
    {note : "E", freq : 41.2034},
    {note : "F", freq : 43.6535},
    {note : "F#", freq :  46.2493},
    {note : "G", freq : 48.9994},
    {note : "G#", freq :  51.9131},
    {note : "A" , freq : 55},
    {note : "A#", freq :  58.2705},
    {note : "B", freq : 61.7354}
];

class AudioIn extends React.Component {
    addHarmonics (x, freq) {
        let N = x.length;
        let total = 0;
        //let max = 0;
        for (let k = 1; (k * freq) < N; k*=2) {
            let re = 0;
            let im = 0;
            for (let n = 0; n < N; n++) {
                const angle = (Math.PI * 2 * freq * k * n) / N;
                re += x[n] * Math.cos(angle);
                im -= x[n] * Math.sin(angle);
            }
            //re = re/N;
            //im = im/N;
            let amp = (Math.sqrt(Math.pow(re,2) + Math.pow(im, 2)) * 2) / N;
            total += amp;
            //if (re > max) {
            //    max = re;
            //}
        }
        return total;
    }
    dft(x) {
        //let X = [];
        /*
        const N = x.length;
        let a = 0;
        let d = 0;
        let aFreq = 55;
        let dFreq = 36.71;
        */
        let returnList = [];

        

        for(let i = 0; i < notes.length; i++) {
            let weight = this.addHarmonics(x, notes[i].freq);
            //if(test > 0) {
                let note = notes[i].note;
                returnList.push({ note, weight });
            //}
        }
/*
        for (let k = 1; (k * aFreq) < N; k*=2) {
            let amp = 0;
            let re = 0;
            //let im = 0;
            for (let n = 0; n < N; n++) {
                const angle = (Math.PI * 2 * aFreq * k * n) / N;
                re += x[n] * Math.cos(angle);
                //im -= x[n] * Math.sin(angle);
            }
            //re = re/N;
            //im = im/N;

            amp = re;// + im;
            a += amp;
            
            //X[k] = { amp, k };
        }
        for (let k = 1; (k * dFreq) < N; k*=2) {
            let amp = 0;
            let re = 0;
            //let im = 0;
            for (let n = 0; n < N; n++) {
                const angle = (Math.PI * 2 * dFreq * k * n) / N;
                re += x[n] * Math.cos(angle);
                //im -= x[n] * Math.sin(angle);
            }
            //re = re/N;
            //im = im/N;

            amp = re;// + im;
            d += amp;
        }
        return [{ a, d, returnList }];*/
        return returnList;
        //return X;
    }

    async logStream() {
        let superBuffer = new Blob(recordedChunks);
        let audioData = [];
        let decodedAudio = [];
        let freq = [];

        console.log(recordedChunks);

        audioData = await new Response(superBuffer).arrayBuffer();
        //audioData = new Uint8Array(audioData);

        let ctx = new (window.AudioContext || window.webkitAudioContext)();
        decodedAudio = await ctx.decodeAudioData(audioData);

        decodedAudio = decodedAudio.getChannelData(0);
        console.log(decodedAudio);

        freq = this.dft(decodedAudio);

        console.log(freq);
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
                console.log("recording stop");
            }, 8000);

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
