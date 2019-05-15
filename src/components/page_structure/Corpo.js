import React, {Component} from 'react';
import NewsList from '../news/NewsList.js';

class Corpo extends Component {

    constructor(props){
        super(props)

        this.state = {
            listas : [{name:'jose'},{name:'g1'},{name:'desgraca'}]
        }
    }

    render(){
        return (
            <div id="container">
            {
                this.state.listas.map((lista)=>
                (<NewsList name={ lista.name } />)
                )
            }

            </div>

        );
    }
}

export default Corpo;
