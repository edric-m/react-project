import React from 'react';
import Data from '../data/listData.js';

class ListItem extends React.Component {
    render () {
        let {name, content, children, changeBoard} = this.props;

        return (
            <>
            <div
            className={name}
            style={{ backgroundImage: item.css }}
            onclick={add(children).then(changeBoard)}> {// callback to caller and add those to list
            }
                <h1>{content}</h1>
            </div>
            </>
        )
    }
    
}

export default ListItem;