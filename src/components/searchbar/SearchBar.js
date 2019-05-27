import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            callback: props.filterListas,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value},this.state.callback(event.target.value));

    }

    render(){
        return (
            <form>
                <label>Busca de notícias:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
            </form>
        );
    }
}

export default SearchBar;
