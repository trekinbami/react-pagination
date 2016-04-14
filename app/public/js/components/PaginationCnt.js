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

		let pageId = parseInt(this.props.pageId);

		if( pageId > 1 ){
			links.unshift(<li key="prev01" className="prev-btn"><Link to={'/page/'+(pageId-1)} activeClassName="is-active">&#9668;</Link></li>);
		}	

		if( pageId < Math.ceil(this.props.scores.length/3)){
			links.push(<li key="next01" className="next-btn"><Link to={'/page/'+(pageId+1)} activeClassName="is-active">&#9658;</Link></li>)	
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