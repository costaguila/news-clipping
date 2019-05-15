import React, { Component } from 'react';


class NewsItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            item:props.item
        }
    }

    render(){
        return (
                <div className="newsItem">
                    <p>{this.state.item.title}</p>
                </div>
        );
    }
}

export default NewsItem;
