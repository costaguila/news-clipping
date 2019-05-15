import React, {Component} from 'react';
import NewsList from '../news/NewsList.js';
import { getNewsSource } from '../../services/newsService'
class Corpo extends Component {

    constructor(props){
        super(props)

        this.state = {
            listas : getNewsSource()
        }
    }

    render(){
        return (
            <div id="container">
            {
                this.state.listas.map((lista)=>
                (<NewsList name={ lista.title } />)
                )
            }

            </div>

        );
    }
}

export default Corpo;
