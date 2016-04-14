//packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//class
class PaginationCnt extends Component {
	render(){
		var links = [];

		for (var i = 1; i <= Math.ceil(this.props.scores.length/3); i++) {
			links.push(<li key={i}><Link to={'/page/'+i} activeClassName="is-active">{i}</Link></li>);
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