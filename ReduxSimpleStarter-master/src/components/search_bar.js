import React, {Component} from 'react';

//functional component
/*const SearchBar = () => {
	return <input />;
};*/

//class component
class SearchBar extends Component{

	constructor(props){
		super(props);
		this.state={term:''}; //record property term on state
	}

	//every react component class based has render menthod
	//setState will re-render the component and reflect updated value
	render() {
		return (
			<div className="search-bar"> 
			
			<input 
			value={this.state.term}
			onChange={event=>{this.onInputChange(event.target.value)}}
			/>
			
			</div>
			);
	}

	//on or handle, followed by element name and event
	
	onInputChange(term){

		this.setState({term});
		this.props.onSearchTermChange(term);
		//console.log(event.target.value);
	}
}

//any file that imports searchbar.js can use searchbar
export default SearchBar;

//STATE: plain JS object to record and react to events. Each class has its on state object
// class component has a state and state changes, render() function will be re-ran
// functional component doesnt have state
//state should tell input what value to take
//CONTROLLED FIELD: