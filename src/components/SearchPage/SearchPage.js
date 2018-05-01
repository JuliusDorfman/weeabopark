import React from 'react';
import "./SearchPage.css";


class SearchPage extends React.Component {
	render(){
		return(
			<div className="SearchPage">
				<div className="container">
					<input type="text" name="searchbar" placeholder="Nani?!" />
					<input type="submit" value="Submit" />
				</div>
			</div>
		)
	}
}

export default SearchPage;