import React from "react";
import "./ResultsPage.css";

class ResultsPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			results: ["Jojo's Bizarre Adventure"]
		}

	}
	render() {
		return (
			<div className="ResultsPage">
				<div className="container my-5">
				ResultsPage
				</div>
				<div className="results-wrapper"> 
				{this.state.results.map((result, index) => {
					return(
						<div className="individual-result" 
							result={result}
							key={index}
						>
						{result}
						</div>
						);
				})}
				</div>
			</div>
		)
	}
}

export default ResultsPage;