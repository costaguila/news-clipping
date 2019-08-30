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
            itensFiltrados: noticias,
            searchbar: props.searchbar ? props.searchbar : true
        }
    }

    componentDidMount(){
      axios.all([getNews(),getNewsSource()]).then(axios.spread((noticias,fontes)=>{
        this.setState({itens:noticias,itensFiltrados:noticias, fontes:fontes, fontesFiltradas:fontes})
      }))
    }

    getFonteName(title){
        return title ? title : 'Nao informado'
    }

    filterListas(name) {
        if (name !== ""){
            let filtro = this.state.fontes.filter(x => x.name.toUpperCase().includes(name.toUpperCase()));
            this.setState( {fontesFiltradas: filtro} );
        }else{
            this.setState( {fontesFiltradas: this.state.fontes} );
        }
    }

    filterNome(name) {
        if (name !== ""){
            let filtro = this.state.itens.filter(x => x.title.toUpperCase().includes(name.toUpperCase()));
            this.setState( {itensFiltrados: filtro} );
        }else{
            this.setState( {itensFiltrados: this.state.itens} );
        }
    }

    render(){
        const listaNoticiasPorFonte = this.state.fontesFiltradas.map(fonte =>(
          <div className="newsSource" key={fonte.name} >
              <div className="newssourceHeader">
                <h1># {this.getFonteName(fonte.name)}</h1>
              </div>
              <div className="newssourceContainer">
                  {
                    this.state.itensFiltrados.filter(noticias => noticias.spider == fonte.name)
                    .map(item => <NewsItem key={item.link} item={item}/> )
                  }
              </div>
          </div>
        ))

        return (
            <div key='listaDeNoticias'>
                <SearchBar  legenda='Busca por fonte' filterListas={this.filterListas.bind(this)} />
                <SearchBar  legenda='Busca por titulo' filterListas={this.filterNome.bind(this)} />
                {listaNoticiasPorFonte}
            </div>
        )
    }
}

export default NewsList;
