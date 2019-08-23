import React, { Component } from 'react';
import axios from 'axios';

import NewsItem from './News_item';
import SearchBar from '../searchbar/SearchBar';

import { getNews, getNewsSource } from '../../services/newsService';

class NewsList extends Component {

    constructor(props){
        super(props)
        let fontes = [];
        let noticias = [];
        this.state = {
            fontes: fontes,
            fontesFiltradas: fontes,
            itens: noticias,
            searchbar: props.searchbar ? props.searchbar : true
        }
    }

    componentDidMount(){
      axios.all([getNews(),getNewsSource()]).then(axios.spread((noticias,fontes)=>{
        this.setState({itens:noticias, fontes:fontes, fontesFiltradas:fontes})
      }))
    }

    getFonteName(title){
        return title ? title : 'Nao informado'
    }

    filterListas(name) {
        if (name !== ""){
            let filtro = this.state.fontes.filter(x => x.name.toUpperCase().match(name.toUpperCase()));
            this.setState( {fontesFiltradas: filtro} );
        }else{
            this.setState( {fontesFiltradas: this.state.fontes} );
        }
    }

    render(){
        return (
            <div key='listaDeNoticias'>
                <SearchBar filterListas={this.filterListas.bind(this)} />
                {this.state.fontesFiltradas.map(fonte =>(
                    <div className="newsSource" key={fonte.name} >
                        <div className="newssourceHeader"><h1># {this.getFonteName(fonte.name)}</h1></div>
                        <div className="newssourceContainer">
                            {this.state.itens
                                .filter(noticias => noticias.spider === fonte.name)
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
