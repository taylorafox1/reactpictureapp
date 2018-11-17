import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 
          'Client-ID d93ad5620b3d4ffedd963d392d1f216b8d47f2d96193d202d631010abad87faf'
      }
    });
  }

  render() {
  return (
    <div className='ui container' style={{ marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
  );
  }
}

export default App;