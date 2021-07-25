//Project Dependencies
import React, {Component} from 'react';
import './App.css';
import {
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import axios from 'axios';


//App Components
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

//My Flickr API
import apiKey from './config';


class App extends Component {

  //State is declared with image objects as empty arrays
  state = {
    images: {
      beach:[],
      mountain:[],
      desert:[]
    },
  }

  //When App component mounts, request data for 3 presets
  componentDidMount() {
    this.requestFlickrURLs('beach');
    this.requestFlickrURLs('mountain');
    this.requestFlickrURLs('desert');


    let currentURLQuery = this.props.location.pathname.slice(1);
    if(currentURLQuery) {
      this.requestFlickrURLs(currentURLQuery)
    }    
  }


  requestFlickrURLs = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&sort=relevance`)
      .then( response => {
        //Make sure Flickr returns a real response
        if(typeof response.data === 'object') {
          this.setState(prevState => {
            return {
              images: {
                ...prevState.images,
                [query]: response.data.photos.photo
              },
            }
          })
        }
    })
      .catch(function (error) {

        console.log(error);
    });
  }

  render() {
    
    return (
        <div className="container">

          <Route path="/" render={(props) => <SearchForm {...props} onSearch={this.requestFlickrURLs} />} />
          <Route path="/" component={Nav} />
          <Switch>
            <Route exact path ="/">
              <Redirect to="/beach" />
            </Route>
            <Route path="/:search" render={ () => <PhotoContainer data={this.state.images} /> } />
          </Switch>

        </div>
    );
  }
}

export default App;