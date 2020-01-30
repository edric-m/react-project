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
            items: ['parent','scales']//[,'scales','chords','tuning']
        };
    }

    addItem( itemName ) {
        let temp = [];
        const n = itemName.length;
        //for each
        for(let i = 0; i < n; i++) {
            temp.push(itemName[i]);
        }
        
        this.setState({ items: temp });
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
                    trail={200}>
                    {item => styles => (
                        <animated.div 
                            style={{ ...defaultStyles, ...styles }}
                            onClick={() => this.addItem(Data.find(x => x.name === item).children)}>
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
