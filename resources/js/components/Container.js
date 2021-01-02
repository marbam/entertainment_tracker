import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaRow from './MediaRow';
import MovieSource from './MovieSource';


class Container extends Component {

    constructor () {
        super();
        this.state = {
            category: 'Movie',
            showSource: true,
            source: ''
        }
        this.changeCategory = this.changeCategory.bind(this);
        this.changeSource = this.changeSource.bind(this);
    }

    changeCategory(changeTo) {
        this.setState({
            category:changeTo,
            showSource: changeTo == "Movie" ? true : false,
            source: '',
            dateSelected: 'today'
        })
    }

    changeSource(source) {
        this.setState({
            source:source
        })
    }

    render() {
        return (
            <div className="container">

                <MediaRow category={this.state.category} change={this.changeCategory}></MediaRow>
                {this.state.showSource ? <MovieSource source={this.state.source} change={this.changeSource}></MovieSource> : null}

                <div className="mx-auto flex pt-2">
                    <div className="w-20 h-20 rounded text-center flex border-2 border-black">
                        <ion-icon className="m-auto" size="large" name="ellipsis-horizontal-outline"></ion-icon>
                    </div>

                    <div className="w-20 h-20 rounded flex border-2 border-black ml-2">
                        <div className="inline-block m-auto text-center">SUN 28TH</div>
                    </div>

                    <div className="w-20 h-20 rounded flex border-2 border-black ml-2">
                        <div className="inline-block m-auto text-center">MON 28TH</div>
                    </div>

                    <div className="w-20 h-20 bg-green-500 rounded flex border-2 border-black ml-2">
                        <div className="inline-block text-center m-auto">Today</div>
                    </div>
                </div>

                <div className="flex pt-2 w-80 mt-2">
                    <input name="content border-2 border-black" type="text" />
                </div>

                <button className="w-80 bg-green-600 text-white rounded border-2 border-black py-4 ml-4">Save</button>
            </div>
        );
    }
}

export default Container;

if (document.getElementById('container')) {
    ReactDOM.render(<Container />, document.getElementById('container'));
}
