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
            items: ['scales','chords','tuning']
        };
    }

    addItem() {
        let temp = this.state.items;
        temp.push('A#');
        this.setState({ items: temp });
    }

    render() {
        //const {center, scale, tune} = this.props;
        //const items = this.state.itemsList;
        
        return (
            <>
            <div className="appFunctions"
                onClick={() => this.addItem()}>
                <Transition
                    items={this.state.items}
                    //initial={null}
                    from={{ overflow: 'hidden', height: 0, opacity: 0 }}
                    enter={{ height: 38, opacity: 1, background: '#FCFFFF' }}
                    leave={{ height: 0, opacity: 0, background: '#FCFFFF' }}
                    update={{ background: '#FCFFFF' }}
                    trail={200}>
                    {item => styles => (
                        <animated.div style={{ ...defaultStyles, ...styles }}>
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
