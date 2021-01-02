import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MediaRow extends Component {

    render () {
        let categories = ['Movie', 'TV', 'Game', 'Book'];

        return <div className="mx-auto flex">
            {categories.map(cat => <div key={cat}
                    className={`${this.props.category==cat ? "bg-green-500" : ""} w-20 h-20 rounded text-center border-2 border-black flex mr-2`}
                    onClick={() => this.props.change(cat)}
                >
                <div className="m-auto">{cat}</div>
            </div>)}
        </div>;
    }
}

export default MediaRow;