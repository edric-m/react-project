import React from 'react';
import {Transition, animated} from 'react-spring/renderprops';
import Data from '../data/optionsListData.js';

const defaultStyles = {
    overflow: 'hidden',
    width: '100%',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5em',
    fontFamily: "'Kanit', sans-serif",
    textTransform: 'uppercase',
}

//from HomePage.js center={this.chooseKey} scale={this.chooseScale} tune={this.chooseTuning} <- props
class OptionsListTransition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['scales','tuning']//[,'scales','chords','tuning']
        };
    }

    clickItem( itemName ) {
        let temp = ['scales','tuning'];
        let x = Data.find(x => x.name === itemName);
        let children = x.children;
        const n = children.length;

        //for each
        for(let i = 0; i < n; i++) {
            temp.push(children[i]);
        }
        
        this.setState({ items: temp });

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
                    this.props.tune(code.slice(2), 'C'); //second argument shouldnt work
                    break;
                default:
                    //default case
            }
        }
    }

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
                    enter={{ height: 38, opacity: 1, background: '#FCFFFF' }}
                    leave={{ height: 0, opacity: 0, background: '#FCFFFF' }}
                    update={{ background: '#FCFFFF' }}
                    trail={50}>
                    {item => styles => (
                        <animated.div 
                            style={{ ...defaultStyles, ...styles }}
                            onClick={() => this.clickItem(item)}>
                            {Data.find(x => x.name === item).content}
                        </animated.div>
                    )}
                </Transition>
            </div>
            </>
        )
    }
}

export default OptionsListTransition;
