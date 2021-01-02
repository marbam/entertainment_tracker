import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MovieSource extends Component {

    render () {
        let sources = [
            {'name': 'Netflix', 'customColor': true, 'colorClass': 'text-red-900'},
            {'name': 'Cinema'},
            {'name': 'TV'},
            {'name': 'Other'}
        ]

        return <div className="mx-auto flex pt-2">
            {sources.map((source, index) => <div key={index}
                    className={`${source.customColor ? source.colorClass : ""} ${this.props.source == source.name ? "bg-green-500" : ""} w-20 h-20 rounded text-center border-2 border-black flex mr-2 uppercase`}
                    onClick={() => this.props.change(source.name)}
                >
                <div className="m-auto">{source.name}</div>
            </div>)}
        </div>;
    }
}

export default MovieSource;