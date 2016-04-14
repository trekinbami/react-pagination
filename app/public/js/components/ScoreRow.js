//packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ScoreRow extends Component{
	render(){
		return(
			<li>
				<span>{this.props.homePlayer}</span>
				<span>{this.props.homeScore}</span>
				<span>{this.props.awayPlayer}</span>
				<span>{this.props.awayScore}</span>
			</li>
		)
	}
}

export default ScoreRow;