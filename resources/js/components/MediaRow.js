import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MediaRow extends Component {
    constructor () {
        super();
        this.state = {
            category: 'Movie',
        }
        this.changeSelected = this.changeSelected.bind(this);
    }

    changeSelected(changeTo) {
        this.setState({
            category:changeTo
        })
    }


    render () {

        let categories = ['Movie', 'TV', 'Game', 'Book'];

        return <div className="mx-auto flex">
            {categories.map(cat => <div key={cat}
                    className={`${this.state.category==cat ? "bg-green-500" : ""} w-20 h-20 rounded text-center border-2 border-black flex mr-2`}
                    onClick={() => this.changeSelected(cat)}
                >
                <div className="m-auto">{cat}</div>
            </div>)}
        </div>;
    }
}

export default MediaRow;