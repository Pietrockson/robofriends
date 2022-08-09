import React from 'react';

const Scroll = (props)=> {
    return (
        <div style= {{overflowY: 'scroll', border: ' 1px solid light-gray', height: '400px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;