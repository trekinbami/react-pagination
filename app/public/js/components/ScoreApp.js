//packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//modules
import ScoreRow from './ScoreRow';

class ScoreApp extends Component {
	render(){
		return (
			<ul className="scores">
				{ this.props.scores.map((match, i) => 
					<ScoreRow awayPlayer={match.awayPlayer} homePlayer={match.homePlayer} awayScore={match.awayScore} homeScore={match.homeScore} key={i} /> 
					)
				}	
			</ul>
		)
	}
}

export default ScoreApp;