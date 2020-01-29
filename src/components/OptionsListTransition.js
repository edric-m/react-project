import React from 'react';
//import ListItem from '../components/listItem.js';
import {Transition, animated} from 'react-spring/renderprops';

const defaultStyles = {
    overflow: 'hidden',
    width: '100%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2em',
    fontFamily: "'Kanit', sans-serif",
    textTransform: 'uppercase',
}

//from HomePage.js center={this.chooseKey} scale={this.chooseScale} tune={this.chooseTuning} <- props
class OptionsListTransition extends React.Component {
    state = { items: [] }

    async componentDidMount() {
        this.setState({ items: [] });
        setTimeout(() => {
            this.setState({ items: ['click me'] });
        },1000);
        
    }

    render() {
        //const {center, scale, tune} = this.props;
        //const items = this.state.itemsList;
        
        return (
            <>
            <div className="appFunctions"
                onClick={() => this.componentDidMount()}>
                <Transition
                    items={this.state.items}
                    //initial={null}
                    from={{ overflow: 'hidden', height: 0, opacity: 0 }}
                    enter={{ height: 50, opacity: 1, background: '#28d79f' }}
                    leave={{ height: 0, opacity: 0, background: '#c23369' }}
                    update={{ background: '#28b4d7' }}
                    trail={200}>
                    {item => styles => (
                        <animated.div style={{ ...defaultStyles, ...styles }}>
                        {item}
                        </animated.div>
                    )}
                </Transition>
            </div>
            </>
        )
    }
}

export default OptionsListTransition;
