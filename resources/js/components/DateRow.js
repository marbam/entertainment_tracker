import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class DateRow extends Component {

    render () {
        return <div className="mx-auto flex pt-2">
            {this.props.dates.map((date, index) => <div key={index}
                    className={`${this.props.selected==date.name ? "bg-green-500" : ""} w-20 h-20 rounded text-center border-2 border-black flex mr-2`}
                    onClick={() => this.props.change(date.name)}
                >
                <div className="m-auto">{date.name}</div>
            </div>)}
        </div>;
    }
}

export default DateRow;