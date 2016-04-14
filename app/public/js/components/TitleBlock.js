//packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//class
class TitleBlock extends Component {
	render(){
		return (
			<h1 className="title-block">{this.props.title}</h1>
		)
	}
}

export default TitleBlock;