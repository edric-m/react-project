import React from 'react';

//TODO : reduce the number of loops for efficiency

let recorder; //recordButton, stopButton, 
let recordedChunks = [];
const recordingTime = 100; //every half second //try reducing even more
//let clockGetData, clockProcessData;
let bufferSize = 380000;//best value 380000 why?;
let bufferPos = 0;
let canProcess = true;
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
        //do not push if index > 8
        recordedChunks.push(e.data);
        console.log("-----added-----");
        console.log(e.data); //remove oldest chunk
        console.log("count: ", recordedChunks.length);
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

async function loadAudio() {
    let result = [];
    let ctx = new (window.AudioContext || window.webkitAudioContext)();
    try {
        
        let getOldestChunk = await recordedChunks[0].arrayBuffer().then((result) => {
            console.log("-----removed-----");
            console.log(recordedChunks.splice(0,1)); //remove oldest chunk
            console.log("count: ", recordedChunks.length);
            return result;
        });
        
        result = await ctx.decodeAudioData(getOldestChunk).then((newResult) => {
            return newResult.getChannelData(0);
        });
        
            
        
    } catch(err) {
        console.log("error", err.message);
    }
    return result;
}

//TODO: try dividing up this function
async function FindPowerOfNote ( chunk, i ) {
    //let result = [];
    //for ( let i = 0; i < 12; i++ ) {\
    //console.log(chunk.length);
    let re = 0; //these two should be a running total
    let im = 0;
    for ( let k = 1; k < 128; k*=2 ) {
        for ( let n = 0; n < chunk.length; n++) {
            bufferPos ++;
            if (bufferPos === bufferSize) {
                bufferPos = 0;
            } 
            let angle = (Math.PI * 2 * notes[i].freq * k * bufferPos) / bufferSize; 
            //n is buffer que position, N is buffer size
            re += chunk[n] * Math.cos(angle);
            im -= chunk[n] * Math.sin(angle);
        }
    }
    //calculate power for this note, then append it to the return variable
    let pwr = (Math.pow(re,2) + Math.pow(im,2)) / bufferSize;
    //let tempNote = notes[i].note;
    //result.push({tempNote,pwr});
    notes[i].powerTotal += pwr;
    //return {tempNote, pwr};
    //}
    
    
    //for audio chunk 
    //return result; //maybe remove frequencies from object
}

class AudioIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recording : false,
            results : [],
            clockGetData : null, 
            clockProcessData : null
        };
    }

    componentDidMount() {
        this._interval = setInterval(() => {
            this.displayNotes(true);
            this.forceUpdate();
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }

    displayNotes(display) {
        if(display) {
            let max = 0;
            let maxIdx;
            try {
                for (let i = 0; i < 12; i++ ) {
                    if(notes[i].powerTotal > max) {
                        max = notes[i].powerTotal;
                        maxIdx = i;
                    }
                }
                this.setState({results : JSON.stringify(notes[maxIdx])}); 
            } catch (e) {
                console.log("error", e.message);
            }
        } else {
            this.setState({results : []});
        }
    }

    getData() {
        //recorder.requestData(); //doesnt work?
        recorder.stop();
        recorder.start();
        //canProcess = true;
    }

    async processData() {
        
        if(canProcess) {
            canProcess = false;
            let decodedAudio = await loadAudio();
            //apply dft
            //let result = [];// = await FindPowerOfNote(decodedAudio);
            if ( decodedAudio.length < 25000) {
                for (let i = 0; i < 12; i++) {
                    //let temp = await FindPowerOfNote(decodedAudio, i);
                    try{
                        await FindPowerOfNote(decodedAudio, i);
                        //result.push(temp);
                    }catch(e) {
                        console.log("error", e.message);
                    }
                }
            } else {
                console.log("skipped");
            }
            console.log("-------dft--------");
            console.log(notes);
            canProcess = true;
        }  

    }

    listen() {
        //toggle recording state
        let temp = !this.state.recording;
        this.setState({recording : temp});

        if (temp) {
            console.log("start");
            this.displayNotes(false);
            recorder.start();
            this.setState({clockGetData : setInterval(this.getData, recordingTime)}); //put these timer variables inside the component
            this.setState({clockProcessData : setInterval(this.processData, recordingTime+1)});
        } else {
            console.log("end");
            recorder.stop();
            clearInterval(this.state.clockGetData);
            clearInterval(this.state.clockProcessData);
            this.displayNotes(true);
            bufferPos = 0;
            recordedChunks = [];
            notes = [
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
