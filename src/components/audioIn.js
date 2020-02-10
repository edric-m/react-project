import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

//TODO : reduce the number of loops for efficiency

let recorder; //recordButton, stopButton, 
let recordedChunks = [];
const recordingTime = 100; //every half second //try reducing even more
//let clockGetData, clockProcessData;
let bufferSize = 380000;//best value 380000 why?;
let bufferPos = 0;
let canProcess = true;
let notes = [
    {note : "C" , freq : 130.813, powerTotal : 0},//32.7032},
    {note : "C#", freq : 138.591, powerTotal : 0},//34.6478},
    {note : "D", freq : 146.832, powerTotal : 0},//36.7081},
    {note : "D#", freq : 155.563, powerTotal : 0},//38.8909},
    {note : "E", freq : 82.4069, powerTotal : 0},//41.2034},
    {note : "F", freq : 87.3071, powerTotal : 0},//43.6535},
    {note : "F#", freq : 92.4986, powerTotal : 0},//46.2493},
    {note : "G", freq : 97.9989, powerTotal : 0},//48.9994},
    {note : "G#", freq : 103.826, powerTotal : 0},//51.9131},
    {note : "A" , freq : 110, powerTotal : 0},//55},
    {note : "A#", freq : 116.541, powerTotal : 0},//58.2705},
    {note : "B", freq : 123.471, powerTotal : 0}//61.7354}
];
let foundNotes = [];

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
    for ( let k = 1; k < 128; k*=2 ) { //k < 128
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
            //button : "listen",
            recording : false,
            results : [],
            clockGetData : null, 
            clockProcessData : null
        };
    }

    /*
    componentDidMount() {
        this._interval = setInterval(() => {  //what if we rename _interval?
            this.displayNotes(true);
            this.forceUpdate(); //remove?
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this._interval);
    }
    */

    displayNotes(display) {
        if(display) {
            let max = 0;
            let maxIdx;
            let secondIdx;
            let thirdIdx;
            let fourthIdx;
            try {
                for (let i = 0; i < 12; i++ ) {
                    if(notes[i].powerTotal > max) {
                        max = notes[i].powerTotal;
                        fourthIdx = thirdIdx;
                        thirdIdx = secondIdx;
                        secondIdx = maxIdx;
                        maxIdx = i;
                    }
                }

                //add decay to power
                for (let i = 0; i < 12; i++ ) {
                    notes[i].powerTotal = notes[i].powerTotal * 0.8; //TODO: sort of works, improve this, faster is better
                }

                this.setState({results : JSON.stringify(notes[maxIdx]) + 
                    JSON.stringify(notes[secondIdx]) + 
                    JSON.stringify(notes[thirdIdx]) + 
                    JSON.stringify(notes[fourthIdx])}); 

                //push top four notes to fretboard
                //foundNotes = [notes[maxIdx].note, notes[secondIdx].note, notes[thirdIdx].note];

                //push only top note to fretboard
                foundNotes = [notes[maxIdx].note];

                this.props.chooseNote(foundNotes);
                
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
            //TODO: change the two variables below back
            this.setState({clockGetData : setInterval(this.getData, recordingTime)}); //put these timer variables inside the component
            this.setState({clockProcessData : setInterval(this.processData, recordingTime+1)});

            //TODO: put in own function
            this._interval = setInterval(() => {  //what if we rename _interval?
                this.displayNotes(true);
                this.forceUpdate(); //remove?
            }, 500);

            //this.setState({button: "stop"});
        } else {
            console.log("end");
            recorder.stop();
            clearInterval(this.state.clockGetData);
            clearInterval(this.state.clockProcessData);
            clearInterval(this._interval);
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

            //this.setState({button: "listen"});
            this.setState({results: " "});
        }
    }

    //TODO: should be className= not class=, but className doesn't work???
    render() {
        let icon = faMicrophone;
        let showResults = this.state.recording ? "visible" : "hidden";
        return (
            <>
            <div class="float">
                <FontAwesomeIcon 
                    class="my-float" 
                    icon={icon} 
                    onClick={(e) => this.listen()} />
            </div>
            <div class="label-container" style={{visibility : showResults}}>
            <div class="label-text">{this.state.results}</div>
            </div>

            </>
        );
    }
}

export default AudioIn;