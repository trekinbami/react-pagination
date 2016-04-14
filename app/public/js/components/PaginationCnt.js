//packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//modules
import Pagination from './Pagination';

//class
class PaginationCnt extends Component {
	constructor(){
		super(...arguments);
	}

	//totaal aantal dingetjes berekenen. actieve zetten.
	render(){
		var links = [];

		for (var i = 1; i <= Math.ceil(this.props.scores.length/3); i++) {
			links.push(<li key={i}><Link to={'/page/'+i} activeClassName="is-active" onClick={this.props.filterScores.bind(null, this.props.scores)}>{i}</Link></li>);
		}

		return (
			<div className="pagination">
				<ul>
					{links}
				</ul>
			</div>
		)
	}
}

export default PaginationCnt;