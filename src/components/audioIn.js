import React from 'react';

let recorder; //recordButton, stopButton, 
let recordedChunks = [];

class AudioIn extends React.Component {
    dft(x) {
        //let X = [];
        const N = x.length;
        let a = 0;
        let d = 0;
        let aFreq = 55;
        let dFreq = 36.71;

        for (let k = 1; (k * aFreq) < N; k++) {
            let amp = 0;
            let re = 0;
            let im = 0;
            for (let n = 0; n < N; n++) {
                const angle = (Math.PI * 2 * aFreq * k * n) / N;
                re += x[n] * Math.sin(angle);
                im -= x[n] * Math.cos(angle);
            }
            re = re/N;
            im = im/N;

            amp = re;// + im;
            a += amp;
            
            //X[k] = { amp, k };
        }
        for (let k = 1; (k * dFreq) < N; k++) {
            let amp = 0;
            let re = 0;
            let im = 0;
            for (let n = 0; n < N; n++) {
                const angle = (Math.PI * 2 * dFreq * k * n) / N;
                re += x[n] * Math.sin(angle);
                im -= x[n] * Math.cos(angle);
            }
            re = re/N;
            im = im/N;

            amp = re;// + im;
            d += amp;
        }

        return [{ a, d }];
        //return X;
    }

    async logStream() {
        let superBuffer = new Blob(recordedChunks);
        let audioData = [];
        let freq = [];

        audioData = await new Response(superBuffer).arrayBuffer();
        audioData = new Int8Array(audioData);

        console.log(audioData);

        freq = this.dft(audioData);

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
