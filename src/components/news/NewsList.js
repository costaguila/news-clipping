import React, { Component } from 'react';


class NewsList extends Component {

    constructor(props){
        super(props)
        this.state = {
            itens: [],
            name: props.name ? props.name : 'Nao informado'
        }
    }

    render(){
        return (
            <div className="newsSource">
                <div className="newssourceHeader"><h1># {this.state.name}</h1></div>
                <div className="newsItem">{this.state.itens.map(item=>(<p>{item.title}</p>))}</div>
            </div>
        );
    }
}

export default NewsList;
