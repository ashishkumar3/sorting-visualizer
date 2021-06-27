import React from 'react';
import './Header.css';

class Header extends React.Component {

    // constructor(props: any) {
    //     super(props);
        state = {
            algorithms : ['Bubble Sort', 'Quick Sort', 'Merge Sort']
        }
    // }

    render() {
        return (<div className="header">
            {this.state.algorithms.map((algorithm, index) => <li key={index}>{algorithm}</li>)}
        </div>);
    }
}

export default Header;