import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MediaRow from './MediaRow';
import MovieSource from './MovieSource';
import DateRow from './DateRow';

class Container extends Component {

    constructor () {
        super();
        this.state = {
            category: 'Movie',
            showSource: true,
            source: '',
            dates: [],
            dateSelected: 0,
            content: ''
        }
        this.changeCategory = this.changeCategory.bind(this);
        this.changeSource = this.changeSource.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changeContent = this.changeContent.bind(this);
    }

    componentDidMount() {
        let weekDays = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
        const today = new Date()
        const yesterday = new Date(today)
        const twoDays = new Date(today);

        yesterday.setDate(yesterday.getDate() - 1);
        twoDays.setDate(today.getDate() - 2)

        let yest = weekDays[yesterday.getDay()];
        let two = weekDays[twoDays.getDay()];

        this.setState({dates: [
            {name: '...', value:'-3'},
            {name: two, value:'-2'},
            {name: yest, value:'-1'},
            {name: 'Today', value:'0'},
        ]});
    }

    changeCategory(changeTo) {
        this.setState({
            category:changeTo,
            showSource: changeTo == "Movie" ? true : false,
            source: '',
            dateSelected: 'Today'
        })
    }

    changeSource(source) {
        this.setState({
            source:source
        })
    }

    changeDate(date) {
        this.setState({
            dateSelected:date
        })
    }

    changeContent(event) {
        this.setState({
            content: event.target.value
        })
    }

    render() {
        return (
            <div className="container">

                <MediaRow category={this.state.category} change={this.changeCategory}></MediaRow>
                {this.state.showSource ? <MovieSource source={this.state.source} change={this.changeSource}></MovieSource> : null}

                <DateRow selected={this.state.dateSelected} change={this.changeDate} dates={this.state.dates}></DateRow>

                <div className="flex pt-2 w-80 mt-2 bg-green-200">
                    <label htmlFor="media_name">Name: </label>
                    <input className="border-2 border-black rounded"
                           type="text"
                           name="media_name"
                           onChange={this.changeContent}
                           value={this.state.content}
                    />
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
