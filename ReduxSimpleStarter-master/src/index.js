//get react from modules because in JS you cant access imports of other file
//find 'react' and assign to React in this file

// react react to component
import React, {Component} from 'react';
//react-dom renders element to DOM
import ReactDOM from 'react-dom';

//for files we create we need to provide path reference
import SearchBar from './components/search_bar';

import VideoList from './components/video_list';
//1. create a new component. The component will produce some html
//2. Take this component's generated html and put it on DOM
const API_KEY='AIzaSyB-qlyGQHHOUv0umQeHTDjKKu6m2qWpOuY';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
import _ from 'lodash';


//EX6 code. const is transcript code, is constant will not change.
class App extends Component{

	constructor(props){
		super(props);
		this.state={videos:[], selectedVideo:null};
		this.videoSearch('surfboards');
	}

	videoSearch(term){
		YTSearch({key:API_KEY,term:term},(videos)=>{
		console.log(videos);
		this.setState({
			videos:videos,
			selectedVideo:videos[0]
			});
		});
	}

	//JSX is subset of JS. Allow to write HTML. JSX gets converted to html which is 
	//placed on our page by webpack.
	// JSX gets compiled to vanilla JS
	render(){

		//debounce function will make this.videosearch to be called afetr 300 ms
		//trigger new search after 300ms
		const videoSearch= _.debounce((term)=>{this.videoSearch(term)},300);
	return (<div> 
		<SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
		<VideoDetail video={this.state.selectedVideo} />
		<VideoList onVideoSelect={selectedVideo=>{this.setState({selectedVideo})}}
		 videos={this.state.videos} />
	 </div>
	 );
}

}

//2.
//We are passing App class and therefore we need to create instance of App and pass to JS

ReactDOM.render(<App />, document.querySelector('.container'));