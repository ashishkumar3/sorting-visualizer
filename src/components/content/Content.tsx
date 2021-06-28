import React, { useState } from 'react';
import './Content.css';

function Content(props: any) {
    const [barCount, setBarCount] = useState(0);
    return (<div className="content">
        <div>{}</div>
        {/* <input type="range" min="1" max="100" id="myRange"></input> */}
        <button onClick={() => setBarCount(barCount + 1)}>+1</button>
    </div>);
}

export default Content;