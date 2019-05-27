import React, { Component } from 'react';
//import thumb from './no_image.png'
var thumb = 'http://url.errada'
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
                    <img src={thumb} alt="Imagem nao fornecida" />
                    <p>{this.state.item.title}</p>
                </div>
        );
    }
}

export default NewsItem;
