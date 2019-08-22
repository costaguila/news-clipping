import React, { Component } from 'react';

class Cabecalho extends Component {
    constructor(props){
        super(props)

        this.state = {
            titulo: props.titulo ? props.titulo : 'Cabecalho'
        }
    }
    render(){
        return (
            <div className="cabecalho">
            <h1>{this.state.titulo}</h1>
            </div>
        );
    }
}

export default Cabecalho;
