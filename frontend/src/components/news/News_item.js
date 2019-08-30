import React, { Component } from 'react';
import thumb from './no_image.png'

class NewsItem extends Component {

    constructor(props){
        super(props)
        this.state = {
            item:props.item
        }
    }

    getSubtitle(){
      var legenda = ""

      try{
        legenda = "" + this.state.item.section

        if(typeof(this.state.item.published_at) != "undefined"){
          legenda += " - " + this.state.item.published_at;
        }else{
          legenda += " - " +  Date(this.state.item.crawled_at.$date.$numberLong);
        }
      }catch(e){
        console.log(e);
      }

      return legenda
    }

    render(){
        return (
                <div className="newsItem">
                      <div id="image_container">
                        <img src={this.state.item.image ? this.state.item.image : thumb } alt="Imagem não fornecida"/>
                      </div>
                      <div id="content">
                        <h2>{this.state.item.title}</h2>
                        <p>{this.getSubtitle()}</p>
                        <p><a href={this.state.item.link} target="_blank">Link</a></p>
                      </div>
                </div>
        );
    }
}

export default NewsItem;
