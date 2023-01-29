import React, { Component } from 'react';

class Overview extends Component {
    render() {
        const taskAndIDArray = this.props.taskAndIDArray;
        return (
            <ul className='Overview'>
                {/* TODO: use uniqid for unique ID's like at
                https://www.theodinproject.com/lessons/node-path-javascript-handle-inputs-and-render-lists */}
                {taskAndIDArray.map((pair) => {
                    const taskString = pair[0];
                    const uniqueID = pair[1];
                    return <li key={uniqueID}>
                        {taskString}
                    </li>
                })}
            </ul>
        );
    }
}

export default Overview
