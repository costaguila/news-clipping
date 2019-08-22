import React, {Component} from 'react';
import NewsList from '../news/NewsList.js';

class Corpo extends Component {

    render(){
        return (
            <div id="container">
                <NewsList searchbar={true}/>
            </div>

        );
    }
}

export default Corpo;
