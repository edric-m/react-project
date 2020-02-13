import React from 'react';
import {Transition, animated} from 'react-spring/renderprops';
import Data from '../data/optionsListData.js';

const defaultStyles = {
    overflow: 'hidden',
    width: '100%',
    color: 'black',
    //display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1em',
    fontFamily: "'Kanit', sans-serif",
    textTransform: 'uppercase',
}

//const messagesEndRef = React.createRef();

//from HomePage.js center={this.chooseKey} scale={this.chooseScale} tune={this.chooseTuning} <- props
class OptionsListTransition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: ['sca','crd','tun','dsp'],//[,'scales','chords','tuning'],
            items: ['sca','crd','tun','dsp'],
            chordType: "null"
        };
    }

    chordNotes (root) {
        const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
        //rearrange notes depending on root
        let temp = [];
        let x = notes.indexOf(root);
        for (let i=0;i<12;i++) {
            if(x+i===12) {
                x=0-i;
            }
            
            temp.push(notes[ x + i ]);
        }
        let selectedNotes = [];
        switch(this.state.chordType) {
            case "maj":
                selectedNotes = [0,4,7];
                break;
            case "min":
                selectedNotes = [0,3,7];
                break;
            case "maj7":
                selectedNotes = [0,4,7,11];
                break;
            case "min7":
                selectedNotes = [0,3,7,10];
                break;
            case "7":
                selectedNotes = [0,4,7,10];
                break;
            case "dim":
                selectedNotes = [0,3,6];
                break;
            case "aug":
                selectedNotes = [0,4,8];
                break;
            case "sus2":
                selectedNotes = [0,2,7];
                break;
            case "sus4":
                selectedNotes = [0,5,7];
                break;
            case "null":
                return [];
            default:
                return [];
        }
        
        return selectedNotes.map(x => temp[x]);
    }

    clickItem( itemName ) {
        let temp = this.state.items;
        let x = Data.find(x => x.name === itemName);
        let children = x.children;
        const n = children.length;
        const maxListLength = 26;

        //temp.pop();
        //temp.pop();
        //temp.pop();
        //temp.pop();
        //remove main functions temporaraly
        temp.splice(0,4);

        //TODO: if n == 0 jump to executing function
        if(n > 0) {
            while(temp.length > maxListLength) {
                temp.shift();
            }
    
            //for each new item to add
            for(let i = 0; i < n; i++) {
                
                if(temp.length === maxListLength) {
                    //temp.shift();
                    temp.pop();
                }
    
                if(!temp.includes(children[n-(i+1)]))
                {
                    //temp.push(children[i]);
                    temp.unshift(children[n-(i+1)]);
                }
                //TODO: else remove them, then add them again to the top
            }
        }

        

        //then execute function here?
        let code = x.function;
        if(code !== []) {
            switch(code[0]) {
                case 'K':
                    this.props.center(code.slice(2));
                    break;
                case 'M': 
                    this.props.scale(code.slice(2));
                    break;
                case 'T': 
                    this.props.tune(code.slice(2).split(" "));
                    break;
                case 'C':
                    this.props.chord(this.chordNotes(code.slice(2)));
                    break;
                case 'S':
                    this.setState({chordType: code.slice(2)});

                    if(code.slice(2) === "null") {
                        this.props.chord([]);
                    } else {
                        //TODO: works for not, dont like how this is done, page is kind of slow
                        let tempItems = this.state.items;
                        //console.log(tempItems);
                        if(tempItems[0].length > 2) {
                            //console.log(tempItems.shift()); 
                            tempItems.shift(); //remove the previous chord title
                        }
                        tempItems.unshift(code.slice(2) + "Title");
                        this.setState({items: tempItems});
                        //console.log(tempItems);
                    }
                    break;
                case 'D':
                    if(code.slice(2) === "N") {
                        this.props.changeDisplay(true);
                    } else {
                        this.props.changeDisplay(false);
                    }
                    break;
                default:
                    //default case
            }
        }
        
        //temp.push('scales');
        //temp.push('chords');
        //temp.push('tuning');
        //temp.push('changeDisplay');

        //let menu = this.state.menuItems;
        //let newItems = this.state.items;
        let result = this.state.menuItems.concat(this.state.items);
        
        //console.log(this.state.items);
        this.setState({ items: result });

        //this.scrollToBottom();
    }

    //force scroll to the bottom of the options list
    //scrollToBottom = () => {
    //    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    //}

    render() {
        //const {center, scale, tune} = this.props;
        //const items = this.state.itemsList;
        
        return (
            <>
            <div className="appFunctions">
                <Transition
                    items={this.state.items}
                    //initial={null}
                    from={{ overflow: 'hidden', height: 0, opacity: 0 }}
                    enter={{ height: 28, opacity: 1, background: '#FCFFFF' }} //height: 38 previously
                    leave={{ height: 0, opacity: 0, background: '#FCFFFF' }}
                    update={{ background: '#FCFFFF' }}
                    trail={50}>
                    {item => styles => (
                        <animated.div 
                            className={item.length > 3 ? "appFunctionsItem" : "appFunctionsShortItem"}
                            style={{ ...defaultStyles, ...styles }}
                            onClick={() => this.clickItem(item)}>
                                <div className={item.length > 3 ? "appFunctionsItem" : "appFunctionsShortItem"}>
                                    {Data.find(x => x.name === item).content + " "}
                                </div>
                            
                        </animated.div>
                    )}
                </Transition>

                {
                //<div ref={messagesEndRef} />
                }

            </div>    
            </>
        )
    }
}

export default OptionsListTransition;
