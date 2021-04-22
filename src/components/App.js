import React from 'react';
import Unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

// This is a class component as it allows a callback method to
// be passed as a prop to the child, SearchBar. Then when the
// user submits the form, the callback method will be called in
// the App class with the searchTerm that is provided.
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {images: []};
	}

	// async keyword used for API calls that require some time to retrieve data
	onSearchSubmit = async (term) => {
		const res = await Unsplash.get('/search/photos', {
			params: {query : term}
		});

		this.setState({images: res.data.results});
	}
	
	render() {
		return(
			<div className='ui container'>
				<SearchBar onSubmit={this.onSearchSubmit}/>
				<ImageList images={this.state.images}/>
			</div>
		);
	};
}

export default App;