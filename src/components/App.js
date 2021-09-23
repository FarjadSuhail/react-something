import React from 'react';
//import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList
 from './ImageList';
class App extends React.Component {

    //whenever we expect object elements to be an array
    //initilaize with empty array []
    //this allows to call some func e.g
    //.map() w/o getting errors like undefined etc.
    state = {images: [] };

    onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
        params:{query: term} 
        // headers:{
        //         Authorization: 'Client-ID JjeTz8HgAKv_7lLfpi67eUFq9hT82kPIHAMRRxwzmI0'
        //     }
        });
        // }).then((response) => {
        //     console.log(response.data.results);
        // });

        console.log(response.data.results);

        console.log(this);
        this.setState({images: response.data.results});

    }


    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;