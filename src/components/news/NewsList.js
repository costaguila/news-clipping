import React, { Component } from 'react';

import NewsItem from './News_item';
import SearchBar from '../searchbar/SearchBar';

import { getNews, getNewsSource } from '../../services/newsService';

class NewsList extends Component {

    constructor(props){
        super(props)
        let fontes = getNewsSource();
        this.state = {
            fontes: fontes,
            fontesFiltradas: fontes,
            itens: getNews(),
            searchbar: props.searchbar? props.searchbar : true 
        }
    }

    getFonteName(title){
        return title ? title : 'Nao informado'
    }

    filterListas(name) {
        if (name !== ""){
            let filtro = this.state.fontes.filter(x => x.title.toUpperCase().match(name.toUpperCase()));
            this.setState( {fontesFiltradas: filtro} );
        }else{
            this.setState( {fontesFiltradas: this.state.fontes} );
        }
    }

    render(){
        return (
            <div id="">
                <SearchBar filterListas={this.filterListas.bind(this)} />
                {this.state.fontesFiltradas.map(fonte =>(
                    <div className="newsSource" key={fonte.id} >
                        <div className="newssourceHeader"><h1># {this.getFonteName(fonte.title)}</h1></div>
                        <div className="newssourceContainer">
                            {this.state.itens
                                .filter(noticias => noticias.id === fonte.id)
                                .map(item => (<NewsItem item={item}/>))
                            }
                        </div>
                    </div>
                    ))
                }
            </div>
        )
    }
}

export default NewsList;
